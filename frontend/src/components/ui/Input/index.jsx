import "./Input.css";
export const Input = ({ type, name, value, id, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value} 
    />
  );
};
