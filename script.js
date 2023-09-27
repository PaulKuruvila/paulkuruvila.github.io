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

const viewSite = (link) => {
  window.open(link, '_blank');
};

const viewProject = (aspect, hasExternalLink, embed_link, embed_title) => {
  console.log(`View ${aspect} button was pressed.`);
  openModal();
  if(aspect === 'details') {
    console.log('Show project details');
    return;
  } else if(aspect === 'embed') {
    document.getElementById('project-embed').style.display = 'block';
    if(hasExternalLink) {
      document.getElementById('project-embed').setAttribute('src', embed_link);
      document.getElementById('project-embed').setAttribute('title', embed_title);
      document.getElementById('project-site-btn').style.display = 'block';
      document.getElementById('project-close-btn').style.top = '60%';
    }
    return;
  } else if(aspect === 'redirect') {
    console.log('Show project in redirect link');
    return;
  } else {
    console.log('Unexpected parameter received: check for any typos');
  }
};