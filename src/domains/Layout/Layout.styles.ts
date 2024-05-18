import { colors } from '@/styles/colors';
import { Switch as SwitchBase } from 'antd';
import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Header: HeaderBase, Footer: FooterBase } = Layout;

export const BaseLayout = styled(Layout)`
  height: 100vh;
  background: ${({ theme }) => theme.brandColors.background100};
`;

export const Header = styled(HeaderBase)`
  border-bottom: 1px solid ${colors.grey187};
  display: flex;
`;

export const Footer = styled(FooterBase)`
  background: ${({ theme }) => theme.brandColors.footer100};
  color: ${({ theme }) => theme.colors.white100};
  border-bottom: 1px solid ${colors.grey187};
  display: flex;
  justify-content: space-between;
`;

export const Switch = styled(SwitchBase)`
  margin-top: 2rem;
  .ant-switch-inner {
    background: rgba(0, 0, 0, 0.25) !important;
  }
`;
