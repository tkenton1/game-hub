import { Link } from "react-router-dom";
import './NotFound.module.css'

export function NotFound() {
  return (
    <section className="container">
      <h1>404</h1>
      <p>That page doesn't exist.</p>
      <Link to="/">Back home</Link>
    </section>
  );
}