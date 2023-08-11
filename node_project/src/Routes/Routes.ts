import { Router } from "express";
import { Request } from 'express';
import { Todo } from "../Models/Todo";
let todos: Todo[] = [];
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});
router.post("/todo", (req :Request, res) => {
  const newTodo :Todo = {
    id : new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "success" });
});
router.put("/todo/edit/:todoid",(req,res)=>{
    const todoId = req.params.todoid;
    const todomsg = req.body.text;
    const findTodoIndex=todos.findIndex((item)=>{return item.id===todoId});
    if(findTodoIndex){
        todos[findTodoIndex]={id:todos[findTodoIndex].id , text: todomsg}
        return res.status(201).json({message:"updated successfully"});
    }
    res.status(404).json({message:"updation failed"});
});
router.delete("todo/delete/:todoid",(req,res)=>{
    const todoId = req.params.todoid;
    // const findTodoIndex=todos.findIndex((item)=>{return item.id===todoId});
    const filterTodos = todos.filter((item)=>{return item.id!=todoId});
    todos=filterTodos;
    res.status(200).json({message:'todo deleted',todo:todos});
});

export default router;
