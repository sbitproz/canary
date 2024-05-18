import { Image, List, Typography } from 'antd';
import {
  BottomContainer,
  CryptoTitle,
  SignSwapActions,
  TopSub,
} from './CryptoSubmitted.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useCryptoSubmitted } from './useCryptoSubmitted';
import {
  ExportOutlined,
  FieldTimeOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { formatDate } from 'date-fns/format';

export const CryptoSubmitted = () => {
  const {
    onMakeAnotherSwap,
    cryptoFrom,
    cryptoFromValue,
    cryptoTo,
    cryptoToValue,
  } = useCryptoSubmitted();

  const data = [
    {
      avatar: (
        <Image
          src={cryptoFrom.image}
          preview={false}
          width={30}
          style={{ borderRadius: 50 }}
        />
      ),
      title: (
        <CryptoTitle>
          From: {cryptoFromValue} {cryptoFrom.value} ({cryptoFrom.description})
        </CryptoTitle>
      ),
    },
    {
      avatar: (
        <Image
          src={cryptoTo?.image}
          preview={false}
          width={30}
          style={{ borderRadius: 50 }}
        />
      ),
      title: (
        <CryptoTitle>
          To: {cryptoToValue} {cryptoTo?.value} ({cryptoTo?.description})
        </CryptoTitle>
      ),
    },
    {
      avatar: <SwapOutlined style={{ marginLeft: 8 }} />,
      title: (
        <>
          <b>TX ID:</b> 0x1234abcd5678efgh9101ijklmnop1234
        </>
      ),
    },
    {
      avatar: <FieldTimeOutlined style={{ marginLeft: 8 }} />,
      title: (
        <>
          <b>Timestamp:</b> {formatDate(new Date(), 'dd MMM yyyy hh:mm:ss')}
        </>
      ),
    },
  ];

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
                marginBottom: 30,
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
              dataSource={data}
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
