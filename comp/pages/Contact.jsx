import React from "react";
import { useForm } from "../hooks/useForm";

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    message: ""
  };

  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    apiError,
    handleChange,
    handleSubmit
  } = useForm(initialValues);

  return (
    <div className="container my-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Contact / Register</h2>

      {isSuccess && (
        <div className="alert alert-success">
          Form submitted successfully via Axios!
        </div>
      )}

      {apiError && <div className="alert alert-danger">{apiError}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message or Address</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            name="message"
            rows="3"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;