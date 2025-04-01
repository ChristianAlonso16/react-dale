import { Table, Button } from "react-bootstrap";

const UserTable = ({ users, onEdit, onDelete, currentUser }) => (
    <Table striped bordered hover>
        <thead>
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
                        {/* {currentUser?.email === u.email && ( */}
                        <>
                            <Button variant="primary" onClick={() => onEdit(u)}>Editar</Button>{" "}
                            <Button variant="danger" onClick={() => onDelete(u.id)}>Eliminar</Button>
                        </>
                        {/* )} */}
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);
export default UserTable;