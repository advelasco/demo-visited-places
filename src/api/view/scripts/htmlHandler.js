var htmlHandler = function () {
  
    function loadDetails(placeInfo)
    {
        var html = [];
        html.push(
        "<div id='{0}' class='displayInfo'>".format(placeInfo.id),
        "<p><b>{0}</b></p>".format(placeInfo.name),
        "<p><img alt='image' src='{0}' style='max-width:300px;max-height:300px;'></img></p>".format(placeInfo.image),
        "<div class='action_btn' style='min-width:125px;'>",
        "<button class='action_btn' onclick='loadUpdateInfo()'>Update</button>&nbsp;&nbsp;",
        "<button class='action_btn' onclick='deletePlace()'>Delete</button>",
        "</div>",
        "</div>");
        return html.join("");            
    }
    
    function loadAddPlace(lat, lng)
    {
        var html = [];
        html.push(
        "<div class='newPin'>",
        "<p><b>Log place</b></p>",
        "<p>Name: <input type='text' class='name' name='name'></p>",
        "<p>Image Url: <input type='text' name='image'></p>",
        "<p><button id='btnSave' onclick='saveInfo({0}, {1})'>Save</button></p>".format(lat, lng),
        "</div>");
        return html.join("");
    }

    function loadUpdatePlace(id)
    {
        var html = [];
        html.push(
        "<div id='{0}' class='displayInfo'>".format(id),
        "<p><b>Update place info</b></p>",
        "<p>Name: <input type='text' class='name' name='name'></p>",
        "<p>Image Url: <input type='text' name='image'></p>",
        "<p><button id='btnSave' onclick='updateInfo()'>Update</button></p>",
        "</div>");
        return html.join("");
    }
  
    return {
      loadDetails: loadDetails,
      loadAddPlace: loadAddPlace,
      loadUpdatePlace: loadUpdatePlace
    }
  }