import { List, Typography } from 'antd';
import {
  BottomContainer,
  SignSwapActions,
  TopSub,
} from './CryptoSubmitted.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useCryptoSubmitted } from './useCryptoSubmitted';
import { ExportOutlined } from '@ant-design/icons';

export const CryptoSubmitted = () => {
  const { onMakeAnotherSwap, transationData } = useCryptoSubmitted();

  return (
    <Panel
      topSection={<TopSub>Swap Complete</TopSub>}
      bottomSection={
        <>
          <BottomContainer>
            <div
              style={{
                gap: 10,
                display: 'flex',
                marginBottom: 20,
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography.Title level={3}>Order Submitted</Typography.Title>
              <Typography.Text>
                <a
                  href="https://www.blockchain.com/explorer"
                  rel="noreferrer"
                  target="_blank"
                >
                  View on Explorer <ExportOutlined />
                </a>
              </Typography.Text>
            </div>
            <List
              style={{ marginBottom: 20 }}
              itemLayout="horizontal"
              dataSource={transationData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta avatar={item.avatar} title={item.title} />
                </List.Item>
              )}
            />
            <div style={{ marginBottom: 30 }}>
              Thank you for using our service. If you have any questions or need
              further assistance, please contact our support team.
            </div>
          </BottomContainer>

          <SignSwapActions>
            <LargeButton type="primary" onClick={onMakeAnotherSwap}>
              Make another swap
            </LargeButton>
          </SignSwapActions>
        </>
      }
    />
  );
};
