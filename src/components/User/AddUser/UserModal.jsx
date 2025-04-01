"use client";
import { Modal } from "react-bootstrap";
import UserForm from "./UserForm";

const UserModal = ({ show, onClose, onSubmit, initialData }) => {
    const isEdit = !!initialData;

    return (
        <Modal show={show} onHide={onClose} backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>{isEdit ? "Editar Usuario" : "Nuevo Usuario"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserForm
                    initialData={initialData}
                    onSubmit={(data) => {
                        onSubmit(data);
                        onClose();
                    }}
                />
            </Modal.Body>
        </Modal>
    );
};

export default UserModal;
