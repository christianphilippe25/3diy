// import logo from './logo.svg';
import './Header.css';

function App() {
  return (
    <header className="Header">
        <div className="Logo"><img src=""/><h1>3DIY</h1></div>
        <div className="Menu">
            <a href="/" className="Menu-Item"><div>Home</div></a>
            <a href="" className="Menu-Item"><div>Partes</div></a>
            <a href="" className="Menu-Item"><div>Impressoras</div></a>
            <a href="" className="Menu-Item"><div>Impressoes</div></a>
            <a href="" className="Menu-Item"><div>Contato</div></a>
            <a href="/login" className="Menu-Item Destaque"><div>Login</div></a>
        </div>
    </header>
  );
}

export default App;
