source "https://rubygems.org"

# GitHub Pages bundle (includes Jekyll and supported plugins)
gem "github-pages", group: :jekyll_plugins

# Required for Minimal Mistakes with GitHub Pages
gem "jekyll-include-cache"

# Additional plugins
group :jekyll_plugins do
  # These are already included in github-pages but listed for clarity
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-gist"
  gem "jekyll-remote-theme"
  gem "jekyll-optional-front-matter"
  
  # Local development only - not supported by GitHub Pages
  gem "jekyll-responsive-image" if ENV["JEKYLL_ENV"] == "development"
end
