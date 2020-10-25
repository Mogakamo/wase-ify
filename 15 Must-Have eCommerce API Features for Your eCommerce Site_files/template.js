var wow="";
$(document).ready(function () {
    //Fixed Menu
    fixedMenu();
    //Mobile Menu
    mobileMenuInit();
    
    //Scroll down in header
    headerScrollDown();
    //Scroll up in footer
    footerScrollUp();
    //WOW animation init
    wowInit();

    moveSection($('.hero-banner-form'), $('.form-placeholder'), $('.form-container'));
    moveSection($('.hero-banner-form'), $('.form-placeholder'), $('.features-container'));
    
    //ONE, TWO, THREE COLUMN HeroSlider
    smallSliderInit();

    //Homepage HeroSlider
    homeSliderInit();

    //Homepage testimonials
    testimonialsSliderInit();


    //Homepage Services
    var brake_array = {};
    brake_array["1200"] = 4;
    brake_array["992"] = 3;
    brake_array["768"] = 2;
    brake_array["469"] = 1;
    rowModuleBreaker(".homepage .services", ".box-services", brake_array, "first", "last");

    //Homepage Features
    var brake_array = {};
    brake_array["768"] = 2;
    brake_array["469"] = 1;
    rowModuleBreaker(".homepage .features", ".feature", brake_array, "first", "last");

    //Skills animation
    if ($(".loading-skills-wrapper").length > 0) {
        skillsInit();
    }
    questionAccordion();
    hideScrollTopOnSmallScreen();
    //test
    initBrandsSlider();



});
$(window).load(function(){
   headerMenuFlyout();
   //$('img[src$=".svg"].svg-icon, .svg-icon img[src$=".svg"]').svgConvert();
});

    function moveSection(elementToMove, firstPlaceholder, secondPalceholder) {
        $(window).resize(function() {
            if (window.innerWidth < 801 && firstPlaceholder.find(elementToMove).length == 1) {
                secondPalceholder.prepend(elementToMove);
                elementToMove.css('margin-bottom','20px');
            } else if (window.innerWidth >= 801 && secondPalceholder.find(elementToMove).length == 1) {
                firstPlaceholder.prepend(elementToMove);
                elementToMove.css('margin-bottom','0px');
            }
        });
    }
function hideScrollTopOnSmallScreen() {
    $(window).resize(function () {
        if (window.innerHeight + 220 >= $("body").height()) {
            $(".footer .scroll-top").hide();
        } else {
            $(".footer .scroll-top").show();
        }
    });
    $(window).resize();
}
function wowInit() {
    
    wow = new WOW({
        mobile: false
    });
    wow.init();
}
function questionAccordion() {
    if ($("html.hs-inline-edit").length == 0) {
        $("section.question").each(function (i, e) {
            $(e).find(".panel-group").append($(e).find(".faq-box"));
            $(e).find(".hs_cos_wrapper_type_widget_container,.hs_cos_wrapper_type_custom_widget").remove();
        });
    }
    $("section.question .panel-group").attr("id", "accordion");
    $("section.question .panel-group .panel").each(function (i, e) {
        var href = $(e).find("h4.panel-title > a").attr("href");
        $(e).find("h4.panel-title > a").attr("href", href + (i + 1));

        var id = $(e).find(".panel-collapse").attr("id");
        $(e).find(".panel-collapse").attr("id", id + (i + 1));
    });
}
function headerScrollDown() {
    $(".mouse_scroll").click(function () {
        $("html, body").animate({
            scrollTop: $("#main_section").position().top - 70
        }, 1000);
        return false;
    });
}
function footerScrollUp() {
    $(".scroll-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}
function testimonialsSliderInit() {
    $('.slick-testimonial > div > span').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
}
function headerMenuFlyout(){
    if($("header.header .hs-menu-flow-horizontal > ul").length>0){

    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("top",0);
    $("header.header .hs-menu-flow-horizontal > ul > li > ul").css("top",70);

    $.each($("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul"),function(i,e){
        $(e).attr("data-parent-offset",-$(e).offset().top+70+parseInt($(window).scrollTop()));        
    });
        $.each($("header.header .hs-menu-flow-horizontal > ul li.hs-menu-depth-2"),function(i,e){
            if($(e).find(">ul").length>0){
                $(this).find(">ul").css("left",$(e).parents("ul:first").width());
            }
        });     
        $("header.header .hs-menu-flow-horizontal > ul > li").addClass("right"); 

    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("top","");
    $("header.header .hs-menu-flow-horizontal > ul > li > ul").css("top","");
    var tooBig=false;
    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li").mousemove(function(){       
       if(tooBig){           
            if(!$(this).hasClass("hover")){
                $("header.header .hs-menu-flow-horizontal > ul > li > ul > li").removeClass("hover");
                $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("top","");
            }
            $(this).find("ul").css("top",$(this).find("ul").data("parent-offset"));      
            $(this).addClass("hover");
            }else{
            $(this).find("ul").css("top",0);                      
            $(this).removeClass("hover");
}
    });
    
    $(window).resize(function(){
    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("top",0);
    $("header.header .hs-menu-flow-horizontal > ul > li > ul").css("top",70);       
    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("height","auto");
    tooBig=false;
    $.each($("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul"),function(i,e){
        if($(e).offset().top+$(e).height()>=(parseInt($(window).scrollTop())+parseInt(window.innerHeight))){
            tooBig=true;
        }
    });
    $("header.header .hs-menu-flow-horizontal > ul > li > ul > li > ul").css("top","");
    $("header.header .hs-menu-flow-horizontal > ul > li > ul").css("top","");
    $.each($("header.header .hs-menu-flow-horizontal > ul > li > ul > li"),function(i,e){
            $($(e).find("ul")).each(function(j,list){
                if(($(e).offset().left+$(e).width()+$(list).width())>window.innerWidth-25){
                    $(list).css("left",(-$(list).width()));                
                    $(e).addClass("left-arrow").removeClass("right-arrow");
                }else{
                    $(list).css("left",$(e).parents("ul:first").width());                                
                    $(e).addClass("right-arrow").removeClass("left-arrow");
                }
                if(tooBig){

                    if($(list).parents("ul:first").height()>$(list).height())
                        $(list).css("height",$(list).parents("ul:first").height()+2);
                }else{
                    $(list).css("height","auto");                    
                    $(list).css("opacity","");
                }
            });
            
      });
    });

$(window).resize();

}
}


/*function headerMenuFlyout(){
    if($("header.header .hs-menu-flow-horizontal > ul").length>0){
        $.each($("header.header .hs-menu-flow-horizontal > ul li.hs-menu-depth-2"),function(i,e){
            if($(e).find(">ul").length>0){
                $(this).find(">ul").css("left",$(this).width());
            }
        });     
        $("header.header .hs-menu-flow-horizontal > ul > li").addClass("right");
        $("header.header .hs-menu-flow-horizontal > ul li.hs-menu-depth-1 > ul, header.header .hs-menu-flow-horizontal > ul li.hs-menu-depth-2 > ul").each(function(){
            $(this).find(">li:last").after("<li class='scroll-bottom'></li>");
            $(this).find(">li:first").before("<li class='scroll-top'></li>");            
        });
        var hover=false;
        $("header.header .hs-menu-flow-horizontal > ul > li").mouseenter(function(){
            $("header.header .hs-menu-flow-horizontal > ul > li").find("ul").removeClass("scroll");
            $("header.header .hs-menu-flow-horizontal > ul > li").find("ul").height("auto");
            
                $(this).find("> ul").each(function(i,e){
                    $(e).find("li:nth(1)").css("margin-top",0);
                    $(this).attr("data-original-height",$(this).height());
                    if(($(this).offset().top+$(this).height())>window.innerHeight+$(window).scrollTop()){
                        $(this).addClass("scroll");
                        var diffrence=$(this).offset().top-$(window).scrollTop()+$(this).height()-window.innerHeight;
                        $(this).height($(this).height()-diffrence);
                     }           
                });
                $(this).find("> ul > li > ul").each(function(i,e){
                    $(e).find("li:nth(1)").css("margin-top",0);
                    $(this).attr("data-original-height",$(this).height());
                    if(($(this).offset().top+$(this).height())>window.innerHeight+$(window).scrollTop()){
                        $(this).addClass("scroll");
                        var diffrence=$(this).offset().top-$(window).scrollTop()+$(this).height()-window.innerHeight;
                        $(this).height($(this).height()-diffrence);
                     }           
                });
            var interval;
            $(".scroll > .scroll-bottom").mouseenter(function(){
                clearInterval(interval);
                var parent= $(this).parent();
                var scroll=$(this).parent().find('>li:nth(1)');
                var topS = parseInt(scroll.css("margin-top"));
            	interval=setInterval(function(){
                    if((-1*topS)+parent.height()<parent.data("original-height")){
                        topS=topS-1;
                		scroll.css("margin-top",topS);
                    }
            	},10);
            });
            $(".scroll > .scroll-bottom").mouseout(function(){
               clearInterval(interval);
            });
            $(".scroll > .scroll-top").mouseenter(function(){
                clearInterval(interval);
                var scroll=$(this).parent().find('>li:nth(1)');
                var topS = parseInt(scroll.css("margin-top"));
                interval=setInterval(function(){
                    if(topS<0){
                        topS=topS+1;
                		scroll.css("margin-top",topS);
                    }
            	},10);
            });
            $(".scroll > .scroll-bottom").mouseout(function(){
               clearInterval(interval);
            });
        });
    $(window).resize(function(){
        

     $.each($("header.header .hs-menu-flow-horizontal > ul > li > ul > li"),function(i,e){
            $($(e).find("ul")).each(function(j,list){
                if(($(e).offset().left+$(e).width()+$(list).width())>window.innerWidth-25){
                    $(list).css("left",(-$(list).width()));                
                    $(e).addClass("left-arrow").removeClass("right-arrow");
                }else{
                    $(list).css("left",$(e).width());                                
                    $(e).addClass("right-arrow").removeClass("left-arrow");
                }
            });
            
      });
    });

$(window).resize();
}
}
*/
function mobileMenuInit() {
    if($("header.header .hs-menu-flow-horizontal > ul").length>0){
        $("header.header .hs-menu-flow-horizontal > ul").slicknav({
            prependTo: "header.header",
            label: "",
            allowParentLinks: true,
            init:function(){
                $("header.header .slicknav_menu > ul").append("<li></li>");
                $("header.header .slicknav_menu > ul > li:last").append($("header.header .search").clone(true));
            }
        });
    }
        $(".slicknav_btn").click(function (i) {
            if ($("header.header.fixed-small").length > 0) {
                $("header.header").removeClass("fixed-small");
            } else {
                $("header.header").addClass("fixed-small");
            }
        });
}
function homeSliderInit() {
    $(".main .homeslider > span").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
}

function smallSliderInit() {

    $(".sm-slider-main .slide-content > span").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
}
function initBrandsSlider(){
        if($(".brands-slider").length>0){
            $('.brands-slider').cutWrappers('.brands-slider__slide');
        $('.brands-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow:5,
            slidesToScroll: 5,
            arrows: true,
            dots: true,
              responsive: [
                {
                  breakpoint: 1150,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                }
,
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                }
,
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
}
}
function fixedMenu() {
    if ($(".header--static").length < 1 && $(".contact-template .header").length == 0) {
        $(window).scroll(function () {
            var i = $(window).scrollTop();
            if (i > 0) {
                $("header.header").addClass("fixed");
                if ($(".menu-black").length > 0) {
                    $(".menu-black .header .black").css("display", "none");
                    $(".menu-black .header .white").css("display", "block");
                }
            } else {
                if (i == 0) {
                    $("header.header").removeClass("fixed");
                    if ($(".menu-black").length > 0) {
                        $(".menu-black .header .black").css("display", "block");
                        $(".menu-black .header .white").css("display", "none");
                    }
                }
            }
        });
    }
    if ($(".contact-template .header").length > 0) {
        $(".contact-template .header").addClass("fixed");
    }
}
function rowModuleBreaker(parent, css_selector, break_array, class_first_row, class_last_row) {
    var oldCols = 0;
    $(window).resize(function () {
        var cols = 0;
        var lastBreak = 0;
        for (var windowBreak in break_array) {
            if (window.innerWidth <= parseInt(windowBreak)) {
                cols = break_array[windowBreak];
                break;
            }
            lastBreak = windowBreak;
        }

        if (cols == 0) {
            cols = break_array[lastBreak];
        }
        if (oldCols == 0 || oldCols != cols) {
            $(parent).each(function (j, selector) {

                var old = oldCols;
                oldCols = cols;
                var inc = -1;
                var row = [];
                var length = $(selector).find(css_selector).length;
                $(selector).find(css_selector).each(function (i, e) {
                    if (i % cols == 0) {
                        inc++;
                        row = [];
                    }
                    row.push($(e).parent().clone(true));
                    $(e).parent().parent().addClass("old_remove");
                    if (i % cols == cols - 1) {
                        var rowContainer = $("<div class='row'></div>");
                        if (inc == 0) {
                            rowContainer.addClass(class_first_row);
                        }
                        if (i == length - 1) {
                            rowContainer.addClass(class_last_row);
                        }
                        rowContainer.append(row);
                        $(e).parent().parent().before(rowContainer);
                    }

                    if (i % cols < cols - 1 && i == length - 1) {
                        var rowContainer = $("<div class='row'></div>");
                        if (inc == 0) {
                            rowContainer.addClass(class_first_row);
                        }
                        rowContainer.addClass(class_last_row);
                        rowContainer.append(row);
                        $(e).parent().parent().before(rowContainer);
                    }
                    if ($(e).parent().parent().hasClass("hs_cos_wrapper_type_custom_widget")) {
                        $(e).parent().parent().remove();
                    }
                });
                $(selector).find(css_selector).parent().attr("class", "span" + 12 / cols);
                $(".old_remove").remove();
            });
        }
    });
    $(window).resize();
}

function skillsInit() {
    var checkBars = 0;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if ($(".loading-skills-wrapper").length > 0) {
            loadingBars();
        }
    });
    $(window).scroll();

    function loadingBars() {
        var scrollTop = $(window).scrollTop();
        var positionBars = $(".loading-circle").offset().top;
        var windowHeight = $(window).height()
        var scrollBottom = scrollTop + windowHeight;
        if (scrollBottom - 150 > positionBars && checkBars == 0) {
            checkBars = 1;

            $("section.loading-circle .circle").circliful({
                animation: 1,
                animationStep: 5,
                foregroundBorderWidth: 3,
                backgroundBorderWidth: 3,
                foregroundColor: '#FFF',
                backgroundColor: '#636362',
                fontColor: '#FFF',
                percentageTextSize: 30,
                multiPercentage: 1
            });
            $("section.loading-circle .circle .timer").attr('y', '110');
        }
    };
}




(function ($) {
    $.fn.cutWrappers = function (targetSelector) {
        $(this).find(targetSelector).appendTo($(this));
        $(this).find('.hs_cos_wrapper_type_custom_widget').remove();
        $(this).find('.hs_cos_wrapper_type_widget_container').remove();
        $(this).find('.widget-span').remove();
    };
})(jQuery);
//$(".pricing-box__container").cutWrappers('.pricing-box');


