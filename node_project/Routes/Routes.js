"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "success" });
});
router.put("/todo/:todoid", (req, res) => {
    const todoId = req.params.todoid;
    const todomsg = req.body.text;
    const findTodoIndex = todos.findIndex((item) => { return item.id === todoId; });
    if (findTodoIndex) {
        todos[findTodoIndex] = { id: todos[findTodoIndex].id, text: todomsg };
        return res.status(201).json({ message: "updated successfully" });
    }
    res.status(500).json({ message: "updation failed" });
});
router.delete("todo/delete/:todoid", (req, res) => {
    const todoId = req.params.todoid;
    // const findTodoIndex=todos.findIndex((item)=>{return item.id===todoId});
    const filterTodos = todos.filter((item) => { return item.id != todoId; });
    todos = filterTodos;
    res.status(200).json({ message: 'todo deleted', todo: todos });
});
exports.default = router;
