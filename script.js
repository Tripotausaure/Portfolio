function toggleSection(sectionId) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add("hidden");
    }
    
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.remove("hidden");
    
    var navLinks = document.getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    
    var activeLink = document.querySelector('a[href="#' + sectionId + '"]');
    activeLink.classList.add("active");
  }
  
  function refreshPage() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add("hidden");
    }
    
    var homeSection = document.getElementById("accueil");
    homeSection.classList.remove("hidden");
    
    var navLinks = document.getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    
    var homeLink = document.querySelector('a[href="#accueil"]');
    homeLink.classList.add("active");
  }
  
  window.addEventListener("load", function() {
    window.scrollTo(0, 0);
    refreshPage();
  });
  