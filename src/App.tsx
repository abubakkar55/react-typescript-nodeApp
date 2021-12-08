import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toLocaleString(),
      title: "How to Become Frontend developer",
      text: "start with html, then css, then make a project with those things. after learn js to dynamic you site",
      color: "#000",
      date: new Date().toLocaleString()
    }
  ]);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <NotesList notes={notes} setNotes={setNotes} />
        </Row>
      </Container>
    </div>
  );
}

export default App;