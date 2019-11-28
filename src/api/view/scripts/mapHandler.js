var mapHandler = function (map, htmlModule) {
  
    _map = map;
    _lastest_pin = null;
    _htmlModule = htmlModule;

    function loadMap(){
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(_map);

        map.on('click', mapModule.addPin);
        map.on('popupopen', setLatestPin);
    }

    function removePin(){
        _map.removeLayer(_lastest_pin);
        alert('Successfully deleted...');
    }

    function setLatestPin(e){
        _lastest_pin = e.popup._source;
    }
  
    function getLatestPin(){
        return _lastest_pin;
    }

    function reloadPin(availablePlace){
        if(availablePlace != "")
        {
            getLatestPin().bindPopup(_htmlModule.loadDetails(availablePlace), { maxWidth: "auto"});
            getLatestPin().openPopup();
            //var pin = new L.marker([availablePlace.latitude, availablePlace.longitude]).addTo(map);
            //pin.bindPopup(htmlModule.loadDetails(availablePlace), { maxWidth: "auto"});
            //pin.openPopup();
        }
    }

    function addPin(e){
        var newPin = new L.marker(e.latlng).addTo(_map);
        newPin.bindPopup(_htmlModule.loadAddPlace(e.latlng.lat, e.latlng.lng), { maxWidth: "auto"});
    }

    function loadAvailablePlaces(availablePlaces)
    {
        if(availablePlaces != "")
        {
            availablePlaces.forEach(function(element){
                var pin = new L.marker([element.latitude, element.longitude]).addTo(_map);
                pin.bindPopup(_htmlModule.loadDetails(element), { maxWidth: "auto"});
            });
        }
    }

    return {
        loadMap: loadMap,
        removePin: removePin,
        setLatestPin: setLatestPin,
        getLatestPin: getLatestPin,
        reloadPin: reloadPin,
        addPin: addPin,
        loadAvailablePlaces: loadAvailablePlaces
    }
  }