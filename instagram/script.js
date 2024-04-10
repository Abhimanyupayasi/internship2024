red = document.querySelector('.red');
red.style.display = "none";
black = document.querySelector('.black');
document.querySelector('.img-post').addEventListener('dblclick', function() {
    if (red.style.display === "none") {
        red.style.display = "block";
        black.style.display = "none";
    } else {
        red.style.display = "none";
        black.style.display = "block";
    }
});

