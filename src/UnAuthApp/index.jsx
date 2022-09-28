import { useAuth } from "../hooks/useAuth";
import "./index.css";

function UnAuthApp() {
  const { login } = useAuth();
  return (
    <>
      <h2> Login to get any gist </h2>
      <div>
        <button onClick={login} className="login">
          Login with Google
        </button>
      </div>
    </>
  );
}

export { UnAuthApp };
