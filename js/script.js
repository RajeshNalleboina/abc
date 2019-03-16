// function ajax(file,callback) {
//   var object=new XMLHttpRequest();
//   object.overrideMimeType("application/json");
//   object.open("GET",file,true);
//   object.onreadystatechange=function () {
//     if (object.readyState===4 && object.status=="200") {
//       callback(object.responseText);
//     }
//   }
//   object.send(null);
// }
// ajax("data.json",function(x) {
//   var data=JSON.parse(x);
//   mydata(data.teja_praveen);
// });

// Fetch & Promises method

fetch("data.json").then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
});

// Arrow functions
fetch("data.json").then(response=>response.json()).then(data=> {
  console.log(data);
  mydata(data.teja_praveen);

});





var card=document.querySelector("#cards");
var cards=document.createElement("div");
cards.classList.add("data");
card.appendChild(cards); 
function mydata(details) {
  let head=document.createElement("h1");
  head.textContent=details.fname;
  cards.appendChild(head);
  let mob=document.createElement("h4");
  mob.textContent=details.mob;
  cards.appendChild(mob);
  cards.appendChild(document.createElement("hr"));
  }



//   function details(cardsdata) {
//     for (i in cardsdata) {
//     // // create div classname=data
//     var data=document.createElement("div");
//     data.classList.add('data');
//     cards.appendChild(data);
//     // create h2 element for name
//     let name=document.createElement("h2");
//     name.textContent=cardsdata[i].name;
//     data.appendChild(name);
//   }
//
// }



// create image Tag
// var image=document.createElement("img");
// image.src="img/img.png";
// image.alt="Profile Image";
// data.appendChild(image);
//
// // create h2 tag for name
// var x=document.createElement("h2");
// x.textContent="Rajesh";
// data.appendChild(x);
//
// // Creatre h4 tag for org
// var org=document.createElement("h4");
// org.textContent="APSSDC";
// data.appendChild(org);
//
// // creare DOM for rollNo
// var roll=document.createElement("h4");
// roll.textContent="APSSDC";
// data.appendChild(roll);


// // create Function for onclick
// function details() {
//   alert("thank you");
// }
