source "https://rubygems.org"

# Use GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Required plugins for Minimal Mistakes with GitHub Pages
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-remote-theme"
  gem "jekyll-sitemap"
end

# Windows-specific optimization
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# Optional: Better retry handling for HTTP (Faraday)
gem 'faraday-retry'
