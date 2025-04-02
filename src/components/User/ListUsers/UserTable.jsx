import { Table, Button } from "react-bootstrap";

const UserTable = ({ users, onEdit, onDelete, currentUser }) => (
    <Table striped bordered responsive hover className="text-center">
        <thead >
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {users.map((u) => (
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                        {(currentUser?.id === u.id || currentUser?.role === "admin") && (
                            <>
                                <Button title="Editar usuario" variant="secondary" size="sm" onClick={() => onEdit(u)} className="me-2">
                                    <i className="bi bi-pencil-square"></i>
                                </Button>

                                <Button title="Eliminar usuario" variant="danger" size="sm" onClick={() => onDelete(u.id)}>
                                    <i className="bi bi-trash"></i>
                                </Button>

                            </>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);
export default UserTable;