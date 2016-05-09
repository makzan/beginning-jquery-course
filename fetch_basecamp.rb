require 'rubygems'
require 'nokogiri'
require 'rest_client'

def clean_formatted_content(content)
  # clean elements
  content = content.gsub(/<br>/,"\n").gsub(/<\/?div>/,"")

  # a href
  # content = content.gsub(/<\/a>/,"").gsub(/<a[^>]*>/,"")
  content = content.gsub(/<a class="autolinked".*>(.*)<\/a>/,'\1')

  # strong and em
  # content = content.gsub(/<strong>\s*<\/strong>/,"").gsub(/<em>\s*<\/em>/,"")
  content = content.gsub(/<\/?strong>/,"").gsub(/<\/?em>/,"")

  # list
  # content = content.gsub(/<\/?[uo]l>/,"").gsub(/<li>/, "- ").gsub(/<\/li>/, "")
  # content = content.gsub(/<ol><\/ol>/,"")

  # pre code block
  content = content.gsub(/<pre>/,"~~~\n").gsub(/<\/pre>/,"\n~~~").gsub("~~~\n~~~", "~~~")

  # figure
  content = content.gsub('</div>',"")
  .gsub('<span class="attachment__details">',"")
  .gsub(/<span data-attr="size" class="attachment__size">.*<\/span>/, "")
  .gsub('<div class="attachment__frame attachment__hideable">',"")
  .gsub('<div class="inline_media_box">', "")
  .gsub(/srcset="[^"]*"/, "")
  .gsub('alt="Preview"', "")
  .gsub(/<div class="inline_media_width_constraint"[^>]*>/,"")
  .gsub(/<div class="inline_media_height_constraint"[^>]*>/,"")
  .gsub('<figure class="attachment attachment--image png attachment--preview">',"<figure>")

  # special character
  content = content.gsub("&lt;", "<").gsub("&gt;",">").gsub("&amp;","&").gsub("  ","  ").gsub(" ","")

  return content
end


url = "https://public.3.basecamp.com/p/x5oZm9qSiXDJnhN8pdcjFfZe"

page = Nokogiri::HTML(RestClient.get(url))

links = page.css(".formatted_content a").to_s.gsub(/<a[^>]*>/,"").split("</a>")

links.each do |link|
  puts "Start process: #{link}"
  page = Nokogiri::HTML(RestClient.get(link))
  title = page.css("h2").to_s.gsub(/<\/h2>/,"").gsub(/<h2[^>]*>/,"")

  content = page.css(".formatted_content > *").to_s
  content = clean_formatted_content(content)

  # puts title
  # puts content

  File.write('source/cards/' + title + '.md', content)
  puts "#{title}.md is written to file."
end


# Course.yml

puts "Processing courses.yaml"

yml_url = "https://public.3.basecamp.com/p/hVaqyr6bG7mVMhX1Q4iLDtLp"
page = Nokogiri::HTML(RestClient.get(yml_url))

content = page.css(".formatted_content > div").to_s
content = clean_formatted_content(content).gsub("~~~","")

# puts title
# puts content

File.write('data/courses.yaml', content)
puts "data/courses.yaml is written to file."