import ReactModal from "react-modal";
import { Button } from "./styles";
import { Paragraph, Title } from "../Typography";
import { Warning } from "phosphor-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

ReactModal.setAppElement("#modals");

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 500,
          maxHeight: 200,
          width: "100%",
          height: "100%",
          background: "white",
          padding: "2rem 2rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        },

        overlay: {
          background: "$brand-yellow",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <div>
        <Warning size={56} color="#FFEF5C" />
        <Title>Em construção...</Title>
        <Paragraph fonts="lato">
          Esse portfólio ainda está sendo desenvolvido, entre algumas semanas o
          projeto será finalizado =)
        </Paragraph>
        <Button onClick={onClose}>Fechar</Button>
      </div>
    </ReactModal>
  );
}
