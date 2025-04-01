"use client";
import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const UserForm = ({ initialData = {}, onSubmit }) => {
    const [form, setForm] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        if (initialData) {
            setForm({
                name: initialData.name || "",
                email: initialData.email || "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        setError("");
        onSubmit(form);
        setForm({ name: "", email: "" });
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button type="submit" variant="primary">
                {initialData ? "Editar" : "Guardar"}
            </Button>
        </Form>
    );
};

export default UserForm;
