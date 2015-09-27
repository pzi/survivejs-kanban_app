import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.edit = this.edit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  finishEdit(event) {
    this.props.onEdit(event.target.value);

    this.setState({
      editing: false
    });
  }

  checkEnter(event) {
    if (event.key === 'Enter') {
      this.finishEdit(event);
    }
  }

  renderEdit() {
    return <input type='text'
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  }

  renderDelete() {
    return <button className='delete' onClick={this.props.onDelete}>x</button>;
  }

  renderTask() {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className='task'>{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }

  render() {
    const editing = this.state.editing;

    return (
      <div>
        {editing ? this.renderEdit() : this.renderTask()}
      </div>
    );
  }
}
