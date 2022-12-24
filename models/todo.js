import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },
    },
    {timestamps: true,}
)

const Todo = mongoose.model('Todo', todoSchema)

export {
    Todo
}