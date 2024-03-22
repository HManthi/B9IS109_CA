import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {type: String},
    author: {type: String},
    imageUrl: {type: String}
})

const bookModel = mongoose.model('Book', bookSchema)
export {bookModel as Book}