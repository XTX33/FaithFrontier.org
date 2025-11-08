source "https://rubygems.org"

# Use the same stack GitHub Pages uses in production
gem "github-pages", group: :jekyll_plugins

# For `bundle exec jekyll serve` on Ruby 3+
gem "webrick", "~> 1.8"

# Optional: if you want caching support locally, GitHub already supports it
# but this keeps things explicit.
gem "jekyll-include-cache", group: :jekyll_plugins

# Windows / JRuby timezone support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster file watching on Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# JRuby http parser lock
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]