$(document).ready(function() {
    console.log("Portfolio Website Loaded!");
});
$(document).ready(function() {
    $("a.nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
