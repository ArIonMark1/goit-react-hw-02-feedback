import React from 'react';
import css from './App.module.css';
//
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  raitingCounter = evt => {
    const { name } = evt.target;

    this.setState({ [name]: this.state[name] + 1 }); // змінив свіча на цей варіант
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, curEl) => (total += curEl),
      0
    );
  };
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
  render() {
    const { good, neutral, bad } = this.state;
    const totalRequests = this.countTotalFeedback();

    return (
      <div className={css.app}>
        <div className={css.containerContent}>
          <Section title="Feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.raitingCounter}
            />
          </Section>
          <Section title="Statistics">
            {!totalRequests ? (
              <Notification message="There is no feedback." />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

/*
last step
  Розшир функціонал застосунку таким чином, щоб блок статистики рендерився тільки після того, як було зібрано хоча б один відгук. 
  Повідомлення про відсутність статистики винеси в компонент <Notification message="There is no feedback">.
*/
