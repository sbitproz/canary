import styled from '@emotion/styled';
import { Modal as ModalBase } from 'antd';

export const Modal = styled(ModalBase)`
  .ant-modal-content {
    background: ${({ theme }) => theme.brandColors.text100};
    .ant-typography {
      color: ${({ theme }) => theme.brandColors.inverseText100};
    }
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 455px;
  }

  h1.ant-typography {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .ant-modal-footer {
    display: flex;

    button {
      flex-grow: 1;
    }
  }
`;
