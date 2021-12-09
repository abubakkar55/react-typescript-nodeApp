import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toLocaleString(),
      title: "How to Become Frontend developer",
      text: "start with html, then css, then make a project with those things. after learn js to dynamic you site",
      color: "#dfdfdf",
      date: new Date().toLocaleString()
    }
  ]);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;