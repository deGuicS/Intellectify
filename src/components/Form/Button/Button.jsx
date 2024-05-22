import "./Button.css"; // Estilo do botão

const Button = ({ onClick, children, borderRadius }) => {
  return (
    <button className={`button ${borderRadius ? "border-radius" : ""}`} onClick={onClick}>      {children}
    </button>
  );
};

export default Button;