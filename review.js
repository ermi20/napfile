// local reviews data
const reviews = [{
        id: 1,
        name: "susan smith",
        job: "from athens", //i change it to place 
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Try the Lasagne!!!! Try the Lasgne and do not forget to try the Lasagne ",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "amstrdam",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "A perfect atmospheric place with amazing dishes and Delicious authentic dishes",
    },
    {
        id: 3,
        name: "peter jones",
        job: "from crete",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "It may look like your average neighborhood italian restaurant, but Napul' e is anything but that! Created from actual Napolitanos the food is what you would get on the table when visiting an actual Napolitano family! Cooked fresh, I had the best Lassagne ever, cheesee and creamy just as I like it!",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "from athens",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "I wandered in on a Friday night, and was immediately greeted by the friendly staff and incredible aroma of baking bread and pasta. The restaurant was filling up quickly (it was almost 7:00 pm) but we managed to snag a table. ",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function() {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});