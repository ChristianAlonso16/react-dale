"use client";
import { Form } from "react-bootstrap";

const UserSearch = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Buscar por nombre o correo"
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default UserSearch;
