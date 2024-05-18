import { Button as ButtonBase } from 'antd';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { DownOutlined } from '@ant-design/icons';

export const Button = styled(ButtonBase)`
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  height: 40px;
`;

export const CryptoValue = styled.div`
  margin-left: 30px;
  margin-right: 13px;
`;

export const CryptoButtonContainer = styled.div`
  && button.ant-btn:hover {
    color: ${colors.black100};
  }
`;

export const DownArrowIcon = styled(DownOutlined)`
  position: absolute;
  right: 8px;
  top: 12px;
`;
