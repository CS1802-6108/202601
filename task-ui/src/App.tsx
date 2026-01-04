import { useState } from "react";
import Login from "./Login";
import TaskList from "./TaskList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div>
        {isLoggedIn ? (
            <TaskList />
        ) : (
            <Login onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
  );
}

export default App;
