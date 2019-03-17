$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,

   });
  $('.browse').on('click', () => {
    $('.browseMenu').slideToggle();
    $('.arrow').toggleClass('rotateRight')
  })

  $(window).scroll(function(){
      $("#x").css("opacity", 1 - $(window).scrollTop() / 250);
    });

  $('#options').on('click', () => {
    $('.optionsMenu').slideToggle();
    $('#x').find('img').toggleClass('up')
  })


  $('.tMenu1').on('mouseover', () => {
    $('.homeMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.homeMenu').slideUp();
  })

  $('.tMenu2').on('mouseover', () => {
    $('.homeMenu, .skinMenu, .sportsMenu, .giftsMenu').hide();
    })

        });

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


  $('.tMenu4').on('mouseover', () => {
    $('.homeMenu, .skinMenu, .shopMenu, .giftsMenu').hide();
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

  $('.tMenu3').on('mouseover', () => {
    $('.homeMenu, .shopMenu, .sportsMenu, .giftsMenu').hide();
  });

  $('.tMenu5').on('mouseover', () => {
    $('.giftsMenu').slideDown();

  })

  $('.subMenu').on('mouseleave', () => {
    $('.giftsMenu').slideUp();
  })

  $('.tMenu5').on('mouseover', () => {
    $('.homeMenu, .skinMenu, .shopMenu, .sportsMenu').hide();


});
