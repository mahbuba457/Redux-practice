import { decrement, increment ,incrementByAmout} from './redux/features/counter/counterSlice';
import { useAppSelector,useAppDispatch } from './redux/hook';


function App() {

  const {count} = useAppSelector((state)=>state.counter);
  const dispatch=useAppDispatch();
  return (
    <div>
      <div className="..." >

        <button className="px-3 py-2 rounded-md border-2 border-red-400"
  onClick={()=>dispatch(increment())}>Increment</button>
        <button className="text-green-400 text-2xl"  onClick={()=>dispatch(incrementByAmout(6))}>Increment by value</button>
        <div>{count}</div>
        <button className="px-3 py-2 rounded-md border-2 border-blue-400" onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
  
}

export default App;
