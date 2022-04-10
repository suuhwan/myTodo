import axios from "axios";

const BASIC_URL = "http://localhost:8080/";

export async function getTodo() {
  const result = await axios.get(`${BASIC_URL}api/list`);
  return result;
}
export async function deleteTodo(id) {
  const result = await axios.delete(`${BASIC_URL}api/list/${id}`);
  return result;
}

export async function uploadTodo(formData) {
  const result = await axios.post(`${BASIC_URL}api/list`, formData);
  return result;
}

export async function updateTodo(id, formData) {
  const result = await axios.put(`${BASIC_URL}api/list/${id}`, formData);
  return result;
}
