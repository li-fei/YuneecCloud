function initMap() {
  const myLatLng = {
    lat: 31.187180,
    lng: 120.935157
  };
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

function takeOffClick() {
  alert("起飞......");
}

function landClick() {
  alert("降落......");
}

// window.onload = function(){
//   alert("onload......");  
// }

function gmapClick() {
  initMap();
}
function amapClick() {
  initAmap();
}

window.addEventListener("load", () => {
  // alert("load......");  
  initMap();
  // initAmap();
});

function initAmap() {
  var amap = new AMap.Map('map', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 10, //初始化地图层级
    center: [120.935157, 31.187180], //初始化地图中心点
  });
  var marker = new AMap.Marker({
    position: new AMap.LngLat(120.935157, 31.187180),
    title: 'yuneec'
  });
  amap.add(marker);

  amap.on('click', function (e) {
    var marker = new AMap.Marker({
      position: new AMap.LngLat(e.lnglat.getLng(), e.lnglat.getLat()),
      title: 'yuneec'
    });
    amap.add(marker);
  });
}