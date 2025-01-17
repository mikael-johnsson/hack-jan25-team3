
// Modal
const formModal = document.getElementById('formModal'); //Entire Modal
const submitButton = formModal.querySelector('#submitButton'); // Continue /submit button
const descriptionInput = document.getElementById('incidentDescription'); // Description input element
const mediaUploads = document.getElementById('mediaUpload'); // Media upload input element
let formDescription= "";
let uploadedMedia = [];
let uploadedMediaNames = [];

/**
 * When clicking Continue/Submit button, the form will move to the next page
 * or submit the form.
 */
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

        formDescription = descriptionInput.value; // Save the description input
        uploadedMedia = Array.from(mediaUploads.files); // Save the uploaded media
        uploadedMediaNames = uploadedMedia.map((file) => file.name); // Save the uploaded media names
        console.log(uploadedMediaNames);
        visiblePages[0].classList.add('d-none'); //hide current page
        nextPage.classList.remove('d-none'); // display next page
    }
});
