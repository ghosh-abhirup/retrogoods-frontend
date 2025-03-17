"use client";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import useLoginStore from "../../store/LoginStore";

const UserLogProcess = () => {
  const { isRegisterModalOpen, isLoginModalOpen, setLoginModal, setRegisterModal, openRegisterModal, openLoginModal, closeRegisterModal, closeLoginModal } = useLoginStore();

  const openSignInModal = () => {
    openLoginModal();
    closeRegisterModal();
  };
  const openRegisterModalFn = () => {
    openRegisterModal();
    closeLoginModal();
  };

  return (
    <div>
      <LoginModal open={isLoginModalOpen} onOpenChange={setLoginModal} openRegisterModal={openRegisterModalFn} closeLoginModal={closeLoginModal} />
      <RegisterModal open={isRegisterModalOpen} onOpenChange={setRegisterModal} openSignInModal={openSignInModal} />
    </div>
  );
};

export default UserLogProcess;
