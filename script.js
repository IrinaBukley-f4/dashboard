// checkout between projects  employees

const projectsBtnEl = document.querySelector('#projects-btn');
const emlpoyeesBtnEl = document.querySelector('#employees-btn');
const projectsBlockEl = document.querySelector('#projects-block');
const emlpoyeesBlockEl = document.querySelector('#employee-block');

projectsBtnEl.addEventListener('click', () => {
    emlpoyeesBtnEl.classList.remove('active');
    projectsBtnEl.classList.add('active');
    projectsBlockEl.classList.remove('hide');
    emlpoyeesBlockEl.classList.add('hide');
});
emlpoyeesBtnEl.addEventListener('click', () => {
    emlpoyeesBtnEl.classList.add('active');
    projectsBtnEl.classList.remove('active');
    projectsBlockEl.classList.add('hide');
    emlpoyeesBlockEl.classList.remove('hide');
});

// hide aside pannel
const burgerBtnEl = document.querySelector('.side-pannel__burger');
const rightBtnEl = document.querySelector('.right');
const sidePanelEl = document.querySelector('.side-pannel');

burgerBtnEl.addEventListener('click', () => {
    rightBtnEl.classList.remove('hidden');
    sidePanelEl.classList.add('hidden');
});
rightBtnEl.addEventListener('click', () => {
    rightBtnEl.classList.add('hidden');
    sidePanelEl.classList.remove('hidden');
});

// get current data in select

let date = new Date();
document.querySelector('#months').value = date.getMonth() + 1;
document.querySelector('#years').value = date.getUTCFullYear();

// open project modal
const addProjBtnEl = document.querySelector('#add-proj-btn');
const projectPopupEl = document.querySelector('.project__popup');
const cancelProjEl = document.querySelector('#cancel-proj');

addProjBtnEl.addEventListener('click', () => {
    projectPopupEl.classList.add('open');
});
if(cancelProjEl) {
    cancelProjEl.addEventListener('click', () => {
        projectPopupEl.classList.remove('open');
    });
}

const addEmployeeBtnEl = document.querySelector('#add-empl-btn');
const employeePopupEl = document.querySelector('.employee__popup');
const cancelEmployeeEl = document.querySelector('#cancel-empl');

addEmployeeBtnEl.addEventListener('click', () => {
    employeePopupEl.classList.add('open');
});
if(cancelEmployeeEl) {
    cancelEmployeeEl.addEventListener('click', () => {
        employeePopupEl.classList.remove('open');
    });
}

// project form validation

const nameEl = document.querySelector('#project-name-input');
const companyEl = document.querySelector('#project-company-input');
const budjetEl = document.querySelector('#project-budjet-input');
const capacityEl = document.querySelector('#project-capacity-input');
const addProjEl = document.querySelector('#add-proj');
let nameFlag = false;
let companyFlag = false;
let budjetFlag = false;
let capacityFlag = false;
const erNameEl = document.querySelector('#er-name');
const erCompanyEl = document.querySelector('#er-company');
const erBudjetEl = document.querySelector('#er-budjet');
const erCapacityEl = document.querySelector('#er-capacity');

nameEl.addEventListener('input', (e) => {
   if (e.target.value.length < 3) {
        nameEl.classList.add('red');
        nameFlag = false;
        erNameEl.innerHTML = 'Project name must be at least 3 characters';
    }  else {
        nameEl.classList.remove('red');
        nameFlag = true;
        erNameEl.innerHTML = '';
    }
    if(nameFlag && companyFlag && budjetFlag && capacityFlag) {
        addProjEl.disabled = false;
    } else {
        addProjEl.disabled = true;
    }
});

companyEl.addEventListener('input', (e) => {
    if (e.target.value.length < 2) {
        companyEl.classList.add('red');
        companyFlag = false;
        erCompanyEl.innerHTML = 'Company name must be at least 2 characters';
    } else {
        companyEl.classList.remove('red');
        companyFlag = true;
        erCompanyEl.innerHTML = '';
    }
     if(nameFlag && companyFlag && budjetFlag && capacityFlag) {
        addProjEl.disabled = false;
    } else {
        addProjEl.disabled = true;
    }
});
budjetEl.addEventListener('input', (e) => {
    if (e.target.value <= 0) {
        budjetEl.classList.add('red')
        budjetFlag = false;
        erBudjetEl.innerHTML = 'Budget must be greater than 0';
    } else {
        budjetEl.classList.remove('red');
        budjetFlag = true;
         erBudjetEl.innerHTML = '';
    }
    if(nameFlag && companyFlag && budjetFlag && capacityFlag) {
        addProjEl.disabled = false;
    } else {
        addProjEl.disabled = true;
    }
});
capacityEl.addEventListener('input', (e) => {
    if (e.target.value < 1)  {
        capacityEl.classList.add('red')
        capacityFlag = false;
        erCapacityEl.innerHTML = 'Employee capacity must be at least 1';
    } else {
        capacityEl.classList.remove('red');
        capacityFlag = true;
        erCapacityEl.innerHTML = '';
    }
     if(nameFlag && companyFlag && budjetFlag && capacityFlag) {
        addProjEl.disabled = false;
    } else {
        addProjEl.disabled = true;
    }
});
addProjEl.addEventListener('click', () => {
    projectPopupEl.classList.remove('open');
    if(nameFlag && companyFlag && budjetFlag && capacityFlag) {
        addProjEl.disabled = true;
    }
});

