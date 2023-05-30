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
    return Object.values(this.state).reduce(
      (total, curEl) => (total += curEl),
      0
    );
    alert(ress);
  };
  // **********************************************
  countPositiveFeedbackPercentage = () => {
    const totalRequests = this.countTotalFeedback();
    const { good: goodRequests } = this.state;

    if (!totalRequests) {
      return 0;
    } // щоб не повертало NaN коли нічого рахувати
    const positivePercent =
      ((goodRequests - totalRequests) / totalRequests) * 100 + 100;

    if (String(positivePercent).length <= 5) {
      return positivePercent;
    }
    return positivePercent.toFixed(2);
  };
  // ##############################################
  render() {
    const { good, neutral, bad } = this.state;
    // this.countTotalFeedback();
    return (
      <div className={css.containerContent}>
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
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </div>
      </div>
    );
  }
}
