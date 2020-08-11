import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {className, onClick, type, children} = props;
  return (
    <div>
    <button 
      type={type}
    className={className}
        style={{ margin: '5px 5px'}}
        onClick={onClick}>{children}
        </button>
    </div>

  )
};

export default Button;


Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.symbol,
              PropTypes.number,
              PropTypes.node,
              PropTypes.func
      ])
}