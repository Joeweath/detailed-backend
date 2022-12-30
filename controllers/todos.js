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
      const todo = await Todo.findById(req.params.id)
      return res.status(200).json(todo)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  const update = async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.body._id, req.body, {new: true})
      return res.status(200).json(todo)
    } catch (err){
      return res.status(500).json(err)
    }
  }

  const deleteTodo = async (req, res) => {
    try{
      console.log("try")
      const todo =  await Todo.findByIdAndDelete(req.params.id)
      await todo.delete()
      return res.status(200).end()
    } catch (err){
      return res.status(500).json(err)
    }
  }

  


export {
    create, index, show, update, deleteTodo
}