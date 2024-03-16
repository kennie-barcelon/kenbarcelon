import React, { useState } from 'react';

    function TodoList() {
        const [todos, setTodos] = useState([]);
        const [inputText, setInputText] = useState('');
        
        const handleInputChange = (event) => {
          setInputText(event.target.value);
        };
      
        const handleAddTodo = () => {
          if (inputText.trim() !== '') {
            setTodos([...todos, inputText]);
            setInputText('');
          }
        };
      
        const handleDeleteTodoList = (index) => {
          const updatedTodos = todos.filter((_, i) => i !== index);
          setTodos(updatedTodos);
        };
      
        return (
            <div className='todo'>
                <h2>Ken To-Do List</h2>
                <input className='input'
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Enter todo"
                />
                <button onClick={handleAddTodo} className='add-button'>Add Todo</button>
                {todos.map((todo, index) => (
                    <div key={index} className='TodoList'>
                        <h3>Task {index + 1}</h3>
                            <table className='todotable'>
                                <tbody>
                                    <tr>
                                        <td>{todo}</td>
                                        <td>
                                            <button onClick={() => handleDeleteTodoList(index) } className='delete'>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                ))}
            </div>
        );
    }

export default TodoList;