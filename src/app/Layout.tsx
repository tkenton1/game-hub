import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles["gh-shell"]}>
      <a className={styles["gh-skip-link"]} href="#main-content">
        Skip to content
      </a>

      <header className={styles["gh-header"]}>
        <div className={`${styles["gh-container"]} ${styles["gh-header-inner"]}`}>
          <Link className={styles["gh-logo"]} to="/" aria-label="Game Hub home">
            Game Hub
          </Link>

          <nav aria-label="Primary">
            <ul className={styles["gh-nav-list"]}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${styles["gh-nav-link"]} ${isActive ? styles["is-active"] : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tic-tac-toe"
                  className={({ isActive }) =>
                    `${styles["gh-nav-link"]} ${isActive ? styles["is-active"] : ""}`
                  }
                >
                  Tic-Tac-Toe
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className={styles["gh-main"]} tabIndex={-1}>
        <Outlet />
      </main>

      <footer className={styles["gh-footer"]}>
        <div className={styles["gh-container"]}>
          <small>&copy; {new Date().getFullYear()} Game Hub</small>
        </div>
      </footer>
    </div>
  );
}