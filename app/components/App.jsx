import 'array.prototype.findindex';
import uuid from 'node-uuid';
import React from 'react';
import Notes from 'components/Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat({
        id: uuid.v4(),
        task: 'New Task'
      })
    });
  }

  editNote(noteId, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNoteIndex(noteId);

    if (noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }

  deleteNote(noteId) {
    const notes = this.state.notes;
    const noteIndex = this.findNoteIndex(noteId);

    if (noteIndex < 0) {
      return;
    }

    const leftOfDeleted = notes.slice(0, noteIndex);
    const rightOfDeleted = notes.slice(noteIndex + 1);

    this.setState({
      notes: leftOfDeleted.concat(rightOfDeleted)
    });
  }

  findNoteIndex(noteId) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === noteId );

    if (noteIndex < 0) {
      console.warn('Failed to find note', notes, noteId);
    }
    return noteIndex;
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }
}
