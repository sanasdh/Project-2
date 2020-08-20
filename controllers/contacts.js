let Contacts = require("../models/contacts");
const contacts = require("../models/contacts");

function index(req, res) {
  res.render("contact/index", {
    user: req.user,
  });
}

function create(req, res) {
  //   Contacts.find(req.body, function (err, contacts) {
  Contacts.create(
    { name: req.body.name, email: req.body.email, content: req.body.content },
    function (err) {
      console.log("before");
      console.log("Contactsreq.params.id", Contacts(req.params.id));
      console.log("Contactsreq.params", Contacts(req.params));
      console.log("req.params.id", req.params.id);
      console.log("req.params", req.params);
      console.log("req.body", req.body);
      console.log("Contacts", Contacts(req.body));
      console.log("contacts", contacts);
      // contacts.push(req.body);
      console.log("after");
      console.log("Contactsreq.params.id", Contacts(req.params.id));
      console.log("Contactsreq.params", Contacts(req.params));
      console.log("req.params.id", req.params.id);
      console.log("req.params", req.params);
      console.log("req.body", req.body);
      console.log("Contacts", Contacts(req.body));
      console.log("contacts", contacts);

      res.render("contact/create", {
        user: req.user,
      });
    }
  );
}

module.exports = {
  create: create,
  index: index,
};
