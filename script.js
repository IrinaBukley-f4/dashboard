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

// employee form validation

const nameEmployeeEl = document.querySelector('#empl-name-input');
const surnameEl = document.querySelector('#surname-input');
const birthEl = document.querySelector('#birth-input');
const positionEl = document.querySelector('#position-select');
const salaryEl = document.querySelector('#salary-input');
const addEmplPopupEl = document.querySelector('#add-empl');
let nameEmlplFlag = false;
let surnameFlag = false;
let birthFlag = false;
let positionFlag = false;
let salaryFlag = false;
const erNameEmplEl = document.querySelector('#er-name-empl');
const erSurnameEl = document.querySelector('#er-surname');
const erBirthEl = document.querySelector('#er-date');
const erPositionEl = document.querySelector('#er-position');
const erSalaryEl = document.querySelector('#er-salary');

nameEmployeeEl.addEventListener('input', (e) => {
   if (e.target.value.length < 3) {
        nameEmployeeEl.classList.add('red');
        nameEmlplFlag = false;
        erNameEmplEl.innerHTML = 'Name must be at least 3 characters and contain only letters';
    }  else {
        nameEmployeeEl.classList.remove('red');
        nameEmlplFlag = true;
        erNameEmplEl.innerHTML = '';
    }
    if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    } else {
        addEmplPopupEl.disabled = true;
    }
});

surnameEl.addEventListener('input', (e) => {
    if (e.target.value.length < 3) {
        surnameEl.classList.add('red');
        surnameFlag = false;
        erSurnameEl.innerHTML = 'Surname must be at least 3 characters and contain only letters';
    } else {
        surnameEl.classList.remove('red');
        surnameFlag = true;
        erSurnameEl.innerHTML = '';
    }
    if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    } else {
        addEmplPopupEl.disabled = true;
    }
});
birthEl.addEventListener('input', (e) => {
    function birthDateToAge(birthDate) {
        birthDate = new Date(birthDate);
        var now = new Date(),
        age = now.getFullYear() - birthDate.getFullYear();
        return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
    }

        let inputValue = e.target.value;
    let age = birthDateToAge(inputValue);
    if ( age < 18) {
        birthEl.classList.add('red')
        birthFlag = false;
        erBirthEl.innerHTML = 'You must be at least 18 years old';
    } else {
        birthEl.classList.remove('red');
        birthFlag = true;
         erBirthEl.innerHTML = '';
    }
   if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    } else {
        addEmplPopupEl.disabled = true;
    }
});
positionEl.addEventListener('input', (e) => {
    if (e.target.value.length <= 0) {
        positionEl.classList.add('red')
        positionFlag = false;
        erPositionEl.innerHTML = 'Please select a position';
    } else {
        positionEl.classList.remove('red');
        positionFlag = true;
         erPositionEl.innerHTML = '';
    }
   if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    } else {
        addEmplPopupEl.disabled = true;
    }
});
salaryEl.addEventListener('input', (e) => {
    if (e.target.value <= 0)  {
        salaryEl.classList.add('red')
        salaryFlag = false;
        erSalaryEl.innerHTML = 'Salary must be greater than 0';
    } else {
        salaryEl.classList.remove('red');
        salaryFlag = true;
        erSalaryEl.innerHTML = '';
    }
    if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    } else {
        addEmplPopupEl.disabled = true;
    }
});
addEmplPopupEl.addEventListener('click', () => {
    employeePopupEl.classList.remove('open');
    if(nameEmlplFlag && surnameFlag && birthFlag && positionFlag && salaryFlag) {
        addEmplPopupEl.disabled = false;
    }
});
