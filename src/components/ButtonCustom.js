import React from 'react'


const ButtonCustom = (props) => {
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

export default ButtonCustom;


