import React, { useEffect, useState } from 'react'
import api from '../../api';
import TodoList from './TodoList';

const Todo = () => {
    const [ todo, setTodo ] = useState([]);
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ priority, setPriority ] = useState("");
    const [priorityChoices, setPriorityChoices] = useState([]);

    useEffect(() => {
        getTodos();
        fetchPriorityChoices();
    }, []);
    
    const getTodos = () => {
        api
        .get("/user/todo/")
        .then((res) => res.data)
        .then((data) => {
            setTodo(data);
            console.log(data);
        })
        .catch((err) => alert(err));
    }
    
    const deleteTodo = (id) => {
        api
        .delete(`/user/todo/delete/${id}/`)
        .then((res) => {
            if(res.status === 204) alert('Todo deleted');
            else alert("Failed to delete the todo.")
        })
        .catch((error) => alert(error));
        getTodos();
    }
    
    const createTodo = (e) => {
        e.preventDefault()
        api.post("/user/todo/", {title, content, priority}).then((res) => {
            if(res.status === 201) alert("Note Created!")
            else alert("Failed to create todo.")
            getTodos();
        }).catch((err)=> alert(err));
    }
    
    const fetchPriorityChoices = () => {
        // Fetch priority choices from Django model or API
        const priorityChoicesFromBackend = [
            { value: 'High', label: 'High' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Low', label: 'Low' }
        ];
        setPriorityChoices(priorityChoicesFromBackend);
    }
    
    return (
        <div>
            <div>
                <h2>Todo's</h2>
                {todo.map((todo)=> <TodoList todo={todo} onDelete={deleteTodo} key={todo.id} />)}
            </div>
            <div>
                <h2>Create Todo</h2>
                <form onSubmit={createTodo}>
                    <div className="row">
                        <div>
                            <label htmlFor="title" className='w-100'>Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id='title'
                                name='title'
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className='w-100'>Content</label>
                            <input
                                type="text" 
                                className="form-control" 
                                id='content'
                                name='content'
                                value={content}
                                onChange={(e)=> setContent(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="priority" className='w-100'>Priority</label>
                            <select 
                                className="form-control" 
                                id='priority'
                                name='priority'
                                value={priority}
                                onChange={(e)=> setPriority(e.target.value)}
                            >
                                <option value="">Select Priority</option>
                                {priorityChoices.map((choice, index) => (
                                    <option key={index} value={choice.value}>{choice.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='m-3' />
                </form>
            </div>
        </div>

    )
}

export default Todo
