import { decrement, increment ,incrementByAmout} from './redux/features/counter/counterSlice';
import { useAppSelector,useAppDispatch } from './redux/hook';


function App() {

  const {count} = useAppSelector((state)=>state.counter);
  const dispatch=useAppDispatch();
  return (
    <div>
      <div className="..." >

        <button className="..."  onClick={()=>dispatch(increment())}>Increment</button>
        <button className="..."  onClick={()=>dispatch(incrementByAmout(6))}>Increment by value</button>
        <div>{count}</div>
        <button className="..." onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
  
}

export default App;
