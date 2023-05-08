export const toggleListSection = () => {
  document.querySelector('.list_container').classList.add('dBlock');
  document.querySelector('.list_container').classList.remove('dNone');
  document.querySelector('.contact_section').classList.add('dNone');
  document.querySelector('.contact_section').classList.remove('dBlock');
  document.querySelector('.form_section').classList.add('dNone');
  document.querySelector('.form_section').classList.remove('dBlock');
};

export const toggleFormSection = () => {
  document.querySelector('.list_container').classList.add('dNone');
  document.querySelector('.list_container').classList.remove('dBlock');
  document.querySelector('.form_section').classList.add('dBlock');
  document.querySelector('.form_section').classList.remove('dNone');
  document.querySelector('.contact_section').classList.add('dNone');
  document.querySelector('.contact_section').classList.remove('dBlock');
};

export const toggleContactSection = () => {
  document.querySelector('.contact_section').classList.add('dBlock');
  document.querySelector('.contact_section').classList.remove('dNone');
  document.querySelector('.form_section').classList.add('dNone');
  document.querySelector('.form_section').classList.remove('dBlock');
  document.querySelector('.list_container').classList.add('dNone');
  document.querySelector('.list_container').classList.remove('dBlock');
};
