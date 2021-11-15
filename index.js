let map, infoWindow;

function initMap() {
  infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: position.coords.latitude, lng: position.coords.longitude },
            zoom: 15,
            mapId: '1060af6985c74d8c',
            disableDefaultUI: true,
          }); 
          const marker = new google.maps.Marker({
            position: { lat: position.coords.latitude, lng: position.coords.longitude },
            map: map,
          });
        }
      );
    }
}


const currentTheme = localStorage.getItem('theme');
window.onload=function(){
  const toggleSwitch = document.querySelector('.theme-switch');
  toggleSwitch.addEventListener('change', switchTheme, false);
}


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}


