import style from './Header.module.css'
import clsx from 'clsx';
function Header() {
    return ( 
       <h1 className={clsx(style.header,style.text)}>Phần mềm quản lý công việc</h1>
     );
}

export default Header;