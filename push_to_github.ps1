# Push to GitHub Script for Asiatis Singapore

# 1. Initialize Git (already done, but safe to repeat)
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit for Asiatis Singapore B2B Landing Page"

# 4. Create new GitHub repository (Public by default, using GitHub CLI)
# Ensure you have 'gh' installed and are logged in (gh auth login)
gh repo create asiatis-singapore --public --source=. --remote=origin --push

Write-Host "Code pushed successfully to asiatis-singapore GitHub repository." -ForegroundColor Green
