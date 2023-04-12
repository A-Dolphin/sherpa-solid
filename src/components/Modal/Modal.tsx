import { Component, JSX, createSignal, Show } from "solid-js";
import "./Modal.scss";

type ModalProps = {
  heading: string;
  children: JSX.Element;
};

const Modal: Component<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <Show when={isOpen()}>
      <div 
        class="modal-background" 
        onClick={() => setIsOpen(false)}
        onKeyPress={(e) => (e.key || e.code) ==='Escape' ? setIsOpen(false) : null}
      />
      <dialog class="modal">
        <header>
          <h1>{props.heading}</h1>
          <button class="modal-close" onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </header>
        <div class="modal-body">
          {props.children}
        </div>
      </dialog>
    </Show>
  )
}

export default Modal;