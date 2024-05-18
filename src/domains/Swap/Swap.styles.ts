import { Tabs as TabsBase } from 'antd';
import { spacings } from '@/styles/spacings';
import styled from '@emotion/styled';
import {
  Content as ContentBase,
  Header as HeaderBase,
} from 'antd/es/layout/layout';
import { Flex } from 'antd';
import { colors } from '@/styles/colors';

export const RowWrapper = styled(Flex)`
  flex-direction: row;
`;

export const IconWrapper = styled(Flex)`
  margin-right: ${spacings.S6}px;
`;

export const Header = styled(HeaderBase)`
  height: 80px;
  padding-top: 20px;
  background: ${colors.white100};
  display: flex;
  justify-content: space-between;
`;

export const Content = styled(ContentBase)`
  overflow-y: auto;
  padding: 50px;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  position: relative;
`;

export const Tabs = styled(TabsBase)`
  width: 450px;
  div.ant-tabs-tab {
    div.ant-tabs-tab-btn {
      color: ${({ theme }) => theme.brandColors.inverseText100};
      font-weight: 600;
    }
  }

  .ant-tabs-tabpane,
  .ant-tabs-content {
    height: 291px;
  }
  margin-top: 3rem;
`;

export const Background = styled.div`
  background: url(canary-background3.svg) no-repeat;
  background-size: auto 85vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -150px;
  right: 0;
  min-width: 1000px;
`;
