import React, { Component } from "react";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.onSubmit} style={{ marginLeft: "30px" }}>
        <h2>Phonebook</h2>

        <input
          className={styles.inputName}
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.onChange}
          placeholder="Enter name..."
          required
        ></input>

        <input
          className={styles.inputNumber}
          type="tel"
          name="number"
          value={this.props.number}
          onChange={this.props.onChange}
          placeholder="Number..."
          required
        ></input>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
