import React from 'react';
import Notes from 'components/Notes';
import NoteActions from 'actions/NoteActions';
import NoteStore from 'stores/NoteStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    this.setState(state);
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
    const notes = this.state.notes;

    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }
}
