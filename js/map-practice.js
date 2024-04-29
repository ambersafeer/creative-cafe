
// JavaScript Document

var nbMap = L.map('map-div').setView([40.5, -74.45], 14);

var CartoDB_VoyagerLabelsUnder = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(nbMap);


var museumIcon = L.divIcon({
iconUrl: 'Museum_Icon.png',
iconSize: [40],
//iconAnchor: [22, 94],
//popupAnchor: [-3,-76]
});

// location markers for images

var marker0 = L.marker([40.491443, -74.454511]).addTo(nbMap); //dreams of our children
var marker1 = L.marker([40.496287, -74.444849]).addTo(nbMap); //toward a more just future
var marker2 = L.marker([40.504873, -74.449382]).addTo(nbMap); //convergence point
var marker3 = L.marker([40.500423, -74.447499]).addTo(nbMap); //A World Turned Inside Out
var marker4 = L.marker([40.502163, -74.447264]).addTo(nbMap); //Class of 1957 Stained Glass Window
var marker5 = L.marker([40.500018, -74.445751]).addTo(nbMap); //Walking Man
var marker6 = L.marker([40.504666, -74.449811]).addTo(nbMap); //Zimmerli Art Museum
var marker7 = L.marker([40.499863, -74.445371]).addTo(nbMap); //triptych
var marker8 = L.marker([40.497865, -74.449695]).addTo(nbMap); //edo takeout
var marker9 = L.marker([40.505206, -74.452607]).addTo(nbMap); //alexander

// location markers for places
var marker10 = L.marker([40.495781, -74.444545],{icon: museumIcon}).addTo(nbMap); //alfa art gallery
var marker11 = L.marker([40.492975, -74.44521]).addTo(nbMap); //mason gross galleries
var marker12 = L.marker([40.483156, -74.435365]).addTo(nbMap); //nj media arts center

//location popups html
var popup0 = '<h4>Dreams of Our Children</h4><img src="gallery-resized/social/dreams.jpg">'
var popup1 = '<h4>Toward a More Just Future</h4>'
var popup2 = '<h4>Convergence Point</h4>'
var popup3 = '<h4>A World Turned Inside Out</h4>'
var popup4 = '<h4>Class of 1957 Stained Glass Window</h4>'
var popup5 = '<h4>Zimmerli Art Museum</h4>'
var popup6 = '<h4>Hardenbergh Hall Triptych</h4>'
var popup7 = '<h4>Walking Man</h4>'
var popup8 = '<h4>One Piece Mural at Edo Takeout</h4>'
var popup9 = '<h4>Artists of Alexander</h4>'
var popup10 = '<h4>Alfa Art Gallery</h4>'
var popup11 = '<h4>Mason Gross Galleries</h4>'
var popup12 = '<h4>NJ Media Arts Center</h4>'

var popupOptions = {minWidth:264}

//binding popups
marker0.bindPopup(popup0,popupOptions);
marker1.bindPopup(popup1,popupOptions);
marker2.bindPopup(popup2,popupOptions);
marker3.bindPopup(popup3,popupOptions);
marker4.bindPopup(popup4,popupOptions);
marker5.bindPopup(popup5,popupOptions);
marker6.bindPopup(popup6,popupOptions);
marker7.bindPopup(popup7,popupOptions);
marker8.bindPopup(popup8,popupOptions);
marker9.bindPopup(popup9,popupOptions);
marker10.bindPopup(popup10,popupOptions);
marker11.bindPopup(popup11,popupOptions);
marker12.bindPopup(popup12,popupOptions);

//tool tips
marker0.bindTooltip('Dreams of Our Children');
marker1.bindTooltip('Toward a More Just Future');
marker2.bindTooltip('Convergence Point');
marker3.bindTooltip('A World Turned Inside Out');
marker4.bindTooltip('Class of 1957 Stained Glass Window');
marker5.bindTooltip('Zimmerli Art Museum');
marker6.bindTooltip('Hardenbergh Hall Triptych');
marker7.bindTooltip('Walking Man');
marker8.bindTooltip('One Piece Mural at Edo Takeout');
marker9.bindTooltip('Artists of Alexander');
marker10.bindTooltip('Alfa Art Gallery');
marker11.bindTooltip('Mason Gross Galleries');
marker12.bindTooltip('NJ Media Arts Center');

//icons




//function onMapClick(e) {
//alert('You clicked the map at ' + e.latlng);
//}
//nbMap.on('click', onMapClick);