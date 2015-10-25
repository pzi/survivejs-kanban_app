import React from 'react';
import Notes from 'components/Notes';
import NoteActions from 'actions/NoteActions';
import NoteStore from 'stores/NoteStore';
import connect from '../decorators/connect';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
export default class App extends React.Component {
  static getStores(props) {
    return [NoteStore];
  }
  static getPropsFromStores(props) {
    return NoteStore.getState();
  }

  addNote() {
    NoteActions.create({task: 'New task'});
  }

  editNote(id, task) {
    NoteActions.update({id, task});
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }

  render() {
    const notes = this.props.notes;

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }
}
