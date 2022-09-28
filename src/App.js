import "./App.css";
import { AuthApp } from "./AuthApp";
import { UnAuthApp } from "./UnAuthApp";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <h1>💬 Gist</h1>
      {user ? <AuthApp /> : <UnAuthApp />}
    </div>
  );
}

export default App;
