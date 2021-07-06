import React from 'react'

export default class TitlesList extends React.Component {
  render() {
    const { titles, error } = this.props;

    const errorElement = <span>{error}</span>;

    return (
      error
      ? errorElement
      : (
        <ul>
          {
            titles.map((title, index) => <li key={index}>{title}</li>)
          }
        </ul>
      )
    )
  }
}
