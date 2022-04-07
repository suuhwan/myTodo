import axios from "axios";

const BASIC_URL = "http://localhost:8080/";

export async function getTodo() {
  const result = await axios.get(`${BASIC_URL}api/list`);
  if (result.statusText !== "OK") {
    throw new Error("Fail to load list");
  }
  return result;
}
// 테스트필요
export async function deleteTodo(id) {
  const result = await axios.delete(`${BASIC_URL}api/list/${id}`);
  if (!result.ok) {
    throw new Error("Fail to delete list");
  }
  return result;
}

export async function uploadTodo(formData) {
  const result = await axios.post(`${BASIC_URL}api/list`, formData);
  if (!result.ok) {
    throw new Error("Fail to upload list");
  }
  return result;
}
