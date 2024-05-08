import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/main">main</Link>
        </li>
        <li>
          <Link to="/write">write</Link>
        </li>
      </ul>
    </nav>
  );
}
