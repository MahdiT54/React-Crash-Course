import "./Modal.css";

function Modal({ propName, onTodoUndelete }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{propName}</p>
        <div className="modal__buttons">
          <button onClick={onTodoUndelete} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={onTodoUndelete} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
