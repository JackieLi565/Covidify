export const Button = ({ onClick, children, htmlType }) => {
  return (
    <button
      type={htmlType}
      className="bg-lightGreen text-pale text-3xl max-w-sm rounded px-20 py-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
