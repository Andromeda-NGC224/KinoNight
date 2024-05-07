import css from '../BtnWatch/BtnWatch.module.css'
import { FaCirclePlay } from "react-icons/fa6";

export default function BtnWatch({ onClick, trailer }) {
    return (
        <button onClick={() => onClick(trailer.id)} className={css.btnWatch}><FaCirclePlay className={css.btnWatchIcon} />
</button>
    )
    
}
