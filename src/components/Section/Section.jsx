import React from 'react';

export default class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
}
