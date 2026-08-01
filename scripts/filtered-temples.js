document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modification : " + document.lastModified;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (hamburger.textContent === '☰') {
        hamburger.textContent = '✖'; 
    } else {
        hamburger.textContent = '☰'; 
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10396,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6208-thumb.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017,  May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054-thumb.jpg"
        
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1989, March, 5",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67232-thumb.jpg"
    }
]

const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Size: ${temple.area} sq ft`;

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}
displayTemples(temples);
const pageTitle = document.querySelector("#page-title");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    pageTitle.textContent = "Old";

    let oldTemples = temples.filter(
        temple => Number(temple.dedicated.split(",")[0]) < 1900
    );
    displayTemples(oldTemples);
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    pageTitle.textContent = "New";

    let newTemples = temples.filter(
        temple => Number(temple.dedicated.split(",")[0]) > 2000
    );
    displayTemples(newTemples);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    pageTitle.textContent = "Large";

    let largeTemples = temples.filter(
        temple => temple.area > 90000
    );
    displayTemples(largeTemples);
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    pageTitle.textContent = "Small";

    let smallTemples = temples.filter(
        temple => temple.area < 10000
    );
    displayTemples(smallTemples);
});