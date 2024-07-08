// const axios = require("axios");
import axios from "axios";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface User {
  name: string;
  username: string;
}

const getTodo = async (todoId: number) => {
  try {
    // Call the first API to get the todo information
    const todoResponse = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todoData = todoResponse.data;

    // Check if todoData exists
    if (!todoData) {
      return "INVALID TODO ID";
    }

    // Call the second API to get the user information
    const userResponse = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${todoData.userId}`);
    const userData = userResponse.data;

    // Construct the result object with owner's full name
    const result = {
      owner: `${userData.name}`,
      title: todoData.title,
      completed: todoData.completed
    };

    return result;
  } catch (error) {
    // Handle errors if any of the API calls fail
    return "INVALID TODO ID";
  }
};



//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
