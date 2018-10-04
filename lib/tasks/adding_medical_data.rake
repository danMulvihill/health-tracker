task :add_data => :environment do

    doc = Nokogiri::XML(open(Rails.root + 'lib/assets/medline.xml'))
    # doc = Hash.from_xml(doc.to_s)
    doc.xpath(".//health-topic").each do |node|
        
        d = node.xpath('.//descriptor')
        if d.present? && d.attr('id')
            med_id = d.attr('id').value
            name = d.text
            puts "Name: #{name}, Med id: #{med_id}"
        end

        full = node.xpath('.//full-summary')

        # puts full.text

        
        
    end
    # puts doc
end
