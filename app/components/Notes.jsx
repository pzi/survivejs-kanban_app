import React from 'react';
import Note from 'components/Note';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  renderNote(note) {
    const {onEdit, onDelete} = this.props;
    return (
      <li className='note' key={`note${note.id}`}>
        <Note task={note.task}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
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
