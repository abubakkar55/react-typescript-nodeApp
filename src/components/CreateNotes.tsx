import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = React.useState<string>("");
    const addNode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, text, color } = e.target as typeof e.target & {
            title: { value: string },
            text: { value: string },
            color: { value: string },
        };

        if (title.value === "" || text.value === "" || color.value === "") {
            return setError("All Fields are mandatory!!");
        }

        setError("");
        setNotes([...notes, { title: title.value, text: text.value, color: color.value, id: new Date().toLocaleString(), date: new Date().toLocaleString() }]);
    }

    return (
        <>
            <h2> Add a Node </h2>
            {error &&
                <Alert variant="danger">{error} </Alert>
            }
            <Form onSubmit={(e) => addNode(e)} className="pb-5">
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                        id="title"
                        placeholder="enter your node title"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Choose a color</Form.Label>
                    <Form.Control
                        id="color"
                        type="color" 
                        title="select color" 
                        defaultValue="#dfdfdf"
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        id="text"
                        placeholder="enter your node text" as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit"> Add Now </Button>
            </Form>
        </>
    );
};

export default CreateNotes;
