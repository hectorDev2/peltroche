import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Modal = ({
  isShowing,
  hide,
  children,
}: {
  isShowing: boolean;
  hide: () => void;
  children: ReactNode;
}) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            id="modal"
            className={` z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-red-500 bg-opacity-50 transform ${
              isShowing ? "scale-100" : "scale-0"
            } transition-transform duration-300`}
          >
            <div className="bg-black w-[100%] md:w-[600px] lg:w-[700px] md:h-[500px] h-[300px] p-12 grid place-content-center relative -z-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[40px] w-[40px]  hover:scale-110"
                style={{
                  color: "red",
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => hide()}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
