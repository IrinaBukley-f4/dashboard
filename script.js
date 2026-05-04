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
const cancelProjEl = document.querySelector('.cancel-proj');
addProjBtnEl.addEventListener('click', () => {
    projectPopupEl.classList.add('open');
});
cancelProjEl.addEventListener('click', () => {
    projectPopupEl.classList.remove('open');
});