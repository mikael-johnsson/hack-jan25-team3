
// Modal
const formModal = document.getElementById('formModal'); //Entire Modal
const modalButton = formModal.querySelector('#submitButton'); // Continue /submit button
const descriptionInput = document.getElementById('incidentDescription'); // Description input element
const mediaUploads = document.getElementById('mediaUpload'); // Media upload input element
let incidentDescription= "p-holder";
let uploadedMedia = [];
let uploadedMediaNames = [];
const databaseURLTest = "https://haven-v1-fafcc90518dc.herokuapp.com/api/test"; // URL to the database
const databaseURL = "https://haven-v1-fafcc90518dc.herokuapp.com"; // URL to the database

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
    console.log(nextPage);
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

async function submitForm(){
    try{
        const formData = new FormData();
        formData.append('description', incidentDescription);
        uploadedMedia.forEach((file) => formData.append('media', file));
        const response = await fetch(databaseURLTest);
        const data = await response.json();
        console.log(data);

        for (let pair of formData.entries()) {
            console.log("all formdata entries", pair[0] + ': ' + pair[1]);
        }
    }
    catch(e){
        console.log(e)
    }
}


// , {
//     method: 'POST',
//     body: formData
// }