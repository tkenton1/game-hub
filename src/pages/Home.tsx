import { Link } from "react-router-dom";
import styles from "./Home.module.css";

type Game = {
  id: string;
  title: string;
  description: string;
  status: "Ready" | "Coming soon";
  path: string;
};

const GAMES: Game[] = [
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    description: "Looking at state, rendering, and win logic - a nice warm up!",
    status: "Ready",
    path: "/tic-tac-toe",
  },
  {
    id: "snake",
    title: "Snake",
    description: "Looking at game loops, collisions, and timing + effects.",
    status: "Coming soon",
    path: "/snake",
  },
  {
    id: "minesweeper",
    title: "Minesweeper",
    description: "Looking at grid logic, recursion & flood fill, and reducers.",
    status: "Coming soon",
    path: "/minesweeper",
  },
];

export function Home() {
  return (
    <>
      <section className={styles["gh-hero"]} aria-labelledby="hero-title">
        <div className={styles["gh-container"]}>
          <h1 id="hero-title">Game Hub</h1>
          <p>A small collection of games to learn/practice my React + TypeScript.</p>
          <p>Have fun!</p>
        </div>
      </section>

      <section
        id="games"
        className={styles["gh-section"]}
        aria-labelledby="games-title"
      >
        <div className={styles["gh-container"]}>
          <header className={styles["gh-section-header"]}>
            <h2 id="games-title">Games</h2>
          </header>

          <div className={styles["gh-card-grid"]}>
            {GAMES.map((game) => (
              <article
                key={game.id}
                className={styles["gh-card"]}
                aria-labelledby={`${game.id}-title`}
              >
                <h3 id={`${game.id}-title`}>{game.title}</h3>
                <p>{game.description}</p>

                <div className={styles["gh-card-footer"]}>
                  <span className={styles["gh-badge"]}>{game.status}</span>

                  {game.status === "Ready" ? (
                    <Link className={styles["gh-button"]} to={game.path}>
                      Play
                    </Link>
                  ) : (
                    <button className={styles["gh-button"]} disabled>
                      Play
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className={styles["gh-section"]}
        aria-labelledby="about-title"
      >
        <div className={styles["gh-container"]}>
          <h2 id="about-title">About</h2>
          <p>
            Each game is built as a small React module with reusable components,
            shared UI, and incremental features.
          </p>
          <p>Concepts covered:</p>
          <ul>
            <li>React components + props + state</li>
            <li>TypeScript types and reducers</li>
            <li>Routing between games</li>
            <li>Persistence (high scores, settings)</li>
          </ul>
        </div>
      </section>

      <section
        id="progress"
        className={styles["gh-section"]}
        aria-labelledby="progress-title"
      >
        <div className={styles["gh-container"]}>
          <h2 id="progress-title">Progress</h2>
          <p>Check out what I have managed so far and what I plan to include!</p>
          <ol>
            <li>Landing page &#9989;</li>
            <li>Routing &#9989;</li>
            <li>Tic-Tac-Toe</li>
            <li>Snake</li>
            <li>Minesweeper</li>
          </ol>
        </div>
      </section>
    </>
  );
}