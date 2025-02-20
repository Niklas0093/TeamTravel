document.addEventListener("DOMContentLoaded", function() {
    // Impressum-Link verwalten (optional, falls du ein Event daran binden möchtest)
    const impressumLink = document.getElementById("impressum-link");
    if (impressumLink) {
        impressumLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "impressum.html";
        });
    }
});
