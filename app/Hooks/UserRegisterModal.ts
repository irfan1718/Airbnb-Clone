import { create } from 'zustand';

interface RegisterModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userRegisterModal = create<RegisterModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userRegisterModal;
