import React from 'react';
import Note from 'components/Note';

export default class Notes extends React.Component {
  renderNote(note) {
    return (
      <li className='note' key={`note${note.id}`}>
        <Note task={note.task} />
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
