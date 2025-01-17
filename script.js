
// Modal
const formModal = document.getElementById('formModal');
const pageOne = formModal.querySelector('#pageOne');
const pageTwo = formModal.querySelector('#pageTwo');
const submitButton = formModal.querySelector('#submitButton');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    let pages = Array.from(formModal.querySelectorAll('.page'));
    let visiblePages = pages.filter((page) => !page.classList.contains('d-none'));
    let nextPage = visiblePages[0].nextElementSibling;

    if(nextPage == null){
        console.log("this was the last page, time to submit form");
    } else {
        if(nextPage.id === "pageThree"){
            submitButton.textContent = "Submit";
        }
        visiblePages[0].classList.add('d-none');
        nextPage.classList.remove('d-none');
    }
});