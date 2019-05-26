import React from 'react'
import PropTypes from 'prop-types'


class Card extends React.Component {
  render() {
    const { title, text } = this.props

    return (
      <div className="card" >
        <hi>{title}</hi>
        <p>{text}</p>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequire,
  text: PropTypes.string.isRequired
}

export default Card
