import { Card, Button } from "react-bootstrap";

const UserCard = ({ user, onEdit, onDelete, currentUser }) => (
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            {(currentUser?.email === user.email || currentUser?.role === "admin") && (
                <>
                    <Button variant="secondary" size="sm" onClick={() => onEdit(user)} className="me-2">
                        <i className="bi bi-pencil-square"></i>
                    </Button>

                    <Button variant="danger" size="sm" onClick={() => onDelete(user.id)}>
                        <i className="bi bi-trash"></i>
                    </Button>

                </>
            )}
        </Card.Body>
    </Card>
);
export default UserCard;