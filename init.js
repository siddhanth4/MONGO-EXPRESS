const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then( () => {console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [{
    from: "Sid",
    to: "John",
    msg: "Hey John! How are you?",
    created_at: new Date()
    },
    {
        from: "Arya",
        to: "Natasha",
        msg: "Dance is good",
        created_at: new Date()
    },
    {
        from: "Shah",
        to: "Adi",
        msg: "Hack the Box",
        created_at: new Date()
    },
    {
        from: "Siddhanth",
        to: "Sir",
        msg: "Increase my marks",
        created_at: new Date()
    },

];
Chat.insertMany(allChats);
