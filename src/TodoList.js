
import { connect } from 'react-redux'
import TodoListUI from './UI/TodoListUI'

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'CHANGE_INPUT',
                value: e.target.value
            }
            dispatch(action)
        },
        addItem() {
            let action = {
                type: 'ADD_ITEM',
            }
            dispatch(action)
        }

    }
}

export default connect(stateToProps, dispatchToProps)(TodoListUI);