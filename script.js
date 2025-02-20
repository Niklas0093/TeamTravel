document.addEventListener("DOMContentLoaded", function() {
    const impressumLink = document.getElementById("impressum-link");

    if (impressumLink) {
        impressumLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "impressum.html";
        });
    }
});
