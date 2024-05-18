import { Image, Typography } from 'antd';
import { PropsWithChildren } from 'react';
import { Modal } from './MetaMaskModal.styles';

interface MetaMaskModalProps {
  isModalOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
  cancelLabel?: string;
  okLabel?: string;
  title?: string;
}

export const MetaMaskModal = ({
  isModalOpen,
  children,
  okLabel = 'OK',
  onOk,
  cancelLabel = 'Cancel',
  onCancel,
  title = 'Welcome',
}: PropsWithChildren<MetaMaskModalProps>) => {
  return (
    <Modal
      maskClosable={false}
      width={300}
      open={isModalOpen}
      onOk={onOk}
      style={{ top: 20, right: 20 }}
      okText={okLabel}
      onCancel={onCancel}
      cancelText={cancelLabel}
    >
      <Image
        src="MetaMask_Fox.svg.png"
        preview={false}
        width={100}
        style={{ marginTop: 30, marginBottom: 20 }}
      />
      <Typography.Title>{title}</Typography.Title>
      <Typography.Text>The decentralized web awaits</Typography.Text>
      {children}
    </Modal>
  );
};
