
// document.addEventListener('DOMContentLoaded', function() {
//       const skills = JSON.parse(localStorage.getItem('skills')) || [];
//       const skillsList = document.getElementById('skillsList');
//       skills.forEach(skill => {
//           const li = document.createElement('li');
//           li.textContent = skill;
//           skillsList.appendChild(li);
//       });
//   });



function setZoom() {
      // if (window.matchMedia('(min-width: 780px) and (max-width: 1280px)').matches) {
      //   document.body.style.zoom = "60%";
      // } else if (window.matchMedia('(min-width: 360px) and (max-width: 740px)').matches) {
      //       document.body.style.zoom = "58%";
      //     }
      
      // else {
      //   document.body.style.zoom = "100%";
      // }
      if (window.matchMedia('(width < 108px)').matches) {
            let profile = document.querySelector('.profile')
            profile.removeAttribute('data-tilt')
            // document.body.style.zoom = "70%";
          }

      
    }
   
    // Call the function to set the zoom on page load
    setZoom();
   
    // Handle the window resize event
    window.addEventListener('resize', setZoom);



  // Retrieve the name from sessionStorage
  const name = sessionStorage.getItem('userName');
  const job = sessionStorage.getItem('jobTitle');
  const email = sessionStorage.getItem('email');
  const phone = sessionStorage.getItem('phone');
  const gender = sessionStorage.getItem('gender');
  const city = sessionStorage.getItem('city');
  const address = sessionStorage.getItem('address');
  const state = sessionStorage.getItem('state');
  const postalCode = sessionStorage.getItem('postalCode');
  
//   Experience
  const experience_name = sessionStorage.getItem('experience_name');
  const experience_Years = sessionStorage.getItem('experience_Years');
  const experience_institute = sessionStorage.getItem('experience_institute');
  const experience = sessionStorage.getItem('experience');
  
  // Education
  const edu_institute = sessionStorage.getItem('edu_institute');
  const edu_degree = sessionStorage.getItem('edu_degree');
  const education_date = sessionStorage.getItem('education_date');
  
  // Certificates
  const certificates_name = sessionStorage.getItem('certificates_name');
  const certificates_date = sessionStorage.getItem('certificates_date');
  const certificates_para = sessionStorage.getItem('certificates_para');
  


// Check if the name exists in sessionStorage and update in html 
// Personal Info
  
  if (name) {
      // Display the name in the span
      document.getElementById('displayName').textContent = name;
      document.querySelectorAll(".name").forEach((v)=>{v.innerText = `${name}`})

if(job){
      document.getElementById('job').textContent = job;
      document.querySelectorAll(".position").forEach((v)=>{v.innerText = `${job}`})
}
if(email){
      document.getElementById('email').textContent = email;
}
if(phone){
      document.getElementById('phone').textContent = phone;
}
if(gender){
      document.getElementById('gender').textContent = gender;
}
if(city){
      document.getElementById('city').textContent = city;
}
if(address){
      document.getElementById('address').textContent = address;
}
if(state){
      document.getElementById('state').textContent = state;
}
if(postalCode){
      document.getElementById('postalCode').textContent = postalCode;
}

// Experience

if(experience_name){
      document.getElementById('experience_name').textContent = experience_name;
}
if(experience_Years){
      document.getElementById('experience_Years').textContent = experience_Years;
}
if(experience_institute){
      document.getElementById('experience_institute').textContent = experience_institute;
}
if(experience){
      document.getElementById('experience').textContent = experience;
}


// Certificates

if(certificates_name){
      document.getElementById('certificates_name').textContent = certificates_name;
}
if(certificates_date){
      document.getElementById('certificates_date').textContent = certificates_date;
}
if(certificates_para){
      document.getElementById('certificates_para').textContent = certificates_para;
}


// Education

if(edu_institute){
      document.getElementById('edu_institute').textContent = edu_institute;
}
if(edu_degree){
      document.getElementById('edu_degree').textContent = edu_degree;
}
if(education_date){
      document.getElementById('education_date').textContent = education_date;
}






      // Clear the sessionStorage to ensure the name is not displayed again on page refresh
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('jobTitle');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('phone');
      sessionStorage.removeItem('gender');
      sessionStorage.removeItem('city');
      sessionStorage.removeItem('address');
      sessionStorage.removeItem('state');
      sessionStorage.removeItem('experience_name');
      sessionStorage.removeItem('experience_Years');
      sessionStorage.removeItem('experience_institute');
      sessionStorage.removeItem('edu_institute');
      sessionStorage.removeItem('edu_degree');
      sessionStorage.removeItem('education_date');
      sessionStorage.removeItem('certificates_name');
      sessionStorage.removeItem('certificates_date');
      sessionStorage.removeItem('certificates_para');

  }




// Create PDF
const resume = document.getElementById('resume')
let opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 5 },
    jsPDF:        { unit: 'mm', format: 'letter', orientation: 'landscape' }
  };
  download.onclick = () => html2pdf(resume, opt);


