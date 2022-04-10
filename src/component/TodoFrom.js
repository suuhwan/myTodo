import { useEffect, useState } from "react";
import { uploadTodo, updateTodo } from "../api";

const initialValue = {
  description: "",
  password: "",
};

function TodoFrom({ onSubmitSuccess, onEdit, onEditValues }) {
  const [values, setValues] = useState(initialValue);
  const [passwordShown, setPasswordShown] = useState(false);

  const handlePasswordShown = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("password", values.password);
    const response = await uploadTodo(values);
    const newTodo = response.data;
    onSubmitSuccess(newTodo);
    setValues(initialValue);
  };

  let editingPassword = null;

  if (onEditValues) {
    editingPassword = onEditValues.password;
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (values.password === editingPassword) {
      const formData = new FormData();
      formData.append("description", values.description);
      formData.append("password", values.password);
      formData.append("createdAt", values.createdAt);
      const id = onEditValues.id;
      const response = await updateTodo(id, values);
      const newTodo = response.data;
      onEdit(null);
      setValues(initialValue);
    } else {
      alert("비밀번호를 확인해 주시기 바랍니다.");
    }
  };

  const handleValueEdit = () => {
    setValues((prev) => ({ ...prev, ...onEditValues }));
  };

  const handleCancel = () => {
    onEdit(null);
    setValues(initialValue);
  };

  useEffect(() => {
    if (!onEditValues) return;
    handleValueEdit();
  }, []);

  return (
    <form
      className="TodoFrom"
      onSubmit={onEditValues ? handleEditSubmit : handleUploadSubmit}
    >
      <span>Todo</span>
      <input
        value={values.description}
        onChange={handleChange}
        name="description"
      ></input>
      <br />
      <span>password</span>
      <input
        onChange={handleChange}
        name="password"
        type={passwordShown ? "text" : "password"}
      ></input>
      <button onClick={handlePasswordShown}>비밀번호 보기</button>
      <button type="submit">확인</button>
      <button onClick={handleCancel}>취소</button>
    </form>
  );
}

export default TodoFrom;
