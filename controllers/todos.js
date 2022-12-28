import { Todo } from "../models/todo.js";

const create = async (req, res) => {
    try{
      const todo = await new Todo(req.body)
      await todo.save()
      return res.status(201).json(todo)
    } catch(err){
      return res.status(500).json(err)
    }
  }
  
  const index = async (req, res) => {
    try {
      const todos = await Todo.find({})
      .sort({ createdAt: 'desc'})
      return res.status(200).json(todos)
    } catch (err) {
      return res.status(500).json(err)
    }
  }


  const show = async (req, res) => {
    try {
      console.log(req.params.id)
      const todo = await Todo.findById(req.params.id)
      return res.status(200).json(todo)
    } catch (err) {
      console.log("error tripped here")
      return res.status(500).json(err)
    }
  }


export {
    create, index, show
}