const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

const homePage = document.getElementById("home-container");
const aboutPage = document.getElementById("about-container");
const contactPage = document.getElementById("about-container");

[homeLink, aboutLink, contactLink].forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        toggleActiveLink(e);
        handlePageTransition(e)
    });
});

const handlePageTransition = (e) => {
    const linkId = e.target.id;
    const pageMap = {
        "home-link": "home-container",
        "about-link": "about-container",
        "contact-link": "contact-container"
    }
    const pageId = pageMap[linkId];
    togglePage(pageId);
}

const togglePage = (id) => {
    [homePage, aboutPage, contactPage].forEach(page => {
        page.style.display =  page.id == id ? "block" : "none";
    });
}

const showHomePage = () => { 
    console.log("home page"); 
}
const showAboutPage = () => { console.log("about page"); }
const showContactPage = () => { console.log("contact page"); }


const toggleActiveLink = (e) => {
    const id = e.target.id;
    [homeLink, aboutLink, contactLink].forEach(link => {
        link.style.color =  link.id == id ? "black" : "gray";
    });
}

