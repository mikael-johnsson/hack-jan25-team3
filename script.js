
// Modal elements
const formModal = document.getElementById('formModal'); //Entire Modal
const modalButton = formModal.querySelector('#submitButton'); // Continue /submit button
const descriptionInput = document.getElementById('incidentDescription'); // Description input element
const mediaUploads = document.getElementById('mediaUpload'); // Media upload input element

// Form Variables to save data temporarily
let incidentDescription= "p-holder";
let uploadedMedia = [];
let uploadedMediaNames = [];

// Database URLs
const databaseURLTest = "https://haven-v1-fafcc90518dc.herokuapp.com/api/test"; // URL to the database
const databaseURL = "https://haven-v1-fafcc90518dc.herokuapp.com/api"; // URL to the database

/**
 * When clicking Continue/Submit button, the form will move to the next page
 * or submit the form.
 */
modalButton.addEventListener('click', function(event){
    event.preventDefault();
    saveFormInputs(); // Save the form inputs
    changePage(); // Change the page
});


/**
 * Change the page of the form modal
 * If the current page is the last page, submit the form
 */
function changePage(){
    let pages = Array.from(formModal.querySelectorAll('.page'));
    let visiblePages = pages.filter((page) => !page.classList.contains('d-none'));
    let nextPage = visiblePages[0].nextElementSibling;
    
    if(!nextPage){
        submitForm();
        console.log("this was the last page, time to submit form");
    } else {
        if(nextPage.id === "pageThree"){
            modalButton.textContent = "Submit";
        }
        visiblePages[0].classList.add('d-none'); //hide current page
        nextPage.classList.remove('d-none'); // display next page
    }
}


/**
 * Save the form inputs to variables when 
 * modalButton is clicked
 */
function saveFormInputs(){
    incidentDescription = descriptionInput.value; // Save the description input
    uploadedMedia = Array.from(mediaUploads.files); // Save the uploaded media
    uploadedMediaNames = uploadedMedia.map((file) => file.name); // Save the uploaded media names
}


/**
 * Submit the form to the database
 */
async function submitForm(){
    try {
        const formData = new FormData();
        formData.append('description', incidentDescription);
        uploadedMedia.forEach((file) => formData.append('media', file));
        for (let pair of formData.entries()) {
            console.log("formdata entry", pair[0] + ': ' + pair[1]);
        }
        const response = await fetch(`${databaseURL}/report`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log("response data: ", data);
    }
    catch(e){
        console.log("error: ", e)
    }
}


/**
 * See all reports from api
 */
async function seeReports(){
    try{
        const data = await fetch(`${databaseURL}/all-results`, {
            method: 'GET'
        });
        console.log("data: ", data);
    }catch(e){
        console.log("error: ", e)
    }
}