import { Button as ButtonBase } from 'antd';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

export const Button = styled(ButtonBase)`
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const CryptoValue = styled.div`
  margin-left: 23px;
  margin-right: 13px;
`;

export const CryptoButtonContainer = styled.div`
  && button.ant-btn:hover {
    color: ${colors.black100};
  }
`;
