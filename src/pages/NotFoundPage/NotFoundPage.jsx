import { Link } from "react-router-dom";
import css from "../NotFoundPage/NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={css.text}>
      <p>Non-existent page.</p>
      <p>Return to our <Link to='/' className={css.home}><srong>Home Page</srong></Link>, please.</p>
    </div>
  )
}