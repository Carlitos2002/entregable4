import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constans/userList";
import Modal from "./components/UserCard";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";

function App() {
  const [isShowCard, setIsShowCard] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUserToEdit, setIdUserToEdit] = useState(null);

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenCard = () => {
    setIsShowCard(true);
  };

  const handleCloseCard = () => {
    setIsShowCard(false);
    reset(EMPTY_FORM_VALUES);
    setIdUserToEdit(null);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleCloseCard();
        reset(EMPTY_FORM_VALUES);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleCloseCard();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (userToUpdate) => {
    handleOpenCard();
    reset(userToUpdate);
    setIdUserToEdit(userToUpdate.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="min-h-screen">
      <Header handleOpenCard={handleOpenCard} />
      <Modal
        isShowCard={isShowCard}
        handleCloseCard={handleCloseCard}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idUserToEdit={idUserToEdit}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
