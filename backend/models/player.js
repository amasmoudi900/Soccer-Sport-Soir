const mongoose = require('mongoose');
// define model attributes
const playerSchema = mongoose.Schema({
    nameP:String,
    posteP:String
});
// DB Model name 
const player = mongoose.model('Player', playerSchema);
// export match variable
module.exports = player;