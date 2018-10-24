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

//= require_tree .
//= require materialize

// materialize date picker

document.addEventListener("turbolinks:load", function() {
    $('.timepicker').timepicker();
    $('.datepicker').datepicker(); 
        
    $('.sidenav').sidenav();

    $('.modal').modal();

    
    $("#search").on("click", function(){
        $.ajax({
            type: "GET",
            url: './medline.xml',
            //url: 'https://embraceyourinnerengineer.org/xml/medline.xml',
            dataType: "xml",
            success: xmlParser
        })
    })

    $("#list").on("click", function(){
        $.ajax({
            type: "GET",
            url: 'medline.xml',
            dataType: "xml",
            success: xmlList
        })
    })


  })

function xmlList(xml){
    $("#placer").children().remove();
    $(xml).find("health-topic").each(function(){
        //$('#terms').append("<ul>")
        $("#placer").append('<li>'+this.getAttribute('title')+" </li>")
        //$('#terms').append('</ul>')
    })
}

function xmlParser(xml){
    $("#placer").children().remove();
    let searchtext = $("#search-text").val().toLowerCase().trim();
   
    if (searchtext==""){
        $("#placer").append("<p>Enter a term to search</p>");
    }else if (searchtext){
    $(xml).find("health-topic").each(function(){
        let title = this.getAttribute('title').toLowerCase();
        if(title.includes(searchtext)){
            $("#placer").append('<h2>'+this.getAttribute('title')+" </h2>")
            $("#placer").append('<div>'+$(this).find("full-summary").text()+'</div')
            //$('#terms').append('<div>'+$(this).find("site").text()+'</div>')
            $('#placer').append("<ul>")
            x = this.getElementsByTagName("site");
            for (i = 0; i < x.length; i++) {
                $('#placer ul').append("<li><a href='"+x[i].getAttributeNode("url").nodeValue+"'>"+x[i].getAttributeNode("title").nodeValue +"</a></li>");
            }
            $('#placer').append('</ul>')
            }  
        })
    }else{
        $("#placer").append("<p>No records retrieved.Try browsing through the list</p>")
    }

    
}


$(document).ready(function(){
    $('.carousel').carousel(
        { duration: 100,}
    ); 

  });

  
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3600);
}

autoplay()      


//searches the medlineplus database for terms, formerly in views/appts/show.html.erb

document.querySelector('#lookup').addEventListener('click', function(e){
    let searchTerm = document.querySelector("#code").textContent;
console.log(searchTerm)
//let searchTerm = "Diabetes%20mellitus%20with%20other%20coma%20type%201%20uncontrolled"
let lang = "en";

fetch("https://connect.medlineplus.gov/service?mainSearchCriteria.v.c="+searchTerm+"&knowledgeResponseType=application/json&informationRecipient.languageCode.c="+lang)
.then( function(response){
   return response.json();
}).then(function(data){
   
   let parsedData = JSON.parse(JSON.stringify(data));
   console.log(parsedData.feed)

   let playground = document.querySelector("#playground");
   playground.innerHTML = "<div>";
   //playground.innerHTML = "<a href='"+parsedData.feed.author.url._value+"'>"
   playground.innerHTML += parsedData.feed.author.name._value
   playground.innerHTML += "</div>";
   for(let i = 0; i<parsedData.feed.entry.length;i++){
     playground.innerHTML += "<div><h3>"+parsedData.feed.entry[i].title._value+"</h3>";
     playground.innerHTML += parsedData.feed.entry[i].summary._value+"</p>"
   }


   }) 
})


window.addEventListener("load", function (e) {

let searchTerm = document.querySelector("#code").textContent;
console.log(searchTerm)
//let searchTerm = "Diabetes%20mellitus%20with%20other%20coma%20type%201%20uncontrolled"
let lang = "en";

fetch("https://connect.medlineplus.gov/service?mainSearchCriteria.v.c="+searchTerm+"&knowledgeResponseType=application/json&informationRecipient.languageCode.c="+lang)
.then( function(response){
   return response.json();
}).then(function(data){
   
   let parsedData = JSON.parse(JSON.stringify(data));
   console.log(parsedData.feed)

   let playground = document.querySelector("#playground");
   playground.innerHTML = "<div>";
   //playground.innerHTML = "<a href='"+parsedData.feed.author.url._value+"'>"
   playground.innerHTML += parsedData.feed.author.name._value
   playground.innerHTML += "</div>";
   for(let i = 0; i<parsedData.feed.entry.length;i++){
     playground.innerHTML += "<div><h3>"+parsedData.feed.entry[i].title._value+"</h3>";
     playground.innerHTML += parsedData.feed.entry[i].summary._value+"</p>"
   }


   }) 
})

