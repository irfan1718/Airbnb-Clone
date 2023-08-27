import { create } from 'zustand';

interface LoginModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userLoginModal = create<LoginModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userLoginModal;
