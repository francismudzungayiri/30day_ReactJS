const Button = ({ text, onclick }) => {
  return (
    <button
      className="p-4 bg-white rounded-lg font-bold text-[#636CCB]"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
