import './App.css';
import Column from "./Column";
import {useState} from "react";

function App() {

    const statuses = ['to do', 'progress', 'done'];

    const initialList = [
        {
            id: 1,
            title: 'Learn JS',
            status: statuses[0]


        },
        {
            id: 2,
            title: 'Learn HTML',
            status: statuses[1]
        },
        {
            id: 21,
            title: 'Learn HTML/ Web',
            status: statuses[1]
        },

        {
            id: 3,
            title: 'Learn CSS',
            status: statuses[2]
        }

    ]


    const [inputTodo, setInputTodo] = useState('text')

    const addToList = () => {
        const newTask = {
            id: Math.random(),
            title: inputTodo,
            status: statuses[0]}
        setList([...list, newTask]);
        setInputTodo('');
    }

    const [list, setList] = useState(initialList);

    return (
        <div >
            <input type = 'text'
                   value = {inputTodo}
                   onChange = {e => setInputTodo(e.target.value)}/>
            <button onClick = {addToList}>Add to List</button>
            {
                statuses.map( el => <Column key={el} list={list} status ={el} />)
            }


        </div>
    );
}

export default App;


