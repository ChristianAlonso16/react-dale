"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/hooks/useAuth";
import { useUsers } from "@/app/users/hooks/useUsers";
import UserModal from "@/components/user/addUser/UserModal";
import UserCard from "@/components/user/listUsers/UserCard";
import UserTable from "@/components/user/listUsers/UserTable";
import UserSearch from "@/components/user/searchUser/SearchUser";
import { Button, Row, Col } from "react-bootstrap";

const UserPage = () => {
    const [search, setSearch] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const { user, logout } = useAuth();
    const {
        users,
        loading,
        showModal,
        selectedUser,
        handleNew,
        handleEdit,
        handleSave,
        confirmDelete,
        setShowModal,
    } = useUsers();


    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const handleLogout = () => {
        logout()
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
    if (loading) return <p className="text-center">Cargando usuarios...</p>;

    return (
        <div className="mt-4 container shadow p-4">
            <Row className="align-items-center mb-4">
                <Col xs={12} md={8}>
                    <h5 className="mb-1">Hola, {user?.name || "Usuario"}</h5>
                </Col>
                <Col xs={12} md={4} className="text-end mt-3">
                    <Button variant="outline-danger" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </Col>
            </Row>


            <Row className="align-items-center mb-3">
                <Col xs={12} md={4}>
                    <UserSearch value={search} onChange={handleSearchChange} />
                </Col>
                <Col xs={12} md={8} className="text-end mb-3">
                    <Button title="Agregar usuario" size="sm" onClick={handleNew}>
                        <i className="bi bi-plus-lg"></i>
                    </Button>
                </Col>
            </Row>

            <UserModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleSave}
                initialData={selectedUser}
            />

            {isMobile
                ? filteredUsers.map((u) => (
                    <UserCard
                        key={u.id}
                        user={u}
                        currentUser={user}
                        onEdit={handleEdit}
                        onDelete={confirmDelete}
                    />
                ))
                : (
                    <UserTable
                        users={filteredUsers}
                        currentUser={user}
                        onEdit={handleEdit}
                        onDelete={confirmDelete}
                    />
                )}
        </div>
    );
};

export default UserPage;
