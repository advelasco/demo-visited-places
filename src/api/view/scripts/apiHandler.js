var apiHandler = function () {
    var request = new XMLHttpRequest();
    var url_base = window.location.href + "api/v1/places";

    function getPlaceById (data, callback) {
      request.open("GET", url_base + '/' + data)
      request.send();

      request.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
              callback(JSON.parse(request.responseText));
          }
          else{}
      }
    }
    
    function getAvailablePlaces(callback) {
        request.open("GET", url_base)
        request.send();

        request.onreadystatechange = (e) => {
          if (request.readyState == 4 && request.status == 200) {
            callback(JSON.parse(request.responseText));
          }
          else{}
        }
    }

    function postAvailablePlaces(data, callback) {
      request.open("POST", url_base)
      request.setRequestHeader("Content-Type", "application/json");

      request.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
              callback(JSON.parse(request.responseText));
          }
          else{}
      }

      request.send(JSON.stringify(data));
    }

    function deletePlace(data, callback) {
      request.open("DELETE", url_base + '/' + data)
      request.send();

      request.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 204) {
              callback();
          }
          else{}
      }
    }
    
    function putAvailablePlaces(id, data, callback) {
      request.open("PUT", url_base + '/' + id)
      request.setRequestHeader("Content-Type", "application/json");

      request.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 204) {
            getPlaceById(id, callback);
          }
          else{}
      }

      request.send(JSON.stringify(data));
    }

    function ok() {
      console.log('Ok!');
    }
  
    return {
      getPlaceById: getPlaceById,
      postAvailablePlaces: postAvailablePlaces,
      getAvailablePlaces: getAvailablePlaces,
      deletePlace: deletePlace,
      putAvailablePlaces: putAvailablePlaces,
      ok: ok
    }
  }