require 'nokogiri'

doc = Nokogiri::XML(open('medline.xml'))

puts doc


 