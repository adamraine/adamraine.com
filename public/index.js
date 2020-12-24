document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('title');
  const navigation = document.getElementById('navigation');
  const sections = document.querySelectorAll('.section');
  
  let currentSelected = 'about-menu';
  document.getElementById(currentSelected).classList.add('selected');
  window.onscroll = () => {
    if (window.pageYOffset < title.clientHeight) {
      navigation.style.top = `${-window.pageYOffset}px`;
    } else {
      navigation.style.top = `${-title.clientHeight}px`;
    }
    
    for (const section of sections) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (window.pageYOffset + height / 2 < top) continue;
      if (window.pageYOffset + height / 2 > top + height) continue;
      const id = `${section.id}-menu`;
      if (id !== currentSelected) {
        document.getElementById(currentSelected).classList.remove('selected');
        document.getElementById(id).classList.add('selected');
        currentSelected = id;
      }
      break;
    }
  }
}, false);