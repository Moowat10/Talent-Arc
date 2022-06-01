const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directMessage = Schema({
  usersID: {
    type: Array,
    required: true,
  },
  messages: Array,
});

const directMessages = mongoose.model("directMessages", directMessage);

export default directMessages;
