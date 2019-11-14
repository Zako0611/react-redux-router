import React from 'react';

const TodoListUI = (props) => {
    let{inputValue,inputChange,addItem,list}= props
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={inputChange}
                />
                <button onClick={addItem}>add</button>
            </div>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default TodoListUI