
// Modal elements
const formModal = document.getElementById('reportModal'); //Entire Modal for targeting
const bootstrapModal = new bootstrap.Modal(formModal); // Bootstrap Modal
const modalButton = formModal.querySelector('#modalButton'); // Continue / submit button
const reportForm = formModal.querySelector('#reportForm'); // Report Form element
const reporterForm = formModal.querySelector('#reporterForm'); // Reporter Form element
const noButton = formModal.querySelector('#noBtn'); // No button
const yesButton = formModal.querySelector('#yesBtn'); // Yes button
const descriptionInput = document.getElementById('incidentDescription'); // Description input element

// Form Variables to save data temporarily
let incidentDescription= "placeholder description";
let reportId = "placeholder id";

// Database URL
const databaseURL = "https://haven-v1-fafcc90518dc.herokuapp.com/api";

/**
 * When clicking Continue/Submit button, the form inputs are saved
 * and the page is changed or the form is submitted
 */
modalButton.addEventListener('click', function(event){
    event.preventDefault();
    saveReportFormInputs(); // Save the form inputs
    const {openPage, pages} = whatPageOpen();
    changePage(openPage, pages); // Change the page
});


/**
 * Checks which page is open in the form modal
 * @returns the open page and all pages in the form modal
 */
function whatPageOpen(){
    const pages = Array.from(formModal.querySelectorAll('.page'));
    const openPage = pages.filter((page) => !page.classList.contains('d-none'))[0];

    if (openPage.id == "pageThree") {
        reportForm.classList.add('d-none');
        reporterForm.classList.remove('d-none');
    }
    return {openPage, pages};
}

/**
 * Change the page of the form modal
 * If the current page is the last page, submit the form
 */
function changePage(openPage, pages){
    let currPage = openPage;
    let allPages = pages;
    let nextPage;

    switch (currPage.id) {
        case "pageOne":
            nextPage = allPages.find(page => page.id === "pageTwo");
            break;
        case "pageTwo":
            nextPage = allPages.find(page => page.id === "pageThree");
            break;
        case "pageThree":
            nextPage = allPages.find(page => page.id === "pageFour");
            break;
        case "pageFour":
            nextPage = allPages.find(page => page.id === "pageFive");
            break;
        case "pageFive":
            nextPage = allPages.find(page => page.id === "pageSix");
            break;
        default:
            console.log("Error: Page not found");
    }

    // Apply the changes to show the next page
    if (nextPage) {
        currPage.classList.add('d-none'); // Hide current page
        nextPage.classList.remove('d-none'); // Display next page
    }
    
    switch(nextPage.id){
        case "pageTwo":
            initMap();
            break;
        case "pageThree":
            const confirmDescription = document.getElementById('confirmDescription');
            confirmDescription.textContent = incidentDescription;
            modalButton.textContent = "Submit";
            break;
        case "pageFour":
            submitReportForm();
            modalButton.setAttribute('disabled', true);
            break;
        case "pageFive":
            modalButton.removeAttribute('disabled');
            break;
        case "pageSix":
            submitReporterForm();
            modalButton.classList.add('d-none');
            break;
        default:
            console.log("Error: Page not found");
    }
}


/**
 * Save the form inputs to variables when 
 * modalButton is clicked
 */
function saveReportFormInputs(){
    incidentDescription = descriptionInput.value; // Save the description input
}

/**
 * Clear the modal when it is closed and reset open page to pageOne
 */
function clearModal(){
    descriptionInput.value = "";
    reportId = "";
    reportForm.classList.remove('d-none');
    reporterForm.classList.add('d-none');
    const pages = Array.from(formModal.querySelectorAll('.page'));
    pages.forEach(page => {
        page.classList.add('d-none');
        if(page.id === "pageOne"){ {
            page.classList.remove('d-none');
        }
    }});
}

// Eventlistener for when the modal is hidden
formModal.addEventListener('hidden.bs.modal', clearModal); 


/**
 * Submit the report form to the database
 */
async function submitReportForm(){
    try {
        const response = await fetch(`${databaseURL}/reports`, {
            method: 'POST',
            headers: {"content-type": 'application/json'},
            body: JSON.stringify({'description': incidentDescription, 'location': 'placeholder location'}),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        reportId = data.results[0].id;
    }
    catch(e){
        console.log(e)
    }
}


/**
 * Submit the reporter form to the database
 */
async function submitReporterForm(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // add howCanHelp to the form
    try{
        const response = await fetch(`${databaseURL}/reporters`, { // double check the url
            method: 'POST',
            headers: {"content-type": 'application/json'},
            body: JSON.stringify({'firstName': firstName, 'lastName': lastName, 'email': email, 'phone': phone, howCanHelp: "test", 'reportId': reportId},),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // not needed as of now
    } catch(e){
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


// Event listeners for the Yes and No buttons
if (yesButton) {
    yesButton.addEventListener('click', function(e){
        e.preventDefault();
        const {openPage, pages} = whatPageOpen();
        changePage(openPage, pages); // Change the page
    });
}
if (noButton) {
    noButton.addEventListener('click', function(e){
        e.preventDefault();
        bootstrapModal.hide();
    });
}


// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}
