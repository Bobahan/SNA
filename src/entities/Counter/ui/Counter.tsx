import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

export const Counter = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};