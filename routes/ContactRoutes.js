const express = require("express");
const router = express.Router();
const {getContacts,
    createContact,
    deleteContact,
    updateContact,
    getContact
}= require("../controllers/ContactControllers")
const validateToken=require("../midddleware/validateTokenHandler");
router.use(validateToken);

router.route("/").get(getContacts).post(createContact);



router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports=router;