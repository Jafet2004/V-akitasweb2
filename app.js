function App() {
  const [showLogin, setShowLogin] = React.useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {/* Header con el menú */}
      <header>
        <div className="logo">
          <img src="Recurse/Logo-V-akitas.jpg" alt="Logo V-Akitas" className="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca-de">Nosotros</a></li>
          </ul>
        </nav>
        <div className="button-right">
          <button onClick={toggleLogin} className="login-btn">Iniciar Sesión</button>
          <button className="download-btn">Descargar V-Kitas</button>
        </div>
      </header>

      {/* Paneles para la sección de Inicio */}
      <div className="main-content">
        <section id="inicio" className="panel">
          <div className="panel-content">
            <img src="Recurse/home.jpg" alt="Imagen Inicio" className="panel-image" />
            <div className="panel-text">
              <h2>Servicios de V-Akitas</h2>
              <p>En la versión gratuita, ofrecemos una tabla nutricional con información detallada sobre granos básicos utilizados en las fincas de pequeños y medianos ganaderos.</p>
              <p>En la versión pagada, brindamos planes nutricionales personalizados para mejorar la salud y productividad del ganado bovino.</p>
            </div>
          </div>
        </section>

        {/* Paneles para la sección Acerca de */}
        <section id="acerca-de" className="panel">
          <div className="panel-content">
            <img src="Recurse/mision.jpg" alt="Imagen Acerca de" className="panel-image" />
            <div className="panel-text">
              <h2>Nosotros</h2>
              <p><strong>Misión:</strong> Proveer herramientas tecnológicas innovadoras para mejorar la eficiencia y sostenibilidad de los sistemas de producción ganadera.</p>
              <p><strong>Visión:</strong> Ser la plataforma líder en la región para la gestión nutricional ganadera, contribuyendo al bienestar de pequeños y medianos productores.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Para más información, contáctanos al número: <strong>+505 7701-1807</strong></p>
        <p>Síguenos en nuestras redes sociales:</p>
        <div className="social-media">
          <a href="#">
              <img src="Recurse/facebook.png" alt="Facebook" className="social-icon" />
              Facebook
          </a>
          <a href="#">
              <img src="Recurse/instagram.png" alt="Instagram" className="social-icon" />
              Instagram
          </a>
          <a href="#">
              <img src="Recurse/twitter-x.png" alt="Twitter" className="social-icon" />
              Twitter
          </a>
        </div>
      </footer>

      {/* Modal de Iniciar Sesión */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <h2>Iniciar Sesión</h2>
            <form>
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
              <button type="submit">Iniciar Sesión</button>
            </form>
            <p>¿No tienes cuenta? <a href="#">Regístrate aquí</a></p>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
