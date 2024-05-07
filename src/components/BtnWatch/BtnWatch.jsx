import css from '../BtnWatch/BtnWatch.module.css'
import { FaCirclePlay } from "react-icons/fa6";

export default function BtnWatch({ onClick, trailerUK, trailerUS }) {
    
    return (
        <button onClick={() => onClick(trailerUK ? trailerUK.id : trailerUS.id)} className={css.btnWatch}>
            <FaCirclePlay className={css.btnWatchIcon} />
        </button>
    )
    
}
