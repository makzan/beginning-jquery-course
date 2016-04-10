require 'rubygems'
require 'nokogiri'
require 'rest_client'

url = "https://public.3.basecamp.com/p/x5oZm9qSiXDJnhN8pdcjFfZe"

page = Nokogiri::HTML(RestClient.get(url))

links = page.css(".formatted_content a").to_s.gsub(/<a[^>]*>/,"").split("</a>")

links.each do |link|
  puts "Start process: #{link}"
  page = Nokogiri::HTML(RestClient.get(link))
  title = page.css("h2").to_s.gsub(/<\/h2>/,"").gsub(/<h2[^>]*>/,"")

  content = page.css(".formatted_content > div").to_s
  content = content.gsub(/<br>/,"\n").gsub(/<\/?div>/,"").gsub(/<\/a>/,"").gsub(/<a[^>]*>/,"").gsub("&lt;", "<").gsub("&gt;",">").gsub("  ","  ")

  # puts title
  # puts content

  File.write('source/cards/' + title + '.md', content)
  puts "#{title}.md is written to file."
end
