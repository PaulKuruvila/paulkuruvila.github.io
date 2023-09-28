let dropdownElements = [];
let previousWindowWidth = 0;

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
      dropdownElements[3].style['padding-top'] = '5rem';
    } else if(dropdownElements[1].style['display'] === 'none') {
      dropdownElements[3].style['padding-top'] = '7rem';
    }
  } else if (dropdownElements.length > 0) { // if we are mobile, and dropdown has been pressed before
    if(dropdownElements[2].style['display'] === 'flex' && previousWindowWidth > 480) { // if dropdown was previously hidden
      // hide navbar options again
      dropdownElements[2].style['display'] = 'none';
    }
    // Adjust padding on intro section to fall under navbar with resizing changes pt. 2
    if(dropdownElements[3].style['padding-top'] === '7rem') {
      dropdownElements[3].style['padding-top'] = '2rem';
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
    dropdownElements[3].style['padding-top'] = '7rem';
  } else if(pressed === 'close') {
    dropdownElements[0].style['display'] = 'inline-block';
    dropdownElements[1].style['display'] = 'none';
    dropdownElements[2].style['display'] = 'none';
    dropdownElements[3].style['padding-top'] = '2rem';
  }
};

const viewSite = (link) => {
  window.open(link, '_blank');
};

const viewProject = (aspect, hasExternalLink, link, embed_title) => {
  if(aspect === 'details') {
    openModal();
    return;
  } else if(aspect === 'embed') {
    openModal();
    document.getElementById('project-embed').style['display'] = 'block';
    if(hasExternalLink) {
      document.getElementById('project-embed').setAttribute('src', link);
      document.getElementById('project-embed').setAttribute('title', embed_title);
      document.getElementById('project-site-btn').style['display'] = 'block';
      document.getElementById('project-close-btn').style['top'] = '60%';
    }
    return;
  } else if(aspect === 'redirect') {
    window.open(link,'_blank');
    return;
  } else {
    console.log('Unexpected parameter received: check for any typos');
  }
};