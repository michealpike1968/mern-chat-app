import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import './App.css';

import { ChakraBaseProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraBaseProvider>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} exact />
      </div>
    </ChakraBaseProvider>
  );
}

export default App;

