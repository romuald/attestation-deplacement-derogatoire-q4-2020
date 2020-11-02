set -e

DIR=$(dirname $0)
TARGET="$DIR/dist/"

curl -s -o /tmp/current-hash.json https://api.github.com/repos/LAB-MI/attestation-deplacement-derogatoire-q4-2020/git/ref/heads/main
mv /tmp/current-hash.json "$TARGET"
