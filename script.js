function changeImage(anything) {
    document.getElementById('slider').src = anything;
}

function ToggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
$(".min-img img").click(function() {
    var src = $(this).attr("src");
    $(".min-img img").removeClass("active");
    $(this).addClass("active");
    $(".main-img img").attr("src", src);
})

// POP UP
$(".newsletter").click(function() {
    $(".popup").fadeIn();
})

$(".close-popup").click(function() {
    $(".popup").fadeOut();
});