$(function () {
    $('#main').load('html/home.html');

    $('#logo').click(function () {
        location.reload();



    });


    $('#btngroup .brand-btn').click(function () {
        $('#btngroup .brand-btn').removeClass('active-btn');
        $(this).addClass('active-btn');

    });

function loadpage(page) {

    const parts = page.split(" ");
    const file = parts[0];         
    const selector = parts[1];      

    $.ajax({
        url: file,
        method: 'GET',
        dataType: 'html',
        success: function (response) {
            if (selector) {
                let selectedPart = $(response).find(selector);
                $("#main").html(selectedPart);
            } else {
                $("#main").html(response);
            }
        },
        error: function (xhr, status, error) {
            console.error('API call failed:', status, error);
        },
        complete: function () {
            console.log('API call completed.');
        }
    });
}



    $('#downloginbtn, #toploginbtn').click(function () {

        loadpage('html/login.html');
    });


    $('#samsung, #Samsung').click(function () {

        loadpage('html/samsung.html');

    });

    $('#xiaomi, #Xiaomi').click(function () {

        loadpage('html/home.html #xiaomi');

    });

    $('#oppo, #Oppo').click(function () {

        loadpage('html/home.html #oppo');

    });

    $('#vivo, #Vivo').click(function () {

        loadpage('html/home.html #vivo');

    });

    $('#realme, #Realme').click(function () {

        loadpage('html/home.html #realme');

    });

    $('#huawei, #Huawei').click(function () {

        loadpage('html/home.html #huawei');

    });

    $('#infinix, #Infinix').click(function () {

        loadpage('html/home.html #infinix');

    });

    $('#tecno, #Tecno').click(function () {

        loadpage('html/home.html #tecno');

    });

})

// year in footer
document.getElementById('year').textContent = new Date().getFullYear();