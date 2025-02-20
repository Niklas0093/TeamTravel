document.addEventListener("DOMContentLoaded", function() {
    // Header dynamisch laden
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Fehler beim Laden des Headers:", error));

    // Impressum-Link verwalten (falls nötig)
    const impressumLink = document.getElementById("impressum-link");
    if (impressumLink) {
        impressumLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "impressum.html";
        });
    }
});
