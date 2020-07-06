import React, { Component } from "react";
import Section from "./components/section/Section";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Statistic from "./components/statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // counter = (e) => console.log(e.target.name);
  counter = (e) =>
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });

  getTotal = () =>
    Object.values(this.state).reduce((acc, item) => (acc += item), 0);

  positivePercentage = () => {
    // console.log(this.state.good);
    // console.log(this.getTotal());
    return Math.round((this.state.good / this.getTotal()) * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions counter={this.counter} />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.getTotal()}
          positivePercentage={this.positivePercentage()}
        />
      </Section>
    );
  }
}

export default App;
