import Modal from "react-modal";
import TrailerPlayer from '../TrailerPlayer/TrailerPlayer'


Modal.setAppElement("#root");

export default function ModalTrailer({ isOpen, onClose, trailer }) {  
    const url = trailer.results

    const customStyles = {
        overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
      content: {
    padding: `none`,
    border: `none`,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
        }
    };
    
 return (
    <Modal
      isOpen={isOpen}
       style={customStyles}
         onRequestClose={onClose}>
         <TrailerPlayer url={url}></TrailerPlayer>
    </Modal>
  );
}

