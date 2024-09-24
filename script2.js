const imagesContainer = document.querySelector('.images');
const firstImage = imagesContainer.firstElementChild.cloneNode(true);
imagesContainer.appendChild(firstImage);
imagesContainer.appendChild(firstImage);
imagesContainer.appendChild(firstImage);



//moo//
document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtns = document.getElementsByClassName('dropdown-btn');

    for (var i = 0; i < dropdownBtns.length; i++) {
        dropdownBtns[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var dropdownContainer = this.nextElementSibling;
            if (dropdownContainer.style.display === 'block') {
                dropdownContainer.style.display = 'none';
            } else {
                dropdownContainer.style.display = 'block';
            }
        });
    }
});