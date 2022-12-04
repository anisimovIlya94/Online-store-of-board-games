import React from "react";
import classes from "../../modules/textField.module.css"

const ModalWindow = ({ children, id, reference }) => {
  return (
    <div
      className="modal fade"
      id={id}
      ref={reference ? reference : null}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={"modal-content " + classes.editModuleWidth}>
          <div className={"modal-body " + classes.modalBodyWrap}>
            <div className={classes.modalCloseButton}>
              <button data-bs-dismiss="modal" style={{ background: "inherit" }}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className={classes.editModuleWrapper}>
            {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
