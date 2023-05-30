import React from 'react';

export default class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}
