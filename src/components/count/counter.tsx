import { useReducer } from 'react';
import styles from './count.module.scss';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Count: {state.count}</p>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className={styles.inc}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (state.count > 0) {
              dispatch({ type: 'decrement' });
            }
          }}
          className={styles.desc}
        >
          Decrement
        </button>
        <button className={styles.res} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
