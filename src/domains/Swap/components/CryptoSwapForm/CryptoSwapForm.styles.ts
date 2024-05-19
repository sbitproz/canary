import styled from '@emotion/styled';
import { Button } from 'antd';

export const SwapFormContainer = styled.div`
  max-width: 450px;
`;

export const SwapUSDConversion = styled.div`
  margin-top: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.brandColors.inverseText100};
`;

export const SwitchButton = styled(Button)`
  position: absolute;
  right: 210px;
  top: 100px;
`;
