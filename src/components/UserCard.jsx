import { IconSquareRoundedXFilled } from "@tabler/icons-react";

const Modal = ({
  isShowCard,
  handleCloseCard,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${
        isShowCard ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idUserToEdit ? "Update user" : "Create user"}
        </h2>

        <button
          onClick={handleCloseCard}
          type="button"
          className=" text-red-500 hover:text-red-600 transition-colors absolute top-2 right-2 "
        >
          <IconSquareRoundedXFilled />
        </button>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="first_name">
            First name:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="last_name">
            Last name:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="email">
            Email:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="email"
            type="email"
            {...register("email")}
          />
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="password">
            Password:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="password"
            type="text"
            {...register("password")}
          />
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="birthday">
            Birthday:
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold rounded-sm hover:bg-blue-600 transition-colors"
          type="submit"
        >
          {idUserToEdit ? "Save changes" : "Create"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
