import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ModalWrapper from '@/components/Modal/Modal';

interface IModalsProps {
  title?: string;
  openModal: boolean;
  closeModal: () => void;
  content: ReactNode;
}

const Modal: FC<IModalsProps> = ({ openModal, title, closeModal, content }: IModalsProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <ModalWrapper
          openModal={openModal}
          title={title}
          closeModal={closeModal}
          content={content}
        />,
        document.querySelector('#mymodal')
      )
    : null;
};

export default Modal;
