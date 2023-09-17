// import './App.css';
import { useState } from 'react';
import './styles.css'
import NewTodo  from './NewTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title){
    setTodos(currTodos =>{
      return [
        ...currTodos,
        // ... this will alow you to keep the old values
        {id: crypto.randomUUID, title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    // here we'are updating the todos
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        // while updating we only want to change the checkbox,
        // ...todo willl let the old changes as it is
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currTodos =>{
      return currTodos.filter(todo => todo.id !== id);
      // here cz the id will be same the statement will get false,
      // that element will get removed
    })
  }

  return(
    <>
      <NewTodo onSubmit = {addTodo}></NewTodo>
      <h1 className='header'>Todo List</h1>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
    </>
  )
}
export default App;

  // return (
  //   <>
  //   <button onClick={decrement}>-</button>
  //   <span>{count}</span>
  //   <span>{theme}</span>
  //   <button onClick={increment}>+</button>
  //   </>


  // const[count,setCount] = useState(4);
  // const[theme,setTheme] = useState('blue');

  // // const[state,setState] = useState({count: 4,theme:'blue'})
  // // const count = state.count
  // // const theme = state.theme

  // // useState(4), if we do it like this it'll render again and again and it'll slow down the processor

  // function decrement(){
  //   setCount(prevCount => prevCount - 1)
  // }
  // function increment(){
  //   setCount(prevCount => prevCount + 1 + 'a')
  // }
  // function forTheme(){
  //   setTheme(prevValue => prevValue + 'a')
  // }
  // function decrement(){
  //   setState(prevState =>{
  //     return{...prevState, count:prevState.count-1}
  //     // it'll keep the old data
  //     // ...prevState
  //   })
  // }


  // // const[count,setCount] = useState(4);
  // const[count,setCount] = useState(()=>{
  //   return 4;
  //   // this way it'll not run againa and again everytime we re-render our component , it'll run again and again like it did render the first time
  // });

  // // useState(4), if we do it like this it'll render again and again and it'll slow down the processor

  // function decrement(){
  //   setCount(prevCount => prevCount - 1)
  //   setCount(prevCount => prevCount - 1)
  //   // setCount(count-1)
  //   // setCount(count-1)
  // }

  // function increment(){
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)
  //   // setCount(count-1)
  //   // setCount(count-1)
  // }

