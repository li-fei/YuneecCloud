
function initMap() {
  const myLatLng = { lat: 31.187180, lng:120.935157 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "yuneec",
  });

//   const image ="../image/drone.png";
//   const beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     icon: image,
//   });
}

function takeOffClick(){  
    alert("起飞......");  
} 

function landClick(){  
    alert("降落......");  
} 

// window.onload = function(){
//   alert("onload......");  
// }

window.addEventListener("load",()=>{
  // alert("load......");  
});


