import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

//components
import Loader from '../components/Loader';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

      <h3>Log In</h3>

      <label>Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>{isLoading ? <Loader /> : 'Login'}</button>
    </form>
  );
};

export default Login;
