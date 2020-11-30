import React from 'react'
import  { connect } from 'react-redux'

function FancyCounter(props){
   return(
       <div>
            <h1>IncrementDecrementCounter</h1>
            <button onClick={() => props.onIncrement()} >INCREMENT</button>
            <button onClick={() => props.onDecrement()} >DECREMENT</button>
        </div>


   ) 
}
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type:'DECREMENT'})
    }
}
export default connect(null,mapDispatchToProps)(FancyCounter)