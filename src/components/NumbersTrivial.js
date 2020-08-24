import React from 'react'


const NumbersTrivia = (props) => {
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>
      <h1>{props.resultNumberTriviaFact}</h1>
      </div>
    )
  }


export default NumbersTrivia