import Todo from "../models/todos.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllTodos = async (req, res) => {
  try {
    const userId = req.user._id.toString();

    const todos = await Todo.find({ createdBy: userId });

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ApiError(500, "Some error occured in ger all todo controller"));
  }
};

const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const creater = req.user._id.toString();
    console.log(creater);

    if (!todo) {
      res
        .status(400)
        .json(new ApiError(400, "All field are required to create a todo"));
    }
    if (!creater) {
      res.status(400).json(new ApiError(400, "No creater defined"));
    }

    const newTodo = new Todo({
      todo,
      completed: false,
      createdBy: creater,
    });

    await newTodo.save();

    res
      .status(200)
      .json(new ApiResponse(200, newTodo, "Todo created sucessfully"));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ApiError(500, "Some error occured in createTodo controller"));
  }
};

export { getAllTodos, createTodo };
