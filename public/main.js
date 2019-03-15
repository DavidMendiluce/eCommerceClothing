$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,

   });

   $(window).resize(function(){



         if ($(window).width() > 1280) {

            $('#options').hide()

         }

        if ($(window).width() <= 1280) {

                $('#options').show()

             }

  });

  $('.tMenu1').on('mouseover', () => {
    $('.homeMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.homeMenu').slideUp();
  })


  $('.tMenu2').on('mouseover', () => {
    $('.homeMenu').slideUp();
  })


  $('.tMenu2').on('mouseover', () => {
    $('.shopMenu').slideDown();

  })

  $('.tMenu1').on('mouseover', ()=> {
    $('.shopMenu').slideUp();
  })

  $('.tMenu4').on('mouseover', () => {
    $('.sportsMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.sportsMenu').slideUp();
  })


  $('.subMenu').on('mouseleave', () => {
    $('.shopMenu').slideUp();
  })


  $('.tMenu3').on('mouseover', () => {
    $('.skinMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.skinMenu').slideUp();
  })

  $('.tMenu5').on('mouseover', () => {
    $('.giftsMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.giftsMenu').slideUp();
  })


});
