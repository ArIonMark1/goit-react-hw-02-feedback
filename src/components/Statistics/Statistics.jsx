import React from 'react';
// import css from './Statistics.module.css';

export default class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total()}</p>
        <div>Positive feedback: {positivePercentage()} %</div>
      </>
    );
  }
}
