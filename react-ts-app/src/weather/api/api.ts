import { WeatherState } from "../types";

// idに紐づいたtodoを取得
export const getTodoById = async (id: string): Promise<WeatherState> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`);
  const todo = await res.json();
  return todo;
};
