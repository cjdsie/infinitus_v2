require "rack/jekyll"

run Rack::Jekyll.new
echo "rack-jekyll" > .gems