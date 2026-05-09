import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function LoginPage() {
  const {login}=useContext(GlobalContext)
  const [email, setEmail] = useState("admin@minicrm.io");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Simulação de login
    if (email && password) {
      localStorage.setItem("auth", "true");
      login({email,password})
     
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <Zap size={24} fill="white" />
          </div>
          <h1>Mini CRM</h1>
          <p>Faça login para gerir os seus clientes</p>
        </div>
        
        <form className="form" onSubmit={handleLogin}>
          <label className="form-field">
            <span>Email</span>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="exemplo@minicrm.io"
              required 
            />
          </label>
          
          <label className="form-field">
            <span>Palavra-passe</span>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required 
            />
          </label>
          
          <button type="submit" className="btn-primary login-btn">
            Entrar
          </button>
        </form>
        
        <div className="login-footer">
          <p>Esqueceu-se da palavra-passe? <a href="#">Recuperar</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
