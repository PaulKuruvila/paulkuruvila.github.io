let dropdownElements = [];

addEventListener("resize", (e) => {
  if(window.innerWidth > 480 && dropdownElements.length > 0) {
    if(dropdownElements[2].style.display === 'none') { // reset dropdown icons/navbar options
      dropdownElements[2].style.display = 'flex';
      dropdownElements[0].style.display = 'inline-block';
      dropdownElements[1].style.display = 'none';
    }
  } else if (window.innerWidth <= 480 && dropdownElements[2].style.display === 'flex') {
    // hide navbar options again
    dropdownElements[2].style.display = 'none';
  }
});

const openModal = () => {
  document.getElementById('modal-backdrop').style.display = 'block';
};

const closeModal = () => {
  document.getElementById('modal-backdrop').style.display = 'none';
  document.getElementById('project-embed').style.display = 'none';
  document.getElementById('project-site-btn').style.display = 'none';
  document.getElementById('project-close-btn').style.top = '55%';
  document.getElementById('project-embed').setAttribute('src', '');
};

const toggleDropdown = (pressed) => {
  dropdownElements = [document.getElementById('nav-dropdown').children[0],
  document.getElementById('nav-dropdown').children[1], document.getElementById('nav-options')];
  console.log(pressed,'was pressed');
  if(pressed === 'open') {
    dropdownElements[0].style.display = 'none';
    dropdownElements[1].style.display = 'inline-block';
    dropdownElements[2].style.display = 'flex';
  } else if(pressed === 'close') {
    dropdownElements[0].style.display = 'inline-block';
    dropdownElements[1].style.display = 'none';
    dropdownElements[2].style.display = 'none';
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
    document.getElementById('project-embed').style.display = 'block';
    if(hasExternalLink) {
      document.getElementById('project-embed').setAttribute('src', link);
      document.getElementById('project-embed').setAttribute('title', embed_title);
      document.getElementById('project-site-btn').style.display = 'block';
      document.getElementById('project-close-btn').style.top = '60%';
    }
    return;
  } else if(aspect === 'redirect') {
    window.open(link,'_blank');
    return;
  } else {
    console.log('Unexpected parameter received: check for any typos');
  }
};