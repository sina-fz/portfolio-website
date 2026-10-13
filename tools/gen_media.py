"""
Builds the web-ready image set in media/ from the source originals.

GitHub Pages serves this repo raw, so there is no build step — run this by hand
whenever you add or replace a source image:

    py tools/gen_media.py

Sources (originals, kept in the repo so this is always re-runnable):
    Progects_Imgs/<Project>/...   ->  media/<project-slug>/<name-slug>-<width>.webp
    images/...                    ->  media/<name-slug>-<width>.webp

For each original it emits every ladder width that is actually smaller than the
original, plus the original width itself — so nothing is ever upscaled and no
two files for the same image ever have the same dimensions. The width is in the
filename and is the real pixel width, which is exactly what an srcset `w`
descriptor needs.

Writes media/manifest.json:  "<source path>": { "src": "<stem>", "w": [widths] }
script.js reads the same shape inline, so after adding an image, re-run this and
copy the new entry into PROJECTS_ALL.
"""
import json, os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_ROOT = os.path.join(ROOT, "media")

# Ladder is by WIDTH, matching how srcset picks candidates.
#   500  -> gallery grid cells (~250 CSS px, covers 2x displays)
#  1000  -> grid on large/retina screens, small cards
#  1600  -> work-card covers on retina
# plus the original width for the lightbox.
LADDER = [500, 1000, 1600]

SOURCES = [
    ("Progects_Imgs", True),   # mirror the per-project subfolders
    ("images", False),         # flat, straight into media/
]

EXTS = (".png", ".jpg", ".jpeg")


def slug(text):
    text = re.sub(r"\.[A-Za-z0-9]+$", "", text)          # drop extension
    text = re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-")
    return text.lower() or "image"


def quality_for(width):
    if width <= 500:
        return 82
    if width <= 1000:
        return 85
    if width <= 1600:
        return 88
    return 90


def widths_for(original_width):
    ws = [w for w in LADDER if w < original_width]
    ws.append(original_width)
    return ws


def main():
    manifest = {}
    made = skipped = 0
    out_bytes = src_bytes = 0

    for source_dir, mirror in SOURCES:
        abs_src = os.path.join(ROOT, source_dir)
        if not os.path.isdir(abs_src):
            continue

        for dirpath, _dirs, files in os.walk(abs_src):
            used_slugs = {}
            for fn in sorted(files):
                if not fn.lower().endswith(EXTS):
                    continue

                abs_file = os.path.join(dirpath, fn)
                rel_src = os.path.relpath(abs_file, ROOT).replace(os.sep, "/")

                if mirror:
                    folder = os.path.relpath(dirpath, abs_src).replace(os.sep, "/")
                    out_dir_rel = "media" if folder == "." else f"media/{slug(folder)}"
                else:
                    out_dir_rel = "media"

                name = slug(fn)
                # guard against two originals in one folder slugging the same
                key = (out_dir_rel, name)
                if key in used_slugs:
                    used_slugs[key] += 1
                    name = f"{name}-{used_slugs[key]}"
                else:
                    used_slugs[key] = 1

                out_dir = os.path.join(ROOT, out_dir_rel.replace("/", os.sep))
                os.makedirs(out_dir, exist_ok=True)

                src_bytes += os.path.getsize(abs_file)
                with Image.open(abs_file) as im:
                    im = im.convert("RGB")
                    ow, oh = im.size
                    widths = widths_for(ow)

                    for w in widths:
                        h = max(1, round(oh * (w / ow)))
                        variant = im if w == ow else im.resize((w, h), Image.LANCZOS)
                        dest = os.path.join(out_dir, f"{name}-{w}.webp")
                        variant.save(dest, "WEBP", quality=quality_for(w), method=6)
                        out_bytes += os.path.getsize(dest)
                        made += 1

                manifest[rel_src] = {"src": f"{out_dir_rel}/{name}", "w": widths}

    os.makedirs(OUT_ROOT, exist_ok=True)
    with open(os.path.join(OUT_ROOT, "manifest.json"), "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, indent=2, sort_keys=True)

    print(f"{len(manifest)} source images -> {made} webp files")
    print(f"sources : {src_bytes/1048576:.1f} MB")
    print(f"output  : {out_bytes/1048576:.1f} MB")
    print(f"manifest: media/manifest.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
