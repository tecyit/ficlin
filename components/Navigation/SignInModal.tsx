import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import { closeAuthModals } from '@/redux/AuthModals';
import { AppState } from '@/redux/store';

const SignInModal: FC = () => {
  const dispatch = useDispatch();

  const {
    authModals: { isSignInOpen }
  } = useSelector((state: AppState) => state);

  return (
    <Modal
      title="Sign In"
      openModal={isSignInOpen}
      closeModal={() => dispatch(closeAuthModals())}
      content={<p>hello</p>}
    />
  );
};

export default SignInModal;
