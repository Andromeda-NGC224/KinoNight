import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export default function BackLink({ to, children }) {
  return (
    <Link className={css.backBtn} to={to}>
      {children}
    </Link>
  );
}