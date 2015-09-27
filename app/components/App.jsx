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
    console.log('note edited:', noteId, task);
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} />
      </div>
    );
  }
}
