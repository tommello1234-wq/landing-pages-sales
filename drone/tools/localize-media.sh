#!/usr/bin/env bash
# Baixa as mídias remotas (Gravyx) para ./media e reescreve media.js com caminhos locais.
# Se houver ffmpeg, re-encoda o vídeo com todos os quadros-chave (scrub perfeito no scroll).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p media
grep -oE '[a-z]+: "https[^"]+"' media.js | while IFS= read -r line; do
  key="${line%%:*}"; url="$(echo "$line" | grep -oE 'https[^"]+')"; ext="${url##*.}"
  curl -fsSL "$url" -o "media/$key.$ext" && sed -i "s#$url#media/$key.$ext#" media.js && echo "ok $key"
done
if command -v ffmpeg >/dev/null && [ -f media/fpv.mp4 ]; then
  ffmpeg -y -i media/fpv.mp4 -an -c:v libx264 -g 1 -crf 22 -movflags +faststart media/fpv-scrub.mp4 && mv media/fpv-scrub.mp4 media/fpv.mp4
fi
