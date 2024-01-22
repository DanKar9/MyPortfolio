$(function(){

    /*************************** FILTER *******************************/


    let work = $("[data-work]");

    work.on("click", function(event){
        event.preventDefault();

       let workItem = $(this).data("work");
       
       $("[data-cat").each(function(){

        if (workItem == "all"){
            $(this).removeClass("hide")
        } else{   
            let cat = $(this).data("cat")

        if(cat != workItem){
            $(this).addClass("hide")
        }else {
            $(this).removeClass("hide")
        }

        }
       })

    })


    
    /*************************** Modals *******************************/

    let modal = $("[data-modal]");
    let modalClose = $("[data-close]")

    modal.on("click",function(event){
        event.preventDefault();
        let $this=$(this);
        let modalItem = $this.data("modal")
        

        $(modalItem).addClass("show");
        $("body").addClass("no-scroll");
        
        setTimeout(function(){
        $(modalItem).find(".modals__container").css({
           transform: "scale(1)"
        });

    },200);
    })

    modalClose.on("click",function(event){
        event.preventDefault();
        let $this=$(this);
        let modalParents = $this.parents(".modals");
   
        

        modalParents.removeClass("show");
        $("body").removeClass("no-scroll");

})



$(".modals").on("click",function(event){
    $(this).removeClass("show");
    $("body").removeClass("no-scroll");

})

$(".modals__container").on("click",function(event){
    event.stopPropagation();

})








/*************************** ScrollPos *******************************/



$("[data-scroll]").on("click", function(event){

event.preventDefault();

let scrollPos = $(this).data("scroll");

let elementPos = $(scrollPos).offset().top;

$("html, body").animate({
scrollTop:elementPos - 20
} ,700)

})



/**********************************slider *****************************/

$('[data-slider]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });


  let slickPrev = $(".slickPrev");
  let slickNext = $(".slickNext");

  $(slickPrev).on("click",function(event){
    event.preventDefault();

    $('[data-slider]').slick("slickPrev");

  })

    $(slickNext).on("click",function(event){
        event.preventDefault();
    
        $('[data-slider]').slick("slickNext");
    





  })
          

})