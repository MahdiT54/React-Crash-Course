import "./Modal.css";

function Modal({ propName }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{propName}</p>
        <div className="modal__buttons">
          <button
            onClick={() => console.log("Cancel")}
            className="btn btn__cancel"
          >
            Cancel
          </button>
          <button onClick={() => console.log("Confirm")} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
