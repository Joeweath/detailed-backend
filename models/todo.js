import mongoose from "mongoose";

const Schema = mongoose.Schema;


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

        owner: { type: Schema.Types.ObjectId, ref: "Profile" }
    },
    {timestamps: true,}
)

const Todo = mongoose.model('Todo', todoSchema)

export {
    Todo
}