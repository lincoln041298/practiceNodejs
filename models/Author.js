const mongoose = require('mongoose')
const schema = mongoose.Schema

const AuthorSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        }

    }
)

module.exports = mongoose.model('authors',  AuthorSchema)