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
    en: 'Title',
    ru: 'Заголовок',
  },
  description: {
    en: 'Description',
    ru: 'Описание',
  },
  myTeam: {
    en: 'My team',
    ru: 'Моя команда',
  },
};


select.addEventListener('change', onSelectChange);
window.addEventListener('hashchange', changeSelectedOption);