import ReactPlayer from "react-player/youtube";
import css from '../TrailerPlayer/TrailerPlayer.module.css'




export default function TrailerPlayer({ url }) {
    console.log(url[0].key);
  return (
    <div className={css.trailerPlayerCont}>
      <ReactPlayer
        url={ `https://www.youtube.com/watch?v=${url[0].key}`}
        width='100%'
        height='100%'
        controls={true}
        playing={true}
        className={"css.overflowHidden"}
      />
    </div>
  );
}