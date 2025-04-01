"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Alert, Card } from "react-bootstrap";
import usersData from "@/data/users-login.json";
import { useAuth } from "@/components/Auth/hooks/useAuth";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = usersData.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (user) {
            login(user);
            router.push("/users");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4">
                <h3 className="mb-4 text-center">Iniciar sesión</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" className="w-100" variant="primary">
                        Ingresar
                    </Button>
                </Form>
            </Card>
        </div>
    );
}
