interface buttonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: buttonProps) => {
  return (
    <div>
      <button className={`btn btn-${color}`} onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
