import { Todo } from "../models/todo.js";

const create = async (req, res) => {
    try{
      const todo =  new Todo(req.body)
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
      Todo.findByIdAndRemove(req.params.id, req.body)
          .then((data) =>
              res.json({ message: "todo deleted successfully", data }))
    }catch {((err) =>
         res.status(404).json({ message: "book not found", error: err.message })
        );
    }};

  

  


export {
    create, index, show, update, deleteTodo as delete
}