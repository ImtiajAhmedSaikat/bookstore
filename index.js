function getData(){
    fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
    .then(responce=>responce.json())
    .then(res=>{
      createEvent(res.books)
      buildCard(res.books)
      addSlides(res.books)
    })
    .catch(err=>console.log(err.message));
    
}
getData()

function buildCard(array){
    console.log(array)
     array.forEach((element, index) => {
         let booksPlace=document.getElementById("book-detais")
         

         let flipCard=`
         
         <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src=${element.cover} alt="Avatar" style="width:300px;height:400px;">
    </div>
    <div class="flip-card-back">
      <h1>${element.title}</h1>
      <p>${element.description}</p>
      <p>${element.language}</p>
      <button type="button" class="btn btn-outline-danger" onclick="openModal(),currentSlide(${index+1})" >More Info</button>
      

      
    </div>
  </div>
</div>

`
     //console.log(flipCard)    
     booksPlace.innerHTML+=flipCard
     });
}
function createEvent(array){
  document.getElementById("mySearch").addEventListener("keyup",()=>createSearch(array))

}

function createSearch(array){
  let mySearch=document.getElementById("mySearch").value

   //console.log(mySearch)

   let myFilter=array.filter(book=>book.title.toLowerCase().includes(mySearch.toLowerCase()) || book.description.toLowerCase().includes(mySearch.toLowerCase()))

   //console.log(myFilter)

   document.getElementById("book-detais").innerHTML=""
   buildCard(myFilter)  

}
function addSlides(array) {
  array.forEach((element,index)=>{
  var mySlides = `
  <div class="mySlides">
    <div class="numbertext">${index + 1} / ${array.length}</div>
    <img src="${element.details}" style="width:100%">
  </div>
  `
  document.getElementById("slidebox").innerHTML += mySlides
  })
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
document.getElementById("myModal").style.display = "none";
}
function slideIndex() {
let slideIndex = 1;
showSlides(slideIndex);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
      showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}






// function openModal(){
//   let modal=document.getElementById("myModal")
//   modal.style.display = "block";
    
// }
// function closeModal(){
//   let modal=document.getElementById("myModal")
//   modal.style.display = "none";
// }
// function currentSlide(n){

// }

// function addSlides(n) {
//   showSlides(slideIndex += n)
  
  
// }
// function mySlide(array){
// array.forEach((ele,index)=>{
//   let mSlide=`<div class="mySlides">
//   <div class="numbertext">${index+1}/ ${array.length}</div>
//   <img src=${ele.details} style="width:100%">
// </div>`

// let slideBox=document.getElementById("slidebox")
// slideBox.innerHTML +=mSlide;

// })
// }
// function slideIndex() {
//   let slideIndex = 1;
//   showSlides(slideIndex);
// }
  
// function showSlides(n) {

  
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
  
  
// }
// function plusSlide(n){
//   showSlides(slideIndex+=n)

// }