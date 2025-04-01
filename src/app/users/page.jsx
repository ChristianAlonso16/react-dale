"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/Auth/hooks/useAuth";
import { useUsers } from "@/app/users/hooks/useUsers";
import UserModal from "@/components/User/AddUser/UserModal";
import UserCard from "@/components/User/ListUsers/UserCard";
import UserTable from "@/components/User/ListUsers/UserTable";
import { Button } from "react-bootstrap";

const UserPage = () => {
    const { user } = useAuth();
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    if (loading) return <p className="text-center">Cargando usuarios...</p>;

    return (
        <div className="mt-4">
            <Button className="mb-3" onClick={handleNew}>
                Agregar Usuario
            </Button>

            <UserModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleSave}
                initialData={selectedUser}
            />

            {isMobile
                ? users.map((u) => (
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
                        users={users}
                        currentUser={user}
                        onEdit={handleEdit}
                        onDelete={confirmDelete}
                    />
                )}
        </div>
    );
};

export default UserPage;
