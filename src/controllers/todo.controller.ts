import { Request, Response } from 'express';

import TodoModel, {Todo}  from '../models/todo.model';

const createTodo = async (req: Request, res: Response) => {
  const { title, activeStatus, createDate} = req.body;

  if (!title) {
    return res.status(422).json({ message: 'The fields name title is required' });
  }

  const todoInput: Todo = new TodoModel({
    title,
    createDate,
    activeStatus,
  });

  const todoCreated : Todo = await todoInput.save();

  return res.status(201).json(todoCreated);
};

const updateTodo = async(req: Request, res: Response) => {
  const {activeStatus} = req.body;
  const {id} = req.params

  let existingTodo = await TodoModel.findById(id);

  if(existingTodo) {
    existingTodo.activeStatus = activeStatus;
  } else {
    return res.status(400).json({ message: 'Todo Not Found'});
  }
  const updateResponse: any = existingTodo?.save();
  return res.status(200).json(existingTodo);
}

const getTodos = async (req: Request, res: Response) => {
  const {sort, ascending} = req.query;

  let todos: any = []
  if(sort) {
    todos = ascending === "true" ? 
      await TodoModel.find().sort({ createdAt: 'asc'}).exec() :
      await TodoModel.find().sort({ createdAt: 'desc'}).exec();
      return res.status(200).json(todos);
  }
  todos = await TodoModel.find();
  return res.status(200).json(todos);
};

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todoData : any = await TodoModel.deleteOne({_id: id});

  return res.status(200).json({ message: 'Todo deleted successfully.' });
};

export { createTodo, deleteTodo, getTodos, updateTodo };