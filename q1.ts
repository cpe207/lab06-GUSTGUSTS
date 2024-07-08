// const axios = require("axios");
import axios from "axios";

interface User {
  id: number;
  name: string;
}

/* assign interface/type to the function definition properly */
const getUser = async (userId: number): Promise<string> => {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    return `${user.name}`;
  } catch (error) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
