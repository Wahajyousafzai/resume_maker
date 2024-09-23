"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setZoom() {
    if (window.matchMedia('(width < 108px)').matches) {
        var profile = document.querySelector('.profile');
        if (profile) {
            profile.removeAttribute('data-tilt');
        }
    }
}
setZoom();
window.addEventListener('resize', setZoom);
var name = sessionStorage.getItem('userName');
var job = sessionStorage.getItem('jobTitle');
var email = sessionStorage.getItem('email');
var phone = sessionStorage.getItem('phone');
var gender = sessionStorage.getItem('gender');
var city = sessionStorage.getItem('city');
var address = sessionStorage.getItem('address');
var state = sessionStorage.getItem('state');
var postalCode = sessionStorage.getItem('postalCode');
var experience_name = sessionStorage.getItem('experience_name');
var experience_Years = sessionStorage.getItem('experience_Years');
var experience_institute = sessionStorage.getItem('experience_institute');
var experience = sessionStorage.getItem('experience');
var edu_institute = sessionStorage.getItem('edu_institute');
var edu_degree = sessionStorage.getItem('edu_degree');
var education_date = sessionStorage.getItem('education_date');
var certificates_name = sessionStorage.getItem('certificates_name');
var certificates_date = sessionStorage.getItem('certificates_date');
var certificates_para = sessionStorage.getItem('certificates_para');
if (name) {
    document.getElementById('displayName').textContent = name;
    document.querySelectorAll(".name").forEach(function (v) {
        v.innerText = "".concat(name);
    });
    if (job) {
        document.getElementById('job').textContent = job;
        document.querySelectorAll(".position").forEach(function (v) { v.innerText = "".concat(job); });
    }
    if (email) {
        document.getElementById('email').textContent = email;
    }
    if (phone) {
        document.getElementById('phone').textContent = phone;
    }
    if (gender) {
        document.getElementById('gender').textContent = gender;
    }
    if (city) {
        document.getElementById('city').textContent = city;
    }
    if (address) {
        document.getElementById('address').textContent = address;
    }
    if (state) {
        document.getElementById('state').textContent = state;
    }
    if (postalCode) {
        document.getElementById('postalCode').textContent = postalCode;
    }
    if (experience_name) {
        document.getElementById('experience_name').textContent = experience_name;
    }
    if (experience_Years) {
        document.getElementById('experience_Years').textContent = experience_Years;
    }
    if (experience_institute) {
        document.getElementById('experience_institute').textContent = experience_institute;
    }
    if (experience) {
        document.getElementById('experience').textContent = experience;
    }
    if (certificates_name) {
        document.getElementById('certificates_name').textContent = certificates_name;
    }
    if (certificates_date) {
        document.getElementById('certificates_date').textContent = certificates_date;
    }
    if (certificates_para) {
        document.getElementById('certificates_para').textContent = certificates_para;
    }
    if (edu_institute) {
        document.getElementById('edu_institute').textContent = edu_institute;
    }
    if (edu_degree) {
        document.getElementById('edu_degree').textContent = edu_degree;
    }
    if (education_date) {
        document.getElementById('education_date').textContent = education_date;
    }
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
