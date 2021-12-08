import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const renderNotes = () => {
        return notes.map(note => <Notes key={note.id} note={note} handleDelete={handleDelete} />)
    }

    return (
        <div>
            {renderNotes()}
        </div>
    );
};

export default NoteList;
