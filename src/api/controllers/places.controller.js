const schema =  [
   {
     id: "8AAF63CA-EDD3-4D79-904C-E67918365D0E",
     latitude: 38.487,
     longitude: -75.641,
     name: "default",
     image: "http://www.gravatar.com/avatar/?d=identicon"
   }
];

exports.insert = (req, res) => {
   var uuid = require('uuid').v1();

   const new_local = {
      id: uuid,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      name: req.body.name,
      image: req.body.image
    }

    schema.push(new_local);

    return res.status(201).send(new_local);
};

exports.list = (req, res) => {
   return res.status(200).send(schema);
};

exports.getById = (req, res) => {
   schema.map((content) => {
      if (content.id === req.params.id) {
         return res.status(200).send(content);
      }
   });
};

exports.removeById = (req, res) => {
   schema.map((content, index) => {
      if (content.id === req.params.id) {
         removed = schema.splice(index, 1);
         return res.status(204).send();
      }
   });
};

exports.updateById = (req, res) => {
   schema.map((content) => {
      if (content.id === req.params.id) {
         content.name = req.body.name;
         content.image = req.body.image;
         return res.status(204).send();
      }
   });
};