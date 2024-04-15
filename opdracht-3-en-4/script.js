function reveal() {
    let reveals = document.querySelectorAll("#diego, #tcr, .sub-title.about, .text.about, .text.experience, .link.experience, .sub-title.experience, .sub-title#stageplek.experience, #wtc.experience, .sub-title.contact, #instagram.contact, .contact-inner-box");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 0;
        
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


function gitlabLink() {
  window.open('https://gitlab.com/trueeman', '_blank');
}

function mailLink() {
  window.open('mailto:diego-ballestero@hotmail.com', '_blank');
}

function githubLink() {
  window.open('https://github.com/trueeman', '_blank');
}

function instagramLink() {
  window.open('https://www.instagram.com/ding0o0/', '_blank');
}

function linkedinLink() {
  window.open('https://www.linkedin.com/in/diego-ballestero-4950132b8/', '_blank');
}