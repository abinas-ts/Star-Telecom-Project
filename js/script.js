$(function () {

    $('#logo').click(function () {
        location.reload();
    });

    $('#toploginbtn, #downloginbtn').click(function () {
        $('#loginform').removeClass('d-none');
        $('#products').addClass('d-none');
    });

    $('#btngroup .brand-btn').click(function(){
        $('#btngroup .brand-btn').removeClass('active-btn');
        $(this).addClass('active-btn');

    });

    $('#samsung, #Samsung').click(function(){
        $('#products, #loginform').addClass('d-none');
        $('#sampro').removeClass('d-none');
    });



})

// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();