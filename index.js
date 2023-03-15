let theme = localStorage.getItem('theme') || 'dark';
switchMode(theme);

const delay = ms => new Promise(res => setTimeout(res, ms));
const scrollElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

scrollElements.forEach((e) => observer.observe(e));

const displayFade = async () => {
	await delay(1000);
	document.querySelector(".subtitle").style.display = "block";

	await delay(1000);
	document.querySelector(".subtext").style.display = "block";
}

function switchMode(theme){
    if(theme == 'dark') {
      document.querySelector(':root').style.setProperty('--background-color', '#27282c');
      document.querySelector(':root').style.setProperty('--text-color', 'white');
      document.querySelector(':root').style.setProperty('--nav-color', 'darkgrey');
      document.querySelector(':root').style.setProperty('--about-color', '#383838');
      localStorage.setItem('theme', 'dark');
    }else if(theme == 'light'){
      document.querySelector(':root').style.setProperty('--background-color', 'white');
      document.querySelector(':root').style.setProperty('--text-color', 'black');
      document.querySelector(':root').style.setProperty('--nav-color', '#565656');
      document.querySelector(':root').style.setProperty('--about-color', '#c7c7c7');
      document.querySelector('.circlething').style.backgroundColor = '#ebebeb';
      localStorage.setItem('theme', 'light');
    }
}

displayFade();