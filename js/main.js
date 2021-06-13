$("a[href^='#']").click(function(){
    let currentSectionID = $(this).attr("href"),
        sectionTop = $(currentSectionID).offset().top
    
  $("html, body").animate({scrollTop: sectionTop},1000)
    
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(window).ready(()=>{
    for(let i = 0;i<$(".progress-bar").length;i++){
        currentBar = $(".progress-bar").eq(i).attr("aria-valuenow");
        $(".progress-bar").eq(i).animate({width : `${currentBar}%`},1500)
    }

    
})

/**footer ico */
$(".footerIco span").fadeOut()
$(window).scroll(()=>{
    if($(window).scrollTop() <= $("header").offset().top)
    {
        $(".footerIco span").fadeOut(1000)
    }
    else{
        $(".footerIco span").fadeIn(1000)
    }
})

/**form validation */
