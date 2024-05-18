import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Header: HeaderBase, Footer: FooterBase } = Layout;

export const BaseLayout = styled(Layout)`
  height: 100vh;
  background: linear-gradient(#ffff, #faecd8);
`;

export const Header = styled(HeaderBase)`
  border-bottom: 1px solid ${colors.grey187};
  display: flex;
`;

export const Footer = styled(FooterBase)`
  background: ${colors.grey125};
  border-bottom: 1px solid ${colors.grey187};
  display: flex;
`;
