import { Tabs as TabsBase } from "antd";
import { spacings } from "@/styles/spacings";
import styled from "@emotion/styled";
import {
  Content as ContentBase,
  Header as HeaderBase,
} from "antd/es/layout/layout";
import { Flex } from "antd";
import { colors } from "@/styles/colors";

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
`;

export const Tabs = styled(TabsBase)`

  width: 450px;
  div.ant-tabs-tab {
    div.ant-tabs-tab-btn {
      color: ${colors.black100};
    }
  }

  .ant-tabs-tabpane, .ant-tabs-content {
    height: 291px;
  }
  margin-top: 3rem;
`;

// <div role="tab" aria-selected="true" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-5-tab-1" aria-controls="rc-tabs-5-panel-1">Tab 1</div>
