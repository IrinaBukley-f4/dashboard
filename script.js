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