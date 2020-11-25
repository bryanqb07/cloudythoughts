const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

[homeLink, aboutLink, contactLink].forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        toggleActiveLink(e);
        handlePageTransition(e)
    });
});

const handlePageTransition = (e) => {
    const id = e.target.id;

    if (id === "home-link") {
        showHomePage();
    } else if (id === "contact-link") {
        showAboutPage();
    } else {
        showContactPage();
    }
}

const showHomePage = () => { console.log("home page"); }
const showAboutPage = () => { console.log("about page"); }
const showContactPage = () => { console.log("contact page"); }


const toggleActiveLink = (e) => {
    const id = e.target.id;
    [homeLink, aboutLink, contactLink].forEach(link => {
        link.style.color =  link.id == id ? "black" : "gray";
    });
}

