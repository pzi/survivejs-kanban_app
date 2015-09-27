import React from 'react';
import Note from 'components/Note';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  renderNote(note) {
    return (
      <li className='note' key={`note${note.id}`}>
        <Note task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)} />
      </li>
    );
  }

  render() {
    const notes = this.props.items;

    return (
      <ul className='notes'>
        {notes.map(this.renderNote)}
      </ul>
    );
  }
}
