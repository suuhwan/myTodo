import { useState } from "react";
import { uploadTodo } from "../api";

function TodoFrom() {
  const initialValue = {
    description: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  const [passwordShown, setPasswordShown] = useState(false);
  const handlePasswordShown = () => {
    setPasswordShown(!setPasswordShown);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("password", values.password);
    await uploadTodo(values);
  };
  console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="description"></input>
      <input
        onChange={handleChange}
        name="password"
        type={passwordShown ? "text" : "password"}
      ></input>
      <button onClick={handlePasswordShown}>아이콘</button>
      <button type="submit">확인</button>
    </form>
  );
}

export default TodoFrom;
