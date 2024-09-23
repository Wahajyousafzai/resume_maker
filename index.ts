function setZoom(): void {
    if (window.matchMedia('(width < 108px)').matches) {
        const profile: HTMLElement | null = document.querySelector('.profile');
        if (profile) {
            profile.removeAttribute('data-tilt');
        }
    }
}

setZoom();

window.addEventListener('resize', setZoom);

const name: string | null = sessionStorage.getItem('userName');
const job: string | null = sessionStorage.getItem('jobTitle');
const email: string | null = sessionStorage.getItem('email');
const phone: string | null = sessionStorage.getItem('phone');
const gender: string | null = sessionStorage.getItem('gender');
const city: string | null = sessionStorage.getItem('city');
const address: string | null = sessionStorage.getItem('address');
const state: string | null = sessionStorage.getItem('state');
const postalCode: string | null = sessionStorage.getItem('postalCode');

const experience_name: string | null = sessionStorage.getItem('experience_name');
const experience_Years: string | null = sessionStorage.getItem('experience_Years');
const experience_institute: string | null = sessionStorage.getItem('experience_institute');
const experience: string | null = sessionStorage.getItem('experience');

const edu_institute: string | null = sessionStorage.getItem('edu_institute');
const edu_degree: string | null = sessionStorage.getItem('edu_degree');
const education_date: string | null = sessionStorage.getItem('education_date');

const certificates_name: string | null = sessionStorage.getItem('certificates_name');
const certificates_date: string | null = sessionStorage.getItem('certificates_date');
const certificates_para: string | null = sessionStorage.getItem('certificates_para');

if (name) {
    document.getElementById('displayName')!.textContent = name;
    document.querySelectorAll(".name").forEach((v) => {
        (v as HTMLElement).innerText = `${name}`;
      });
      

    if (job) {
        document.getElementById('job')!.textContent = job;
        document.querySelectorAll(".position").forEach((v) => { (v as HTMLElement).innerText = `${job}` });
    }
    if (email) {
        document.getElementById('email')!.textContent = email;
    }
    if (phone) {
        document.getElementById('phone')!.textContent = phone;
    }
    if (gender) {
        document.getElementById('gender')!.textContent = gender;
    }
    if (city) {
        document.getElementById('city')!.textContent = city;
    }
    if (address) {
        document.getElementById('address')!.textContent = address;
    }
    if (state) {
        document.getElementById('state')!.textContent = state;
    }
    if (postalCode) {
        document.getElementById('postalCode')!.textContent = postalCode;
    }

    if (experience_name) {
        document.getElementById('experience_name')!.textContent = experience_name;
    }
    if (experience_Years) {
        document.getElementById('experience_Years')!.textContent = experience_Years;
    }
    if (experience_institute) {
        document.getElementById('experience_institute')!.textContent = experience_institute;
    }
    if (experience) {
        document.getElementById('experience')!.textContent = experience;
    }

    if (certificates_name) {
        document.getElementById('certificates_name')!.textContent = certificates_name;
    }
    if (certificates_date) {
        document.getElementById('certificates_date')!.textContent = certificates_date;
    }
    if (certificates_para) {
        document.getElementById('certificates_para')!.textContent = certificates_para;
    }

    if (edu_institute) {
        document.getElementById('edu_institute')!.textContent = edu_institute;
    }
    if (edu_degree) {
        document.getElementById('edu_degree')!.textContent = edu_degree;
    }
    if (education_date) {
        document.getElementById('education_date')!.textContent = education_date;
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

export {}