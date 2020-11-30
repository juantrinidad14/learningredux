

const initialState = {
    counter: 99,
    name: 'John Doe',
    tasks: ['wash the car', 'Feed the dog']

}

const reducer = (state = initialState,action) => {
    
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            counter: state.counter + 1
        }
    }else if(action.type === 'DECREMENT'){
        return{
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type === "ADD"){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }else if(action.type === "SUBTRACT"){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
        
    
    return state
}


export default reducer