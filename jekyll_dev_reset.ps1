# Utility script to reset the local Jekyll environment
Write-Output "Cleaning local build artifacts..."
Remove-Item -Recurse -Force _site, .jekyll-cache, .sass-cache, .jekyll-metadata
Write-Output "Done! Clean workspace ready."
