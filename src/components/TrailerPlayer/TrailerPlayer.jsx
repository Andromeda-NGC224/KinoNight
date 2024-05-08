import ReactPlayer from "react-player/youtube";
import css from "../TrailerPlayer/TrailerPlayer.module.css";

export default function TrailerPlayer({ url }) {
  const regex = /(Official|Офіційний|трейлер|Trailer)/i;

  const filteredUrl = url.find((link) => regex.test(link.name));
  if (!filteredUrl) return null;

  return (
    <div className={css.trailerPlayerCont}>
      <ReactPlayer
        key={filteredUrl.key}
        url={`https://www.youtube.com/watch?v=${filteredUrl.key}`}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        className={css.overflowHidden}
      />
    </div>
  );
}
