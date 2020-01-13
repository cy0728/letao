NProgress.configure({ showSpinner: false });

$(document).ajaxStart(function() {
    NProgress.start();
});

$(document).ajaxStop(function() {
    setTimeout(function() {
      NProgress.done();
    }, 500)
});

$(function (){
    $('.icon-menu').on('click',function (){
        $('.aside').toggleClass("hidemenu");
        $('.main').toggleClass("hidemenu");
        $('.top').toggleClass("hidemenu");
    })
    $('.category').on('click',function (){
        $(this).next().stop().slideToggle();
    });
    $('.icon-logout').on('click',function (){
        $('#logoutModal').modal("show");
    })
})