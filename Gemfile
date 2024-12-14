# frozen_string_literal: true

source "https://rubygems.org"

# Remove the gemspec line and add direct dependencies
gem "jekyll", "~> 4.3"
gem "jekyll-theme-console"

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-relative-links'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Add webrick as it's no longer bundled with Ruby
gem "webrick", "~> 1.8"
