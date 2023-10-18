import { IconPencil, IconTrash } from "@tabler/icons-react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3">
      <h5 className="flex gap-2 items-center text-lg font-bold">
        {userInfo.first_name} {userInfo.last_name}
      </h5>
      <ul className="grid gap-1">
        <li className=" text-gray-300">
          <span>Email</span>
        </li>
        <li className="font-thin">
          <span>{userInfo.email}</span>
        </li>
        <li className=" text-gray-300">
          <span>Birthday</span>
        </li>
        <li className="font-thin">
          <span>{userInfo.birthday}</span>
        </li>
      </ul>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => deleteUser(userInfo.id)}
          className="bg-red-400 hover:bg-red-500 transition-colors border text-white rounded-md p-1"
        >
          <IconTrash />
        </button>
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="bg-gray-100 hover:bg-gray-200 hover:text-gray-300 hover:border-gray-300 transition-colors text-gray-300 rounded-md border-solid border border-gray-300 p-1"
        >
          <IconPencil />
        </button>
      </div>
    </article>
  );
};

export default User;
