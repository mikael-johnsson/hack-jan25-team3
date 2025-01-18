
// Modal elements
const formModal = document.getElementById('reportModal'); //Entire Modal
const modalButton = formModal.querySelector('#modalButton'); // Continue /submit button
const reportForm = formModal.querySelector('#reportForm'); // Report Form element
const reporterForm = formModal.querySelector('#reporterForm'); // Reporter Form element
const noButton = formModal.querySelector('#noBtn'); // No button
const yesButton = formModal.querySelector('#yesBtn'); // Yes button
const descriptionInput = document.getElementById('incidentDescription'); // Description input element
// const mediaUploads = document.getElementById('mediaUpload'); // Media upload input element

// Form Variables to save data temporarily
let incidentDescription= "p-holder";
// let uploadedMedia = [];
// let uploadedMediaNames = [];

// What3words API key
const mapAPIKey = "XLOEYWA8"; // API key for what3words

// Database URLs
const databaseURL = "https://haven-v1-fafcc90518dc.herokuapp.com/api"; // URL to the database

/**
 * When clicking Continue/Submit button, the form inputs are saved
 * and the page is changed or the form is submitted
 */
modalButton.addEventListener('click', function(event){
    event.preventDefault();
    saveReportFormInputs(); // Save the form inputs
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

    switch(nextPage.id){
        case "pageTwo":
            break;
        case "pageThree":
            break;
        case "pageFour":
            submitReportForm();
            console.log("this was the last page, time to submit form");
            break;
        default:
    }
    
    if(!nextPage){
        
    } else { // make this to a switch statement
        if(nextPage.id === "pageThree"){
            modalButton.textContent = "Submit";
        } else if(nextPage.id === "pageFour"){
            reportForm.classList.add('d-none');
            reporterForm.classList.remove('d-none');
            modalButton.setAttribute('disabled', true);
        }
        visiblePages[0].classList.add('d-none'); //hide current page
        nextPage.classList.remove('d-none'); // display next page
    }
}


/**
 * Save the form inputs to variables when 
 * modalButton is clicked
 */
function saveReportFormInputs(){
    incidentDescription = descriptionInput.value; // Save the description input
    // uploadedMedia = Array.from(mediaUploads.files); // Save the uploaded media
    // uploadedMediaNames = uploadedMedia.map((file) => file.name); // Save the uploaded media names
}


/**
 * Submit the form to the database
 */
async function submitReportForm(){
    try {
        const formData = new FormData();
        formData.append('incident_description', incidentDescription);
        // uploadedMedia.forEach((file) => formData.append('media', file));
        const response = await fetch(`${databaseURL}/report`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //save the report id to local storage, to be used in the next page
        console.log("response data: ", data);
    }
    catch(e){
        console.log(e)
    }
}


/**
 * See all reports from api
 * not used as of now
 */
async function seeReports(){
    try{
        const data = await fetch(`${databaseURL}/all-results`, {
            method: 'GET'
        });
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("data: ", data);
        
    }catch(e){
        console.log(e)
    }
}

if (yesButton) {
    yesButton.addEventListener('click', function(){
        console.log("yes button clicked");
    });
}