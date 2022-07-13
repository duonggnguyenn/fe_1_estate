$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,
        arrows: false,
        draggable: false,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
  });

  $(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        draggable: false,
        fade: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
      ]
    });
  });

 const drop_btn = document.getElementById("drop-home-btn");
 const drop_list = document.getElementById("drop-home-list");
 const drop_icon = document.getElementById("drop-home-icon");

 let value = document.getElementById("drop-home-list").className
 drop_btn.addEventListener('click', function(){
   if(drop_list.className == value){
    drop_btn.style.background = "#00ccad";
    drop_btn.style.color = "#fff";
    drop_icon.style.color = "#fff"
    drop_list.classList.add("show");
  }
  else{
    drop_btn.style.background = "#fff";
    drop_btn.style.color = "#4a4a4a";
    drop_icon.style.color = "#00ccad";
    drop_list.classList.remove("show");
  }

 })

 const drop_btn_2 = document.getElementById("drop-page-btn");
 const drop_list_2 = document.getElementById("drop-page-list");
 const drop_icon_2 = document.getElementById("drop-page-icon");

 let value_2 = document.getElementById("drop-page-list").className
 drop_btn_2.addEventListener('click', function(){
   if(drop_list_2.className == value_2){
    drop_btn_2.style.background = "#00ccad";
    drop_btn_2.style.color = "#fff";
    drop_icon_2.style.color = "#fff";
    drop_list_2.classList.add("show");
  }
  else{
    drop_btn_2.style.background = "#fff";
    drop_btn_2.style.color = "#4a4a4a";
    drop_icon_2.style.color = "#00ccad";
    drop_list_2.classList.remove("show");
  }
  
 })

 const drop_btn_3 = document.getElementById("drop-gal-btn");
 const drop_list_3 = document.getElementById("drop-gal-list");
 const drop_icon_3 = document.getElementById("drop-gal-icon");

 let value_3 = document.getElementById("drop-gal-list").className
 drop_btn_3.addEventListener('click', function(){
   if(drop_list_3.className == value_3){
    drop_btn_3.style.background = "#00ccad";
    drop_btn_3.style.color = "#fff";
    drop_icon_3.style.color = "#fff";
    drop_list_3.classList.add("show");
  }
  else{
    drop_btn_3.style.background = "#fff";
    drop_btn_3.style.color = "#4a4a4a";
    drop_icon_3.style.color = "#00ccad";
    drop_list_3.classList.remove("show");
  }
  
 })
