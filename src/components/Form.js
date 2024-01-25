import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "React"
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  handleCommentChange = event =>{
    this.setState({
        comment: event.target.value
    })
  }
  handleTopicChange = event =>{
    this.setState({
        topic: event.target.value
    })
  }
  handleSubmit = event =>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault() // to restrict form to not reload after data submitted.
  }

  render() {
    const {username, comment, topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
            <lable>Comment: </lable>
            <textarea value={comment} onChange={this.handleCommentChange}/>
        </div>
        <div>
            <lable>Topic: </lable>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
