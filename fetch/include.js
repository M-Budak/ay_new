document.addEventListener("DOMContentLoaded", function() {
    fetch("/fetch/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("/fetch/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    fetch("/fetch/car_bodies.html")
        .then(response => response.text())
        .then(data => document.getElementById("car_bodies").innerHTML = data);

    fetch("/fetch/six_brands.html")
        .then(response => response.text())
        .then(data => document.getElementById("six_brands").innerHTML = data);

    fetch("/fetch/brand_modal.html")
        .then(response => response.text())
        .then(data => document.getElementById("brand_modal").innerHTML = data);
});
