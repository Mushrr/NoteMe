pnpm run build

cd dist


git init
git add -A
git commit -m "deploy"
git push -f git@github.com:Mushrr/Mushrr.github.io.git main

cd ..