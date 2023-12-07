
    const token = "pk.eyJ1IjoiZGFuaWVsbGFjaGUiLCJhIjoiY2xva2lpaXpoMXljbTJscncwNXRhYXk1NSJ9.S64dxryGawtMcvHxdntISA"

    navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {enableHighAccuracy: true})

function succesLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
setupMap([44.43, 26.10])
}

function setupMap(center){
    mapboxgl.accessToken = token;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 14

    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: token,
      });
      
      
      
      map.addControl(directions, 'top-left');
}

 
