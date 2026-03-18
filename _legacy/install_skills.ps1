$ErrorActionPreference = 'Continue'
New-Item -ItemType Directory -Force -Path .agent\skills | Out-Null
Write-Host "1. .agent/skills directory created"

Write-Host "2. Cloning main repo..."
$tmp1 = "$env:TEMP\ag-skills"
if (Test-Path $tmp1) { Remove-Item -Recurse -Force $tmp1 }
git clone https://github.com/guanyang/antigravity-skills.git $tmp1

Write-Host "3. Copying skills..."
@("frontend-design", "nextjs-developer", "accessibility") | ForEach-Object {
    $src = "$tmp1\skills\$_"
    if (Test-Path $src) {
        Copy-Item -Recurse -Force $src ".agent\skills\"
        Write-Host "Copied $_"
    } else {
        Write-Host "Warning: $_ not found"
    }
}

Write-Host "4. Cloning awesome repo..."
$tmp2 = "$env:TEMP\aw-skills"
if (Test-Path $tmp2) { Remove-Item -Recurse -Force $tmp2 }
git clone https://github.com/sickn33/antigravity-awesome-skills.git $tmp2

Write-Host "5. Copying SEO skill..."
$seo = "$tmp2\skills\seo-blog"
if (Test-Path $seo) {
    Copy-Item -Recurse -Force $seo ".agent\skills\"
    Write-Host "Copied seo-blog"
} else {
    Write-Host "seo-blog not found. Searching..."
    if (Test-Path "$tmp2\skills") {
        Get-ChildItem -Path "$tmp2\skills" -Filter "*seo*" -Directory -Recurse | ForEach-Object {
            Copy-Item -Recurse -Force $_.FullName ".agent\skills\"
            Write-Host "Copied $($_.Name)"
        }
    }
}

Write-Host "6. Handling ui-ux-pro-max..."
if (Get-Command "uipro" -ErrorAction SilentlyContinue) {
    Write-Host "Running uipro init..."
    uipro init --ai antigravity
} else {
    Write-Host "uipro not found. Searching repos..."
    if (Test-Path "$tmp1\skills") {
        Get-ChildItem -Path "$tmp1\skills" -Filter "*ui-ux*" -Directory -Recurse | ForEach-Object { Copy-Item -Recurse -Force $_.FullName ".agent\skills\"; Write-Host "Copied $($_.Name)" }
    }
    if (Test-Path "$tmp2\skills") {
        Get-ChildItem -Path "$tmp2\skills" -Filter "*ui*ux*" -Directory -Recurse | ForEach-Object { Copy-Item -Recurse -Force $_.FullName ".agent\skills\"; Write-Host "Copied $($_.Name)" }
    }
}

Write-Host "7. Listing installed skills..."
Get-ChildItem -Path .agent\skills\ -Directory | ForEach-Object {
    $hasMd = Test-Path "$($_.FullName)\SKILL.md"
    Write-Host "$($_.Name) - Has SKILL.md: $hasMd"
}
