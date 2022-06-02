import style from './Todolist.module.css'
import clsx from "clsx";
import { BsTrashFill } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
function Todolist() {
    return ( 
        <div className={clsx(style.main)}>
            <div className={clsx(style.listJob)}>
                <div className={clsx(style.job1)}>
                    <div className={clsx(style.input)}>
                        <input type={'radio'} name={'sex'}></input>
                    </div>
                    <div className={clsx(style.php)}>
                        <p>PHP developer</p>
                    </div>
                    <div className={clsx(style.pencil)}>
                        <BsPencil/>                        
                    </div>
                    <div className={clsx(style.trash)}>
                        <BsTrashFill/>
                    </div>
                </div>
                <div className={clsx(style.job2)}>
                    <div className={clsx(style.input1)}>
                        <input type={'radio'} name={'sex'}></input>
                    </div>
                    <div className={clsx(style.react)}>
                        <p>Fronend React.js</p>
                    </div>
                    <div className={clsx(style.pencil1)}>
                        <BsPencil/>                        
                    </div>
                    <div className={clsx(style.trash1)}>
                        <BsTrashFill/>
                    </div>
                </div>
                <div className={clsx(style.job3)}>
                    <div className={clsx(style.input2)}>
                        <input type={'radio'} name={'sex'}></input>
                    </div>
                    <div className={clsx(style.java)}>
                        <p>JAVA developer</p>
                    </div>
                    <div className={clsx(style.pencil2)}>
                        <BsPencil/>                        
                    </div>
                    <div className={clsx(style.trash2)}>
                        <BsTrashFill/>
                    </div>
                </div>
                <div className={clsx(style.job4)}>
                    <div className={clsx(style.input3)}>
                        <input type={'radio'} name={'sex'}></input>
                    </div>
                    <div className={clsx(style.net)}>
                        <p>.NET (C#,C++,...) </p>
                    </div>
                    <div className={clsx(style.pencil3)}>
                        <BsPencil/>                        
                    </div>
                    <div className={clsx(style.trash3)}>
                        <BsTrashFill/>
                    </div>
                </div>
            </div>
            
          
        </div>
     );
}

export default Todolist;