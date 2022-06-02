import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';

import Todo from './component/home/Todo';
import AddTodo from './component/home/Add/AddTodo';
import Footer from './component/footer/Footer';


function App() {
  return (
   <div>  
     <Header/>
      <main>  
          <div>
            <Todo>
              
            </Todo>
          </div>   
      </main>   
    <Footer/>
   </div>
  );
}

export default App;
