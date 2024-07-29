import axios from "axios";
import { UserProps } from "../interface/users";

export const getUsers = async (): Promise<UserProps[]> => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};
