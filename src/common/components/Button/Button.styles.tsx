import { Button as ButtonBase } from 'antd';
import styled from '@emotion/styled';

export const Button = styled(ButtonBase)`
  border-radius: 6px;
  font-size: 14px;
  padding: 6.4px 40px;
  height: 40px;
`;

export const LargeButton = styled(ButtonBase)`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  height: 55px;
  color: ${({ theme }) => theme.brandColors.text100};

  :disabled {
    background: ${({ theme }) => theme.brandColors.disabled100};
  }
`;
