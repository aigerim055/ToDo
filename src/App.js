import {useState} from "react";
import EditIcon from "./components/edit-icon";
import DeleteIcon from "./components/delete-icon";

function App() {
	
	const [todoList, setTodoList] = useState(list)
	const [todo, setTodo] = useState('')
	// const [change, setChange] = useState('')
	// const [edit, setEdit] = useState()
	
	const handleAddTodo = () => {
		if (todo.length){
			const newTodo = {
				id: todoList.length + 1,
				text: todo,
				completed: false
			}
			setTodoList([...todoList, newTodo])
			setTodo('')
		}
	}
	
	const handleDelete = (id) => {
		setTodoList(todoList.filter(todo => todo.id !== id))
	}
	
	console.log(todoList)
	
	const handleComplete = (id, event) => {
		setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed : event.target.checked} : todo))
	}
	
	// const handleEdit = (id) => {
	//
	// }
	
	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px'}}>
			
			<div>
				<h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>todolist</h1>
				<div style={{
					display: 'flex',
					marginBottom: '10px',
				}}>
					<input type="text" style={{padding: '15px 70px'}}
					       value={todo}
					       onChange={(e) => setTodo(e.target.value)}
					/>
					<button className={'add'} onClick={handleAddTodo}>
						add
					</button>
					
				</div>
				{
					todoList.map((todo) => (
						<div className={`${todo.completed ? 'completed': ''}`} key={todo.id} style={{padding: '20px', border: '1px black solid', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center'}}>
							
							{/*{*/}
							{/*	edit ?  :*/}
							{/*		<input type="text"/>*/}
							{/*}*/}
							<span>{todo.text}</span>
							<div style={{
								display:'flex',
								alignItems:'center'
							}}>
								{
									!todo.completed &&
									<button style={{
										border: 'none',
										background: 'unset',
										cursor: 'pointer'
									}}>
										<EditIcon/>
									</button>
								}
								<input type="checkbox" style={{padding: '5px'}} onChange={(event) => handleComplete(todo.id, event)}/>
								<button style={{
									border: 'none',
									background: 'unset',
									cursor: 'pointer'
								}}
									onClick={() => handleDelete(todo.id)}
								>
									<DeleteIcon/>
								</button>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default App;


const list = [
	{id: 1, text: 'learn TypeScript', completed: false},
	{id: 2, text: 'learn JavaScript', completed: false},
	{id: 3, text: 'learn React', completed: false},
	{id: 4, text: 'learn React Native', completed: false},
]