"use client";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getEmailError,getNameError } from "@/utils/Validations";

const UserForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  
    if (name === "name") setNameError(getNameError(value));
    if (name === "email") setEmailError(getEmailError(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || nameError || emailError) return;

    onSubmit(form);
    setForm({ name: "", email: "" });
  };

  const isDisabled =
    !form.name.trim() ||
    !form.email.trim() ||
    !!nameError ||
    !!emailError;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          isInvalid={!!nameError}
        />
        <Form.Control.Feedback type="invalid">
          {nameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          isInvalid={!!emailError}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button disabled={isDisabled} type="submit" variant="primary">
        {initialData ? "Editar" : "Guardar"}
      </Button>
    </Form>
  );
};

export default UserForm;
