import { useMemo, useState } from 'react';
import styles from './count.module.scss';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  function expensiveCalculation(count, name) {
    // Simulate an expensive operation
    console.log('Expensive calculation running');
    // Replace this with your actual complex logic
    return count * 1000 + name.length;
  }

  const calculatedValue = useMemo(() => {
    console.log('Calculating...');
    // Replace this with your actual expensive calculation
    return expensiveCalculation(count, name);
  }, [count, name]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Count: {calculatedValue}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button onClick={() => setCount(count + 1)} className={styles.inc}>
          Increment
        </button>

        <button className={styles.res} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseMemoExample;
