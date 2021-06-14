import { Router } from 'express';

import { createTodo, deleteTodo, getTodos, updateTodo} from '../controllers/todo.controller';

const todoRoute = () => {
  const router = Router();

  router.post('/todos', createTodo);

  router.get('/todos', getTodos);

  router.delete('/todos/:id', deleteTodo);

  router.put('/todos/:id', updateTodo)

  return router;
};

export { todoRoute };
