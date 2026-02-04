import "./Dropdown.css";

export const Dropdown = ({
  items = [],
  selectedValue,
  id,
  name,
  onChange,
  placeholder = "Select option",
}) => {
  return (
    <select
      id={id}
      name={name}
      value={selectedValue}
      onChange={onChange}
      aria-label={name}
    >
      <option value="">{placeholder}</option>

      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
