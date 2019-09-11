import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()


function App() {
  const [theme, setTheme] = useState('blue')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
        Counter
        <Counter initialCount={0} />
        CounterHooks
        <CounterHooks initialCount={0} />
        <div>{' Button '}</div>
        <button onClick={() => {
          setTheme((prevTheme) => { return prevTheme === 'red'? 'green' : 'red' })
        }}>Change Theme</button>
    </ThemeContext.Provider>

  );
  
}

export default App;
