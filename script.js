$(window).scroll(function() {
    console.log("Scroll event triggered!");
    const scrollTop = $(window).scrollTop();
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    $("#progress-bar").css("width", scrollPercentage.toFixed(2) + "%"); 
  });