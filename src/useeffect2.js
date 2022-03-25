import { useRef } from 'react';
function UseEff2() {
  const count = useRef(0);
  
  const handle = () => {
    count.current++;
    console.log(`Clicked ${count.current} times`);
  };
  return( 
    <div>
        <p>Look in console</p>
        <button onClick={handle}>Click me</button>
    </div>);
}
export default UseEff2;