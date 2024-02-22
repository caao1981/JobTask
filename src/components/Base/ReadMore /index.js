import React, { useState } from 'react'
import { styles } from './style'
import PropTypes from 'prop-types'

const ReadMore = ({ children, textLength }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <>
      {text?.length > 80 ? (
        <p style={styles.text}>
          {isReadMore ? text?.slice(0, textLength) : text}
          <span onClick={toggleReadMore} style={styles.readOrHide}>
            {isReadMore ? '...Read more' : ' Show less'}
          </span>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </>
  )
}

ReadMore.propTypes = {
  children: PropTypes.string,
  textLength: PropTypes.number,
}

ReadMore.defaultProps = {
  textLength: 80,
}

export default ReadMore
