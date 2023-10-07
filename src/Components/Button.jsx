export const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="bg-lightGreen text-pale text-3xl max-w-sm rounded px-20 py-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
