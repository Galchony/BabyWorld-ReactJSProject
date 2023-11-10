export default function Navigation(props) {
  return (
    <>
      <section id="stuck_container">
        <div className="container_12">
          <div className="grid_12">
            <div className="navigation">
              <nav>
                <ul className="sf-menu">
                  <li className="current">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/catalog">Catalog</a>
                  </li>
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                </ul>
              </nav>
              <div className="clear" />
            </div>
            <div className="clear" />
          </div>
          <div className="clear" />
        </div>
      </section>
    </>
  );
}
