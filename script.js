const prog_languages = [
  'JavaScript', 'HTML', 'CSS/SCSS', 'Python','C++', 'SQL', 'C#', 'Java', 'R', 'Tcl'
];
const prog_libFrames = ['React', 'Express.js', 'Jest', 'Tkinter'];
const prog_tools = [
  'Git', 'Jira', 'Github Actions', 'AWS CLI', 'Webpack', 'Visual Studio Code',  'Vim', 'RStudio', 
  'Apache Rivet'
];
const prog_osPlatforms = ['Github', 'Node.js', 'AWS', 'Heroku', 'Vercel', 'Unity',
  'Windows', 'Linux'
];

const skillItem = (skill, idx) => {
  return `<li id='${skill}-${idx}'>${skill}</li>`;
};

const generateList = (list, skill) => {
  let skill_list='';
  list.map((lang, index) => {
    skill_list += skillItem(lang, index);
  })
  document.getElementById(skill).innerHTML = skill_list;
};

const generateLists = () => {
  generateList(prog_languages, 'prog_languages');
  generateList(prog_libFrames, 'prog_libFrames');
  generateList(prog_tools, 'prog_tools');
  generateList(prog_osPlatforms, 'prog_osPlatforms');
}

window.onload = (e) => {
  generateLists();
}

let dropdownElements = [];
let previousWindowWidth = 0;
let navOpenIntroPadding = '9rem';
let navClosedIntroPadding = '4rem';

addEventListener("resize", (e) => {
  if(window.innerWidth > 480 && dropdownElements.length > 0) { // if dropdown hidden, but it has been pressed before
    // reset dropdown icons/navbar options
    dropdownElements[0].style['display'] = 'inline-block';
    dropdownElements[1].style['display'] = 'none';
    if(dropdownElements[2].style['display'] === 'none') { 
      dropdownElements[2].style['display'] = 'flex';
    }
    // Adjust padding on intro section to fall under navbar with resizing changes
    if(window.innerWidth > 700) {
      dropdownElements[3].style['padding-top'] = '6.5rem';
    } else if(dropdownElements[1].style['display'] === 'none') {
      dropdownElements[3].style['padding-top'] = navOpenIntroPadding;
    }
  } else if (dropdownElements.length > 0) { // if we are mobile, and dropdown has been pressed before
    if(previousWindowWidth > 480) { // if dropdown was previously hidden
      if(dropdownElements[2].style['display'] === 'flex'){
        // hide navbar options again
        dropdownElements[2].style['display'] = 'none';
      }
      // Adjust padding on intro section to fall under navbar with resizing changes pt. 2
      if(dropdownElements[3].style['padding-top'] === navOpenIntroPadding) {
        dropdownElements[3].style['padding-top'] = navClosedIntroPadding;
      }
    }
  }
  previousWindowWidth = window.innerWidth;
});

const openModal = () => {
  document.getElementById('modal-backdrop').style['display'] = 'block';
};

const closeModal = () => {
  document.getElementById('modal-backdrop').style['display'] = 'none';
  document.getElementById('project-embed').style['display'] = 'none';
  document.getElementById('project-site-btn').style['display'] = 'none';
  document.getElementById('project-close-btn').style['top'] = '55%';
  document.getElementById('project-embed').setAttribute('src', '');
};

const toggleDropdown = (pressed) => {
  dropdownElements = [document.getElementById('nav-dropdown').children[0],
  document.getElementById('nav-dropdown').children[1], document.getElementById('nav-options'),
  document.getElementById('intro')];
  if(pressed === 'open') {
    dropdownElements[0].style['display'] = 'none';
    dropdownElements[1].style['display'] = 'inline-block';
    dropdownElements[2].style['display'] = 'flex';
    dropdownElements[3].style['padding-top'] = navOpenIntroPadding;
  } else if(pressed === 'close') {
    dropdownElements[0].style['display'] = 'inline-block';
    dropdownElements[1].style['display'] = 'none';
    dropdownElements[2].style['display'] = 'none';
    dropdownElements[3].style['padding-top'] = navClosedIntroPadding;
  }
};

const viewSite = (link) => {
  window.open(link, '_blank');
};

const viewProject = (aspect, hasExternalLink, ref, embed_title) => {
  if(aspect === 'details') {
    let button_id = document.getElementById(ref); 
    if(button_id.classList.contains('show-details'))
      // close it
      button_id.classList.remove('show-details');
    else
      // open it
      button_id.classList.add('show-details');
    return;
  } else if(aspect === 'embed') {
    openModal();
    document.getElementById('project-embed').style['display'] = 'block';
    if(hasExternalLink) {
      document.getElementById('project-embed').setAttribute('src', ref);
      document.getElementById('project-embed').setAttribute('title', embed_title);
      document.getElementById('project-site-btn').style['display'] = 'block';
      document.getElementById('project-close-btn').style['top'] = '60%';
    }
    return;
  } else if(aspect === 'redirect') {
    window.open(ref,'_blank');
    return;
  } else {
    console.log('Unexpected parameter received: check for any typos');
  }
};

const viewExperience = (id) => {
  const element = document.getElementById(id);
  if(element.classList.contains('we-open')) {
    element.classList.remove('we-open');
  } else {
    element.classList.add('we-open');
  }
}