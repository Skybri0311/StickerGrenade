$(document).ready(function () {
    
    //load main content
    $("#main-content").load("home.html");
    
    
    
    
    
    //set last updated on date
    document.getElementById('last-updated').innerHTML = "Last modified on " + document.lastModified;
    
});

//menu activity
var loadContent= function(html,id){
    var menuContianer = document.getElementById('menu');
    //get all buttons with class="btn" inside the container
    var activeMenuOption = menuContianer.getElementsByClassName('active');
    //changes an active class name back to ""
    if(activeMenuOption.length > 0)
    {
        activeMenuOption[0].className = activeMenuOption[0].className.replace(" active","");
    }

//
    if(id != 0)
    {
        var selectedMenuOption = document.getElementById(id);
        selectedMenuOption.className += " active";
    }
    $("#main-content").load(html + ".html");
}