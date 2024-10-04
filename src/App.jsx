import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync, reset } from './store/reducers/counterSlice';

export default function App(){
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="bg-zinc-900 text-zinc-50 w-full h-screen">
      <h1 className="text-center font-light text-3xl text-blue-400">
        counter: {value}
      </h1>
      <div className="text-center">
        <button onClick={()=> dispatch(increment())} type="button" className="px-4 py-1.5 border-[1px] border-zinc-700 rounded text-zinc-50 font-medium duration-500 hover:bg-gradient-to-b from-red-900 via-blue-400 hover:bg-clip-text hover:text-transparent">Increment</button>
        <button onClick={()=> dispatch(decrement())} type="button" className="mx-4 px-4 py-1.5 border-[1px] border-zinc-700 rounded text-zinc-50 font-medium duration-500 hover:bg-gradient-to-b from-blue-900 via-red-400 hover:bg-clip-text hover:text-transparent">Decrement</button>
        <button onClick={()=> dispatch(incrementAsync(5))} type="button" className="px-4 py-1.5 border-[1px] border-zinc-700 rounded text-zinc-50 font-medium duration-500 hover:bg-gradient-to-b from-blue-900 via-green-400 hover:bg-clip-text hover:text-transparent">Increment by 5</button>
        <button onClick={()=> dispatch(reset())} type="button" className="mx-4 px-4 py-1.5 border-[1px] border-zinc-700 rounded text-zinc-50 font-medium duration-500 hover:bg-gradient-to-b from-blue-900 via-green-400 hover:bg-clip-text hover:text-transparent">Reset</button>
      </div>
    </div>
  )
}