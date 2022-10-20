$(document).ready(function(){

    $('.premium_slider').slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.premium_p'), //이전 화살표
        nextArrow: $('.premium_n'), //다음 화살표
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2300,
        speed: 800,
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        // fade: true,
      });

      $('.dormitory_slider').slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.dormitory_p'), //이전 화살표
        nextArrow: $('.dormitory_n'), //다음 화살표
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2300,
        speed: 800,
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        fade: true,
      });

      $('.location_slider').slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.location_p'), //이전 화살표
        nextArrow: $('.location_n'), //다음 화살표
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2300,
        speed: 800,
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        fade: true,
      });
});
