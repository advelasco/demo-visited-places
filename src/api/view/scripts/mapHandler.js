var mapHandler = function (map, htmlModule) {
  
    _map = map;
    _lastest_pin = null;
    _htmlModule = htmlModule;

    function removePin(){
        _map.removeLayer(_lastest_pin);
        alert('Successfully deleted...');
    }

    function setLatestPin(latest){
        _lastest_pin = latest;
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
        removePin: removePin,
        setLatestPin: setLatestPin,
        getLatestPin: getLatestPin,
        reloadPin: reloadPin,
        addPin: addPin,
        loadAvailablePlaces: loadAvailablePlaces
    }
  }