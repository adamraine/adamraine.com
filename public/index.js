document.addEventListener('DOMContentLoaded', function() {
  const navigation = document.getElementById('navigation');
  const content = document.getElementById('content');
  const sticky = navigation.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset > sticky) {
      navigation.classList.add('sticky');
      content.style.paddingTop = `${navigation.offsetHeight}px`;
    } else {
      navigation.classList.remove('sticky');
      content.style.paddingTop = null;
    }
  }
}, false);