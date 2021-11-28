
const myMap = L.map('mainMap').setView([0, 0], 1);




const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);



const successCallBack = (position) => {
    console.log(position);
}

const errorCallBack = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack, {
    enableHighAccuracy: true,
    timeout: 5000
});





