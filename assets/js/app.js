// NavBar Active

$(".menu-trigger").on("click", function () {
    $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
    return false;
});

// NavBar Close

$(".menu-close, .off-nav, .off-canvar-overlay").on("click", function () {
    $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
});

// Owl Carousel
$(".homepage-slides").owlCarousel({
    items: 1,
    autoplay: false,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
});

$(".protfolio-slide-item").owlCarousel({
    items: 4,
    autoplay: false,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            autoplay: true
        },
        600: {
            items: 3,
            nav: false,
            autoplay: true,
        },
        1000: {
            items: 4,
            nav: true
        }
    }
});


$(".team-slide-item").owlCarousel({
    items: 4,
    margin: 10,
    autoplay: false,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            autoplay: true,
            margin: false,
        },
        600: {
            items: 2,
            nav: false,
            autoplay: true,
            margin: 10,
        },
        1000: {
            items: 4,
            nav: true
        }
    }
});

// Magnific Popup
$(".video-play-btn").magnificPopup({
    type: 'video',
});



// Circular Progress Bar

$("#web-designprogressbar").circleProgress({
    value: 0.82,
    size: 150,
    fill: '#ff5e14',
    thickness: 8,
    emptyFill: '#0f326a',
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(82 * progress) + '<i>%</i>');
});

$("#coding-designprogressbar").circleProgress({
    value: 0.75,
    size: 150,
    fill: '#ff5e14',
    thickness: 8,
    emptyFill: '#0f326a',
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
});

$("#project-designprogressbar").circleProgress({
    value: 0.50,
    size: 150,
    fill: '#ff5e14',
    thickness: 8,
    emptyFill: '#0f326a',
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(50 * progress) + '<i>%</i>');
});


// Progress Bar

$('#bar1').barfiller();
