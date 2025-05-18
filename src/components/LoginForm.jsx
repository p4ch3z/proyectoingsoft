import { useState } from "react";
import "./Stilo_login.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = "/profile";
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit} method="post">
        <h2>Iniciar sesion</h2>
        <div className="usuario">
          <input
            type="text"
            required
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Usuario</label>
        </div>
        <div className="contraseña">
          <input
            type="password"
            required
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Contraseña</label>
        </div>
        <input type="submit" value="INICIAR SESION" />
      </form>
    </div>
  );
}

export default LoginForm;
