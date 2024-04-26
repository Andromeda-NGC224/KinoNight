import { Vortex } from 'react-loader-spinner'
import css from './Loader.module.css';

export default function Loader() {
  return (
      <div className={css.loaderContainer}>
        <Vortex 
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'pink', 'lightblue', 'yellow', 'orange', 'purple']}
      />
      </div>
    )
 }