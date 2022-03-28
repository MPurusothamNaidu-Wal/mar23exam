import logo from './logo.svg';
import './App.css';
import react from 'react';
import TodoMainApp from './TodoMainApp';
import Counter from './Counter';
import UserApp from './user';
import UseEff from './UseEffect';
import UseEff2 from './useeffect2';
import CarApp from '../../productlocalstore/src/Car';
function App() {
  return (
    <div className='App'>
      {/* {/* //   <TodoMainApp/>
    //   <Counter /> */}
      {/* <UseEff></UseEff>
      // <UseEff2></UseEff2>
      <UserApp></UserApp>
        */}
      <CarApp />
    </div>
  );
}

export default App;
