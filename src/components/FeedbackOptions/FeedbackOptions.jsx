import React from 'react';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends React.Component {
  render() {
    const {
      options: [good, neutral, bad],
      onLeaveFeedback,
    } = this.props;

    return (
      <div className={css.buttonSection} onClick={onLeaveFeedback}>
        <button type="button" name={good}>
          Good
        </button>
        <button type="button" name={neutral}>
          Neutral
        </button>
        <button type="button" name={bad}>
          Bad
        </button>
      </div>
    );
  }
}
