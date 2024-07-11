import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    padding: "0",
    borderRadius: "20px",
  },
  overlay: { backgroundColor: "rgb(0, 0, 0, 0.9)" },
};

const ImageModal = ({ closeModal, isOpen, imageModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.noScroll);
    } else {
      document.body.classList.remove(css.noScroll);
    }

    return () => {
      document.body.classList.remove(css.noScroll);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      imageModal={imageModal}
    >
      {imageModal && (
        <div>
          <img
            className={css.modalImg}
            src={imageModal.urls.regular}
            alt={imageModal.alt_description}
          />
          {imageModal.description ? (
            <p className={css.modalDesc}>{imageModal.description}</p>
          ) : (
            <p className={css.modalDesc}>No description</p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
