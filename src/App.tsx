import React, { useState, useEffect } from 'react';
import { Text, Box, useInput, useApp } from 'ink';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const { exit } = useApp();

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    }
    if (key.upArrow) {
      setCounter(counter + 1);
    }
    if (key.downArrow) {
      setCounter(counter - 1);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="green" bold>
        Welcome to Ink TypeScript App!
      </Text>
      <Text>Counter: {counter}</Text>
      <Text color="gray">
        Use ↑/↓ arrows to change counter, 'q' to quit
      </Text>
    </Box>
  );
};

export default App;