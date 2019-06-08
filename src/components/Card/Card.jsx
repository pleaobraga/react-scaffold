import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  render() {
    const { title, text } = this.props

    return (
      <div className="card">
        <h1 className="card--title">{title}</h1>
        <p className="card--text">{text}</p>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Card
