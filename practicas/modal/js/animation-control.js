const $hiddeButton = document.getElementById("hide-modal");
const $modal = document.getElementById("modal");
const $overlay = document.getElementById("overlay");
$hiddeButton.addEventListener('click', (event) => {
    $modal.style.animation = 'modalOut .8s forwards';
    $overlay.classList.remove('active');
});