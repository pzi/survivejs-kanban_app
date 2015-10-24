import 'array.prototype.findindex';
import uuid from 'node-uuid';
import alt from 'utils/alt';
import NoteActions from 'actions/NoteActions';

class NoteStore {
  constructor() {
    this.notes = [];

    this.bindActions(NoteActions);
  }

  create(note) {
    const notes = this.notes;
    note.id = uuid.v4();
    this.setState({
      notes: notes.concat(note)
    });
  }

  update({id, task}) {
    const notes = this.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }

  delete(id) {
    const notes = this.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }

    const leftOfDeleted = notes.slice(0, noteIndex);
    const rightOfDeleted = notes.slice(noteIndex + 1);

    // NOTE: Could also use `Array.prototype.splice()`
    // ie. notes.splice(noteIndex, 1);

    this.setState({
      notes: leftOfDeleted.concat(rightOfDeleted)
    });
  }

  findNote(id) {
    const notes = this.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }

    return noteIndex;
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
