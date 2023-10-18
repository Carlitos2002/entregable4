const Header = ({ handleOpenCard }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-3xl font-bold">Users</h1>
      <button
        onClick={handleOpenCard}
        className="bg-blue-500 text-white p-2 px-4 font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        Agree user
      </button>
    </header>
  );
};

export default Header;
