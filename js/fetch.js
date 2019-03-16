// fetch("data.json").then(function(response){
//   return response.json();
//
// }).then(function(e){
//   // console.log(e);
//   var data=JSON.parse(e);
//   console.log(data);
// });
fetch("data.json").then(function(res) {
  res.json().then(function(json) {
      console.log(json.rajesh);
    });
  });

fetch("data.json").then(res=>res.json()).then(json=>{
  console.log(json.rajesh);
});
