import { useState } from "react";
import { postData } from "../services/postData";

export const usePlace = () => {
  const [form, setForm] = useState({
    placeType: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const error = { ...prev };
        delete error[name];
        return error;
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = {};
    for (let field in form) {
      if (form[field].trim() === "") error[field] = "Required";
    }
    setErrors(error);
    if (Object.keys(error).length > 0) {
      return;
    }
    setLoading(true);
    try {
      const response = await postData("v1/locations", form);
      if (response.error) {
        alert(
          typeof response.error === "string"
            ? response.error
            : Object.values(response.error).join(", "),
        );
        setPlaces([]);
      } else {
        setPlaces(response.data.data || []);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { form, handleChange, handleSubmit, errors, places, loading };
};
