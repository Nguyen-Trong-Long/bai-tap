// import clsx from 'clsx';
import clsx from 'clsx';
import AddTodo from './Add/AddTodo';
import Todolist from './Add/Todolist';
import style from './Todo.module.css'
function Todo() {
    return (
        <div className={clsx(style.list)}>
            <input src="" placeholder="Nhập tên công việc" className={clsx(style.todo)}></input>
           <AddTodo/>
           <Todolist/>
        </div>
     );
}

export default Todo;