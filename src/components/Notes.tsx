import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ note, handleDelete }) => {
    const { title, date, color, text, id } = note;
    return (
        <div className="mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Subtitle className="text-muted">
                        {date}
                    </Card.Subtitle>
                    <Button className="mt-3" variant="danger" onClick={() => handleDelete(id)}>Delete </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notes;
