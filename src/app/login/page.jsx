"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Alert, Card, InputGroup, Row, Col } from "react-bootstrap";
import usersData from "@/data/users-login.json";
import { useAuth } from "@/components/Auth/hooks/useAuth";
import "bootstrap-icons/font/bootstrap-icons.css";

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
        <div
            className="vh-100 d-flex align-items-center"
            style={{
                background: "linear-gradient(rgb(237, 232, 243),rgb(196, 215, 248))"
            }}
        >
            <div className="container">
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={5} xl={4}>
                        <Card className="shadow-lg rounded">
                            <Card.Body className="p-5">
                                <div className="text-center mb-4">
                                    <h4 className="mb-3">Iniciar sesion</h4>
                                </div>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <i className="bi bi-envelope-fill"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="correo@ejemplo.com"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <i className="bi bi-lock-fill"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                placeholder="••••••••"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Button type="submit" className="w-100" variant="primary" size="lg">
                                        Ingresar
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
