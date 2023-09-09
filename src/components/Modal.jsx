import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hiddenState: { opacity: 0, translateY: 30 },
          visibleState: { opacity: 1, translateY: 0 },
        }}
        initial="hiddenState"
        animate="visibleState"
        exit="hiddenState"
        transition={{ type: "spring", duration: 0.8 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
