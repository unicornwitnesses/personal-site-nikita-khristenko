const title = document.querySelector('#title');
const description = document.querySelector('#description');
const myTeam = document.querySelector('#myTeam');

const content = [{
  title: 'title',
  element: title,
}, {
  title: 'description',
  element: description,
}, {
  title: 'myTeam',
  element: myTeam,
}];

const select = document.querySelector('.change-lang');
const options = Array.from(select.querySelectorAll('option'));

const updateContent = (lang) => {
  content.forEach(({ title, element }) => {
    element.textContent = translations[title][lang];
  });
};

const onSelectChange = () => {
  const selectedLanguage = options[select.selectedIndex].value
  window.location.hash = selectedLanguage;
  updateContent(selectedLanguage);
}

const changeSelectedOption = () => {
  const hash = window.location.hash.slice(1);
  const activeOption = options.find(option => option.value === hash);
  activeOption.selected = 'selected';
  onSelectChange();
}

const translations = {
  title: {
    en: 'I’m Nikita Khristenko. ux/ui designer. Certified coach.',
    ru: 'Никита Христенко. ux/ui designer. Certified coach.',
  },
  description: {
    en: 'I have a rich arsenal of skills and more than 3 years of hard freelancing experience. If you need to see a portfolio right away, go for it.',
    ru: 'У меня есть богатый арсенал навыков и больше 3 лет наработанного на суровом фрилансе опыта. Если вам нужно сразу посмотреть портфолио, то вперед.',
  },
  myTeam: {
    en: 'My team',
    ru: 'Моя команда',
  },
};


select.addEventListener('change', onSelectChange);
window.addEventListener('hashchange', changeSelectedOption);