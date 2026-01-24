import "./bucketList.css";

export default function BButton({popupActive, setPopupActive, newTodo, setNewTodo, addTodo}){
    return (
        <div>
            <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>
		    {popupActive ? (
			    <div className="popup">
				    <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
				    <div className="content">
					    <h3>Add Task</h3>
					    <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
					    <div className="buttonTodo" onClick={addTodo}>Create Task</div>
				    </div>
			    </div>
		    ) : ''}
        </div>
    )
}