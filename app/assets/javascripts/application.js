// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require materialize

// materialize date picker

document.addEventListener("turbolinks:load", function() {
    $('.timepicker').timepicker();
    $('.datepicker').datepicker(); 

  })

$("#search").on("click", function(){
 $.ajax({
     type: "GET",
     url: 'medline.xml',
     //url: 'https://embraceyourinnerengineer.org/xml/medline.xml',
     dataType: "xml",
     success: xmlParser
 })

})

function xmlParser(xml){
    $("#terms").append("");
    let searchtext = $("#search-text").val().toLowerCase().trim();
    $(xml).find("health-topic").each(function(){
        let title = this.getAttribute('title').toLowerCase();
        
        if(title.includes(searchtext)){
            $("#terms").append('<h2>'+this.getAttribute('title')+" </h2>")
            $("#terms").append('<div>'+$(this).find("full-summary").text()+'</div')
            //$('#terms').append('<div>'+$(this).find("site").text()+'</div>')
            $('#terms').append("<ul>")
            x = this.getElementsByTagName("site");
            for (i = 0; i < x.length; i++) {
                $('#terms').append("<li><a href='"+x[i].getAttributeNode("url").nodeValue+"'>"+x[i].getAttributeNode("title").nodeValue +"</a></li>");
            }
            $('#terms').append('</ul>')
        }   
    })
    
}


$(document).ready(function(){
            
        $.ajax({
            type: "GET",
            url: 'medline.xml',
            dataType: "xml",
            success: xmlParser
        })

    })


$(".more").on("click", function(){
    console.log("howdy!")
    $("#terms").append("test")
})


$(document).ready(function(){
    $('.carousel').carousel(
        { duration: 100,}
    ); 
    
    $('.sidenav').sidenav();

    $('.modal').modal();
    console.log("X:"+Rails.root)
  });

  
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

autoplay()      


