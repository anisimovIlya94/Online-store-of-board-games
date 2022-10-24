import React from "react";
import classes from "../../modules/catalog.module.css"

const CatalogQuastion = ({ display, collapseRef, toggleDisplay, title, text }) => {
  return (
    <div
      style={{ border: "1px solid #fcf3ed" }}
      className={"card my-2 " + classes.quastionWrapper}
    >
      <div className={"card-body " + classes.questionbb}>
        <div
          className={"d-flex justify-content-between " + classes.quastionHead}
        >
          {title}
          <i
            className={"bi bi-caret-" + (!display ? "down-fill" : "up-fill")}
            onClick={toggleDisplay}
            role={"button"}
          ></i>
        </div>
        <div className="collapse" ref={collapseRef} id={"name" + "title"}>
          <p className={classes.questionBody}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogQuastion;
