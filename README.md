## HAVEN - (Humanitarian Action for Vigilance Empowerment and Notification)

[View live project here]()

<br>

![screenshot of Home page]()

---


## Table of Contents

* [Criteria](#criteria)
* [UXD (User Experience Design) ](#user-experience-ux)
   * [User Stories](#user-stories)
   * [Wireframes](#wireframes)
* [Design](#design)
  * [Colour Scheme](#color-scheme)
  * [Typography](#typography)
* [Features](#features)
  * [Navbar](#navbar)
  * [Hero-Image](#hero-image)
  * [Footer](#footer)  
  * [Safety Button](#safety-button)
  * [Reporting Form](#reporting-form)
  * [Desktop View](#Desktop-view)
  * [Tablet View](#tablet-view)
  * [Mobile View](#mobile-view)
* [Goal](#goal)
* [Problem Statement](#problem-statement)
* [Target Audience](#target-audience)
* [Benefits](#Benefits)
* [Submission](#submission)
* [Deployment](#deployment)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries, Technologies & Programs Used](#frameworks-libraries-technologies--programs-used)
* [Testing](#testing)
  * [HTML Validation using W3C Validation](#html-validation-using-w3c-validation)
  * [CSS Validation using W3C Validation](#css-validation-using-w3c-validation)
  * [Lighthouse scores via Chrome Developer Tools](#lighthouse-scores-via-chrome-developer-tools)
* [Credits](#credits) 

---

### **Criteria**  

1. Purpose and Focus
The website must aim to raise awareness about human trafficking and modern slavery.
It should focus primarily on human trafficking as the central issue.

2. User Safety
Include a "To Safety" button that redirects users to a different site and clears the browser history to ensure privacy and safety.
The feature must operate seamlessly to prevent detection by unauthorized parties.

3. Reporting Features
Provide a form for reporting human trafficking cases, usable by:
Individuals who are victims.
Witnesses or anyone aware of suspicious activities.
The form must include:
A text description field.
Options to upload supporting media such as photos or videos.
Integration with the What3Words API for precise geolocation input (within a 3m x 3m area).

4. Privacy and Consent
Allow users to specify whether they are comfortable being contacted after submitting a report.
Ensure the option for users to remain anonymous if desired.

5. Accessibility and Usability
The website must be intuitive and user-friendly, especially for individuals in high-stress situations.
Content and features should be accessible on both desktop and mobile devices.

6. Awareness and Engagement
Provide information and resources to educate users about the issue of human trafficking.
Include engaging and easy-to-understand content to increase user participation and awareness.

7. Team Collaboration
Ensure that the project reflects the combined [Contributors](#contributors) of all six team members.
Contributors should be recognized within the project documentation.

[Back to Table of Contents](#table-of-contents)

---

## User Experience (UX)  

### Primary Goal

Our primary goal is to create a safe, accessible, and educational resource that raises awareness about human trafficking, empowers individuals to report incidents, and provides tools to support victims and witnesses in taking action.

- This website serves a dual purpose:

    1. Education: It raises awareness about the prevalence and impact of human trafficking, providing valuable information and resources to inform and engage the public.

    2. Action and Safety: It offers a secure platform for users to report human trafficking cases, ensuring user privacy and safety through features like the "To Safety" button and anonymous reporting options.


### **First Time Users**

- New users can access educational resources about human trafficking to raise awareness and learn how they can help.

- New users will find a "To Safety" button that ensures privacy by redirecting them to another site and clearing their browsing history.

- New users can easily use the reporting form to provide information about  people needing help, with options to describe incidents, upload media, and share their precise location using the What3Words API.

- New users have the option to remain anonymous or provide contact details for follow-up communication after sending a  report.

### **Returning Users** 

- Returning users will find the same reliable "To Safety" button.

- Returning users can access educational resources and links to learn about new ways to contribute to the fight against human trafficking.

- Returning users can quickly submit additional reports using the familiar form.

- Returning users who provided contact information may receive follow-ups to assist with ongoing cases and asked if they can provide further informatiom.

[Back to Table of Contents](#table-of-contents)

---

## User Stories

### User Story: API to connect form to database 
**Label:** Enhancement

---

### User Story: Form for organisations to sign-up as a safe place 
**Label:** Enhancement

---

### User Story: what3words map for modal 
**Label:** Should Have

---

### User Story: Readme 
**Label:** Documentation

---

### User Story: Team overview page
**Label:** Documentation

---

### User Story: Contact us section 
**Label:** Should Have

---

### User Story: Page that signposts to other resources for reporting/researching
**Label:** Should Have

---

### User Story: Create CRUD to append database SH
**Label:** Should Have

---

### User Story: Create database to link with the reported incidents
**Label:** Should Have

---

### User Story: Navigation & Footer
**Label:** Should Have

---

### User Story: Quick exit button
**Label:** Should Have

---

### User Story: Landing Page
**Label:** Must Have

---

### User Story: Images / Logos
**Label:** Should Have

---

### User Story: Decide on content
**Label:** Must Have

---

### User Story: Create wireframes
**Label:** Must Have

---

### User Story: User Story: Report form
**Label:** Must Have

> **As a** user, 
> **I want to** be able to report an incident, 
> **so that** the authorities could be notified.

### Acceptance Criteria:
- A report form is easily accessed from the landing page.
- In the report, I can submit a description of the incident, images or videos, and a place on a map of where the incident occurred.
- If emergency, I get a notice to contact authorities.
- For later on filtering, I can add information about the reporter, the victim, and the incident type.
- I have the option to submit my personal information to be able to be contacted by the authorities as a witness.

### Tasks:
1. Add a modal containing the report.
2. Create functionality to hide/display the form's pages.
3. Create functionality to gather the forms in a backend.

---

### User Story: Favicons and title
**Label:** Setup

---
[Back to Table of Contents](#table-of-contents)

---

# Wireframes

<details open>
<summary>Wireframe - Homepage Mobile & Tablet</summary>  

![homepage wireframe - Mobile & Tablet]()
</details> 

[Back to Table of Contents](#table-of-contents)

---

# Design

  # Colour Scheme

  [colours]()

  # Typography

[Montserrat](https://fonts.google.com/specimen/Montserrat)

[Lato](https://fonts.google.com/specimen/Lato)

[Back to Table of Contents](#table-of-contents)

---

# Features

### **Navbar** 
 

### **Hero Image**

### **Footer**



### Safety Button
Our website includes a floating "To Safety" button designed to protect users in potentially dangerous situations. When clicked, the user is redirected to a different website, and their browsing history is cleared. This ensures that no one can trace their visit to our website.

### Reporting Form
To assist individuals who have been taken or are being held against their will—or anyone who has encountered someone in need of help—we have provided a report form. This form includes:
- A description box for detailed information.
- The option to upload photos or videos as evidence.
- Integration with the [What3Words API](https://what3words.com/pretty.needed.chill) to allow users to share their location precisely (within a 3m x 3m area).

Users can also indicate whether they are comfortable being contacted for additional information. This feature ensures that users can remain anonymous if they prefer.

### Desktop View


### Tablet View


### Mobile View



[Back to Table of Contents](#table-of-contents)

---

# **Goal**  

The **Goal** section provides a concise summary of the main objective or purpose of the project described in this README. It addresses the following aspects:  

- **Problem Statement:** 
- **Objective(s):**  
- **Target Audience:**
- **Benefits:** 

[Back to Table of Contents](#table-of-contents)

---

# Submission

[Back to Table of Contents](#table-of-contents)

---

# Deployment

GitHub was used to deploy the website. These were the steps taken to acheive this:


1. Log in to your GitHub account.
2. Navigate to the project repository.
3. Click the Settings tab near the top of the page.
4. In the left-hand menu, click on Pages.
5. Under the Source section:
    - Select main from the drop-down menu labeled "Branch."
    - Choose root from the folder drop-down menu.
6. Click Save.
7. After a few moments, your project will be live, and a link to the live page will appear at the top of the screen.

[Back to Table of Contents](#table-of-contents)

---

## Future Features
 
 [Back to Table of Contents](#table-of-contents)

---

# Technologies Used

## Languages Used 

## Frameworks, Libraries, Technologies & Programs Used


[Back to Table of Contents](#table-of-contents)

---

# Testing

### HTML Validation

### CSS Validation

### JS Validation

### Lighthouse 

[Back to Table of Contents](#table-of-contents)

---

## **🌟 Credits** 

[Back to Table of Contents](#table-of-contents)

---
 
### Contributors

| Name | Github | LinkedIn |
| --- | --- | --- |
| Ian O'Connor | [Github](https://github.com/IanOC1994) | [LinkedIn](https://www.linkedin.com/in/ianoconnor1994/) |
| Sarah Darlington | [Github](https://github.com/Sazzzel) | [LinkedIn](https://www.linkedin.com/in/sarah-darlington-dev/) |
| Mikael Johnsson | [Github](https://github.com/mikael-johnsson) | [LinkedIn](https://www.linkedin.com/in/mikael-johnsson/) |
| Maarten Ridder | [Github](https://github.com/MJRidder) | [LinkedIn](https://www.linkedin.com/in/maartenridder1/) |
| Gareth | [Github](https://github.com/MJRidder) | [LinkedIn](https://www.linkedin.com/in/maartenridder1/) |

[Back to Table of Contents](#table-of-contents)