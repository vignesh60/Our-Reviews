const reviews = [
    {
        id: 1,
        name: "smith",
        job: "web developer",
        img: "images/person1.avif",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus reiciendis, illo necessitatibus temporaipsa sit animi earum ad doloremque architecto corrupti voluptas magni repellat molestiae! Officiisrepellendus laudantium voluptas doloribus.",
    },
    {
        id: 2,
        name: "vicky",
        job: "UI / UX designer",
        img: "images/person2.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus reiciendis, illo necessitatibus temporaipsa sit animi earum ad doloremque architecto corrupti voluptas magni repellat molestiae! Officiisrepellendus laudantium voluptas doloribus.",
    },
    {
        id: 3,
        name: "Lokey",
        job: "software developer",
        img: "images/person4.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus reiciendis, illo necessitatibus temporaipsa sit animi earum ad doloremque architecto corrupti voluptas magni repellat molestiae! Officiisrepellendus laudantium voluptas doloribus.",
    },
    {
        id: 4,
        name: "William",
        job: "Graphic Designer",
        img: "images/person5.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus reiciendis, illo necessitatibus temporaipsa sit animi earum ad doloremque architecto corrupti voluptas magni repellat molestiae! Officiisrepellendus laudantium voluptas doloribus.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector("random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    img.style.transform = 'translateX(200%)';
    setTimeout(function () {
        img.style.transform = 'translateX(-200%)';
        img.style.transition = 'none';
    }, 200);
    setTimeout(function () {
        img.style.transition = '0.5s';
        img.style.transform = 'translateX(0%)';
    }, 300);
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    setTimeout(function () {
        showPerson(currentItem);
    }, 300);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    img.style.transform = 'translateX(-200%)';
    img.style.width = '0px';
    img.style.border ='none';
    setTimeout(function () {
        img.style.transform = 'translateX(200%)';
        img.style.transition = 'none';
    }, 500);
    setTimeout(function () {
        img.style.width = '10rem';
        img.style.border ='7px solid white';
        img.style.transition = '0.5s';
        img.style.transform = 'translateX(0%)';
    }, 600);
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    setTimeout(function () {
        showPerson(currentItem);
    }, 600);
});

randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
});