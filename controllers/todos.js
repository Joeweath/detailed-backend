import { Todo } from "../models/todo.js";

const create = async (req, res) => {
    console.log("is it even trying?")
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
    Todo.findById(req.params.id)
    try{(todo => 
      res.json(todo))
    } catch (err) {
      return res.status(500).json(err)
    }
  }


export {
    create, index, show
}