import { Card, Button } from "react-bootstrap";

const UserCard = ({ user, onEdit, onDelete, currentUser }) => (
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            {/* {currentUser?.email === user.email && ( */}
            <>
                <Button variant="primary" onClick={() => onEdit(user)}>Editar</Button>{" "}
                <Button variant="danger" onClick={() => onDelete(user.id)}>Eliminar</Button>
            </>
            {/* )} */}
        </Card.Body>
    </Card>
);
export default UserCard;