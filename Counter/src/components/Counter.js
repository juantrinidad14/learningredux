
import React, { useState } from 'react'
import { connect } from 'react-redux'



function Counter(props) {
    const [number, setnumber] = useState(0)

    const handleIncrementClick = () => {
        props.onIncrement()
    }

    const  handleAddClick = () => {
        props.onAdd(number)
    }

    const handleNumberChange = (e) => {
        let value = parseInt(e.target.value)
        setnumber(value)
    }

    const handleDecrementClick = () => {
        props.onDecrement()
    }

    const handleSubtractClick = () => {
        props.onSubtract(number)
    }


    return(
        <div className>
        <h1>{props.ctr}</h1>
        <input type="text" onChange={handleNumberChange} />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleSubtractClick}>Subtract</button>
        </div>

    )

}

const mapStateToProps = (state) => {
    return{
        ctr: state.counter,
    

    }
}


const mapDispatchToProps= (dispatch) => {
  return {
      onIncrement: () => dispatch({type: 'INCREMENT'}),
      onDecrement: () => dispatch({type: 'DECREMENT'}),
      onAdd: (no) => dispatch({type:'ADD', value: no,payload: {number: no}}),
      onSubtract: (no) => dispatch({type:'SUBTRACT', value: no,payload: {number: no}})


  }  
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter)