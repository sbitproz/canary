import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { Layout } from 'antd';
const { Header: HeaderBase } = Layout;

export const BaseLayout = styled(Layout)`
  height: 100vh;
`;

export const Header = styled(HeaderBase)`
  border-bottom: 1px solid ${colors.grey187};
  display: flex;
`;
