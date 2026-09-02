import { useState } from "react";
import axios from "axios";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.fullName) tempErrors.fullName = "Full Name is required";
    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!values.password) {
      tempErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (!values.phone) tempErrors.phone = "Phone number is required";
    if (!values.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError("");
    setIsSuccess(false);

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", values);
      setIsSuccess(true);
      setValues(initialValues);
    } catch (err) {
      setApiError("Failed to submit data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    apiError,
    handleChange,
    handleSubmit
  };
};