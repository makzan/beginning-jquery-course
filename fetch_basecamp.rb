require 'rubygems'
require 'nokogiri'
require 'rest_client'

page = Nokogiri::HTML(RestClient.get("https://public.3.basecamp.com/p/28d3eaTmLNfacdzsMkZZMsX8"))

title = page.css("h2").to_s.gsub(/<\/h2>/,"").gsub(/<h2[^>]*>/,"")

content = page.css(".formatted_content > div").to_s
content = content.gsub(/<br>/,"\n").gsub(/<\/?div>/,"").gsub(/<\/a>/,"").gsub(/<a[^>]*>/,"")

puts title
puts content