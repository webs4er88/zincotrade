var styleArray = [  {
    elementType: 'labels',
    stylers: [{
        visibility: 'on'
    }]
},
    {
        elementType: 'geometry',
        stylers: [{
            color: '#ffffff'
        }]
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#dea2ff'
        }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
            color: '#ffffff'
        }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
            color: '#eeeeee'
        }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#ffffff'
        }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
            color: '#eeeeee'
        }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#fcf6ff'
        }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
            color: '#53afee'
        }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#ed90ff'
        }]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            { "visibility": "off" }
        ]
    }
]




var mapId = document.getElementById('data-maps');
var dataLatitude = mapId.getAttribute('data-latitude');
var dataLongitude = mapId.getAttribute('data-longitude');



var mapOptions = {
  center: new google.maps.LatLng(dataLatitude, dataLongitude),
  zoom: 5,
  styles: styleArray,
  scrollwheel: false,
  backgroundColor: '#e5ecff',
  mapTypeControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(mapId,mapOptions);



var myLatlng = new google.maps.LatLng(dataLatitude, dataLongitude);


var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  icon: {
    url: "assets/images/map-marker.png"
  }
});