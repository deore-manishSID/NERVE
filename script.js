let header = document.querySelector("header");


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});


gsap.from(".holiday-text h2", {
    x:35,
    delay:1,
    duration:2.3,
    opacity:0


})
gsap.from(".card-container h1", {
    y:24,
    delay:0.5,
    duration:1.9,
    opacity:0,
    scrollTrigger: ".card-container h1"
})
gsap.from(".faq-container h1", {
    y:24,
    delay:0.5,
    duration:1.8,
    opacity:0,
    scrollTrigger: ".faq-container h1"
})
gsap.from(".div-2 h1", {
    y:24,
    delay:0.5,
    duration:2.2,
    opacity:0,
    scrollTrigger: ".div-2 h1"
})


let heroes = ["krish", "robot", "raone"];
console.log(heroes);

heroes.push("flying-jaat");
console.log(heroes);


heroes.pop();
console.log(heroes);
heroes.pop();
console.log(heroes);

function chai(){
    console.log(this);
}
chai()

// const objone = {
//     name: "manish patil",
//     age: 23,
//     location: "pune",
//     hobby: "coding", 
//     education: "BCA"
// }
// const objtwo = {
//     name: "dinesh patil",
//     age: 25,
//     location: "nashik",
//     hobby: "drinking", 
//     education: "BBA"
// }
// console.log(objone);
// console.log(objtwo);




// let cousins = [...objone, ...objtwo]
// console.log(cousins);

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [7, 8, 9, 10]

console.log(arr2);
arr2.push(11)
console.log(arr2);
const both = [...arr1, ...arr2]

console.log(both);










