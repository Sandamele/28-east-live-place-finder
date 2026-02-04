import "./FormGroup.css";
export const FormGroup = ({ children, label, error, htmlFor }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && <span>{error}</span>}
    </div>
  );
};
