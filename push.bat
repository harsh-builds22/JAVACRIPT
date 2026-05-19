@echo off
git remote remove origin
git remote add origin https://github.com/harsh-builds22/JAVACRIPT.git
git add .
git commit -m "Initial commit"
git push -u origin main --force
pause
