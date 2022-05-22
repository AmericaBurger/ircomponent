const ratingButtons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit-btn");

const cardContent1 = document.querySelector(".card1");
const cardContent2 = document.querySelector(".card2");

const selectedRating = document.querySelector(".selected-rating");


submitButton.addEventListener("click", onSubmit);

function onSubmit() {
    cardContent1.classList.add("hide");
    cardContent2.classList.remove("hide");
}

ratingButtons.forEach( btn => {
    btn.addEventListener('click', handleRatingClickBtn);
});


function handleRatingClickBtn(event) {
    let click = event.target;
    let js = click.textContent;
    ratingButtons.forEach(btn => {
        btn.classList.remove("active");
    })
    click.classList.add("active");
    selectedRating.innerHTML = js;
    };