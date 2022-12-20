// Reviews Data

const reviews = [
    {
        id: 1,
        name: 'Mary Hilton',
        job: 'Software Engineer',
        img: 'https://res.cloudinary.com/dbxnxam7i/image/upload/v1671539082/model1_mntb21.png',
        text: `Their software services have helped us move 
        our production process faster and reduce overhead 
        costs. We increased our velocity two-fold, and 
        reduced the deployment time.`
    },
    {
        id: 2,
        name: 'Jackie May',
        job: 'Software Engineer',
        img: 'https://res.cloudinary.com/dbxnxam7i/image/upload/v1671539083/joanna-nix-walkup-GfqwtN5heR8-unsplash_jj4ysy.jpg',
        text: `Their software services have helped us move 
        our production process faster and reduce overhead 
        costs. We increased our velocity two-fold, and 
        reduced the deployment time.`
    },
    {
        id: 3,
        name: 'Ronald John',
        job: 'Software Engineer',
        img: 'https://res.cloudinary.com/dbxnxam7i/image/upload/v1671539083/elizeu-dias-2EGNqazbAMk-unsplash_jpfufh.jpg',
        text: `Their software services have helped us move 
        our production process faster and reduce overhead 
        costs. We increased our velocity two-fold, and 
        reduced the deployment time.`
    },
    {
        id: 4,
        name: 'Carol Summer',
        job: 'Software Engineer',
        img: 'https://res.cloudinary.com/dbxnxam7i/image/upload/v1671539352/alex-robinson-rrI02QQ9GSQ-unsplash_hpr4hn.jpg',
        text: `Their software services have helped us move 
        our production process faster and reduce overhead 
        costs. We increased our velocity two-fold, and 
        reduced the deployment time.`
    }
];

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item 
let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function() {
   showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person 
nextBtn.addEventListener('click', function (){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem); 
});

prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem); 
});