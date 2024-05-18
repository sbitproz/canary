import { Button, List, Typography } from 'antd';
import { BottomContainer, SignSwapActions } from './CryptoSubmitted.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useCryptoSubmitted } from './useCryptoSubmitted';
import { ExportOutlined } from '@ant-design/icons';

export const CryptoSubmitted = () => {
  const { onMakeAnotherSwap, transationData } = useCryptoSubmitted();

  return (
    <Panel
      topSection={
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Order Submitted
        </Typography.Title>
      }
      bottomSection={
        <>
          <BottomContainer>
            <div
              style={{
                display: 'flex',
                marginBottom: 20,
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography.Text>
                <Button
                  target="_blank"
                  href="https://www.blockchain.com/explorer"
                >
                  View on Explorer <ExportOutlined />
                </Button>
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
