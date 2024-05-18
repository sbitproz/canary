import { Image, Menu } from 'antd';
import { BaseLayout, Header } from './Layout.styles';
import { Outlet } from 'react-router-dom';
import { spacings } from '@/styles/spacings';

const items = [
  { label: 'Swap', key: '1' },
  { label: 'Explore', key: '2' },
  { label: 'FAQ', key: '3' },
  { label: 'More', key: '4' },
];

export const Layout = () => {
  return (
    <BaseLayout>
      <Header>
        <Image
          src="canary.svg"
          width={40}
          alt="canary-protocol"
          wrapperStyle={{ marginRight: spacings.S5 }}
        />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Outlet />
    </BaseLayout>
  );
};
