var thisStep;

document.addEventListener("DOMContentLoaded", function () {
        
    if (localStorage.getItem("ken")) {        
        thisStep = localStorage["ken"];

    } else {        
        thisStep = "#secondpage";     
    }

        
    $(".begin").on("click", function (marlo) {

        marlo.preventDefault();
         
        $.mobile.changePage(thisStep);   
        
    }); 
    
    
    $(".btnNxt").on("click", function (marlo) {
    
    marlo.preventDefault();

    thisStep = $(this).attr("href");

    $.mobile.changePage(thisStep);

    localStorage.setItem("ken", thisStep);
});

    $(".btnPrv").on("click", function (marlo) {
    
    
    marlo.preventDefault();

    thisStep = $(this).attr("href");

    $.mobile.changePage(thisStep);

    localStorage.setItem("ken", thisStep);
});
});

