const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

const homePage = document.getElementById("home-container");
const aboutPage = document.getElementById("about-container");
const contactPage = document.getElementById("about-container");

const links = [homeLink, aboutLink, contactLink]
const imgs = document.querySelectorAll("img");


const modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeButton.onclick = () => { 
    modal.style.display = "none";
}

const getExtension = (imageId) => {
    switch(imageId) {
        case "breakfast":
        case "cloudythoughts":
        case "indian_curry_spices":
        case "pharmacy":
        case "room":
        case "yellow_cat":
            return "JPG"
        case "maison":
            return "jpeg"
        default:
            return "jpg"
        
    }
}

const getSourceUrl = imageId => {
    const base = `https://cloudythoughts.s3-ap-northeast-1.amazonaws.com/${imageId}_large.`;
    // const base = `file:///Users/bryanlynch/Developer/cloudythoughts/photos/${imageId}_large.`;
    const extension = getExtension(imageId);
    return base + extension;
}

const imgClickCallBack = (e) => {
    const img = e.target;
    const id = img.id;
    const imgSrc = getSourceUrl(id);
    modalImg.src = imgSrc; 
    modal.style.display = "block";
    captionText.innerHTML = "this is something cool!";
    modalImg.style.display = "block";
    captionText.innerHTML = img.alt;
}

const linkClickCallback = (e) => {
    toggleActiveLink(e);
    handlePageTransition(e)
} 

const addClickListener = (ele, cb) => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        cb(e, ele);
    });
}

const addClickListenerToCollection = (eles, cb) => { eles.forEach(ele => addClickListener(ele, cb))};

addClickListenerToCollection(imgs, imgClickCallBack);
addClickListenerToCollection(links, linkClickCallback)

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

