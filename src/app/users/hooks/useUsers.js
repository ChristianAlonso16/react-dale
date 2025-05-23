import { useEffect, useState } from "react";
import alerts from "@/utils/Alerts";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from "@/app/users/services/userService";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error("Algo sucedio al obtener usuarios", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (userData) => {
        try {
            const newUser = await createUser(userData);
            alerts.showMessage("Usuario creado correctamente", "success");
            setUsers([...users, newUser]);
        } catch (error) {
            console.error("Algo sucedio al crear usuario", error);
        }
    };

    const handleUpdate = async (id, userData) => {
        try {
            const updatedUser = await updateUser(id, userData);
            alerts.showMessage("Usuario actualizado correctamente", "success");
            setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
        } catch (error) {
            console.error("Algo sucedio al actualizar usuario", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            alerts.showMessage("Usuario eliminado correctamente", "success");
            setUsers(users.filter((u) => u.id !== id));
        } catch (error) {
            console.error("Algo sucedio al eliminar usuario:", error);
        }
    };
    //Funcion para mostrar el modal en modo creacion de usuario
    const handleNew = () => {
        setSelectedUser(null);
        setShowModal(true);
    };
    //Funcion para mostrar el modal en modo edicion de usuario, cargando el usuario selecciondo
    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };
    //Funcion generica para guardar o editar el usuario, si existe un usuario seleccionado se ejecuta la edicion, de lo contrario se guarda el nuevo registro
    const handleSave = (data) => {
        if (selectedUser) {
            handleUpdate(selectedUser.id, data);
        } else {
            handleCreate(data);
        }
        setShowModal(false);
    };


    const confirmDelete = async (id) => {
        const confirmed = await alerts.confirmSome({
            title: "¿Eliminar usuario?",
            text: "Esta acción eliminará permanentemente al usuario."
        });
        // confirmed es un valor bool que retorna la alerta de confirmacion, si el usuario acepta la alerta, se ejecuta la funcion de eliminar
        if (confirmed) {
            await handleDelete(id);
        }
    };

    return {
        users,
        loading,
        showModal,
        selectedUser,
        handleNew,
        handleEdit,
        handleSave,
        confirmDelete,
        setShowModal,
    };
};
