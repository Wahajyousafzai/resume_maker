document
.getElementById("userForm")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  // Personal Info
  const name = document.getElementById("name").value;
  sessionStorage.setItem("userName", name); // Store the name in sessionStorage

  const job = document.getElementById("job").value;
  sessionStorage.setItem("jobTitle", job); // Store the job in sessionStorage

  const email = document.getElementById("email").value;
  sessionStorage.setItem("email", email); // Store the job in sessionStorage
  
  const phone = document.getElementById("phone").value;
  sessionStorage.setItem("phone", phone); // Store the job in sessionStorage
  
  const gender = document.getElementById("gender").value;
  sessionStorage.setItem("gender", gender); // Store the job in sessionStorage
  
  const city = document.getElementById("city").value;
  sessionStorage.setItem("city", city); // Store the job in sessionStorage
  
  const address = document.getElementById("address").value;
  sessionStorage.setItem("address", address); // Store the job in sessionStorage

  const state = document.getElementById("state").value;
  sessionStorage.setItem("state", state); // Store the job in sessionStorage
 
  const postalCode = document.getElementById("postalCode").value;
  sessionStorage.setItem("postalCode", postalCode); // Store the job in sessionStorage




  // Experience
  const experience_name = document.getElementById("experience_name").value;
  sessionStorage.setItem("experience_name", experience_name); // Store the name in sessionStorage
  
  const experience_Years = document.getElementById("experience_Years").value;
  sessionStorage.setItem("experience_Years", experience_Years); // Store the name in sessionStorage
  
  const experience_ins = document.getElementById("experience_institute").value;
  let experience_institute = ` |  ${experience_ins}`
  sessionStorage.setItem("experience_institute", experience_institute); // Store the name in sessionStorage
 
  const experience = document.getElementById("experience").value;
  sessionStorage.setItem("experience", experience); // Store the name in sessionStorage
  
  
  // Certificates
  
  const certificates_name = document.getElementById("certificates_name").value;
  sessionStorage.setItem("certificates_name", certificates_name); // Store the name in sessionStorage
  
  const certificates_date = document.getElementById("certificates_date").value;
  sessionStorage.setItem("certificates_date", certificates_date); // Store the name in sessionStorage
  
  const certificates_para = document.getElementById("certificates_para").value;
  sessionStorage.setItem("certificates_para", certificates_para); // Store the name in sessionStorage
  
  
  // Education
  const edu_institute = document.getElementById("edu_institute").value;
  sessionStorage.setItem("edu_institute", edu_institute); // Store the name in sessionStorage
  
  const edu_degree = document.getElementById("edu_degree").value;
  sessionStorage.setItem("edu_degree", edu_degree); // Store the name in sessionStorage
  
  const education_date = document.getElementById("education_date").value;
  sessionStorage.setItem("education_date", education_date); // Store the name in sessionStorage



  window.location.href = "index.html"; // Redirect to index.html
});



document.getElementById('add_skill').addEventListener('click',() => {
    // Get the input element
    const inputElement = document.getElementById('inputElement');
    // Clone the input element
    const clonedInput = inputElement.cloneNode(true);
    
    // Append the cloned input to the container
    document.getElementById('inputContainer').appendChild(clonedInput);
})