import { useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";

const UserTable = ({ users, onEdit, onDelete, currentUser }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    //En base al total de usuarios y la cantidad de usuarios a mostrar se definen el numero de paginas
    const totalPages = Math.ceil(users.length / itemsPerPage);

    //Primer usuario de la lista para la pagina actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    //Ultino usuario de la lista para la pagina actual
    const endIndex = startIndex + itemsPerPage;
    //Rango de usuarios a mostrar por pagina
    const currentUsers = users.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <Table striped bordered responsive hover className="text-center">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((u) => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                {(currentUser?.id === u.id || currentUser?.role === "admin") && (
                                    <>
                                        <Button
                                            title="Editar usuario"
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => onEdit(u)}
                                            className="me-2"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button
                                            title="Eliminar usuario"
                                            variant="danger"
                                            size="sm"
                                            onClick={() => onDelete(u.id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination className="justify-content-center">{paginationItems}</Pagination>
        </>
    );
};

export default UserTable;
