import { colors } from '@/styles/colors';
import { Steps } from 'antd';
import styled from '@emotion/styled';

export const SignSwapSteps = styled(Steps)`
  .ant-steps-item-title {
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .ant-steps-item-title {
    color: ${colors.grey150} !important;
  }
`;

export const SignSwapActions = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TopSub = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.grey120};
`;
