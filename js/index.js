$(document).ready(function(){
  quoteGen();
});

var ranQuote;
var ranPerson;
var b;

function quoteGen() {
  $.getJSON("http://www.quotzzy.co/api/quote", function(a) {
    var ranQuote = a.text;
    var ranPerson = a.author.name;
    console.log("start2244");
    b = ranQuote.concat("<br> - ",ranPerson);
    $(".quote").html(b);
  });
};

$("#tweet").on("click", function(){ 
 
 console.log("fje");   window.open("https://twitter.com/intent/tweet?text=" + b.replace("<br>", ""));
});

$("#newquote").on("click", function(){
  quoteGen();
});