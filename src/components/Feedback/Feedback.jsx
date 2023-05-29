import React, { Component } from 'react';
import css from './Feedback.module.css';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // ##############################################
  raitingCounter = evt => {
    switch (evt.target.name) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;
      default:
        console.log('Wrong action!');
        break;
    }
  };
  // ##############################################
  countTotalFeedback = () => {
      const ress = Object.values(this.state).reduce((total, curEl) => (total += curEl), 0)
    );
			alert(ress);

  };
  // **********************************************
  countPositiveFeedbackPercentage = () => {};
  // ##############################################
  render() {
    const { good, neutral, bad } = this.state;
    this.countTotalFeedback();
    return (
      <div>
        <div className={css.sendSection}>
          <h2>Feedback</h2>
          <div className={css.buttonSection} onClick={this.raitingCounter}>
            <button type="button" name="good">
              Good
            </button>
            <button type="button" name="neutral">
              Neutral
            </button>
            <button type="button" name="bad">
              Bad
            </button>
          </div>
        </div>
        <div className={css.receiveSection}>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {bad}</p>
        </div>
      </div>
    );
  }
}
