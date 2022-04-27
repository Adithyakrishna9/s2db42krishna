// const mongoose = require("mongoose")
// const heroineSchema = mongoose.Schema({
//     heroine_name: String,
//     heroine_color: String,
//     heroine_cost: Number
// })
// module.exports = mongoose.model("Heroine", heroineSchema)

const mongoose = require("mongoose")
const heroineSchema = mongoose.Schema({
    heroine_name: { 
        type: String,
        minLength: 5,
        maxLength: 20, 
        required: true,
        trim: true
    },
    heroine_color: { 
        type: String, 
        required: true
    },
    heroine_cost: { 
        type: Number, 
        min:[1000, 'Must be at least 1000, got {VALUE}'], 
        max:1000000
    }
})
module.exports = mongoose.model("Heroine", heroineSchema)