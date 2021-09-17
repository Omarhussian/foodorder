import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import {Fragment} from "react";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElment = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <> 
      {ReactDOM.createPortal(<BackDrop />, portalElment)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElment
      )}
    </>
  );
};
export default Modal;
