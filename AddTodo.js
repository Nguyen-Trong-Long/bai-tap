import { FaPlus } from "react-icons/fa"
import style from './AddTodo.module.css'
import clsx from "clsx";
function AddTodo() {
    return ( 
        <div className={clsx(style.icon)}>
            <FaPlus/>
        </div>     
        
     );
}
export default AddTodo;