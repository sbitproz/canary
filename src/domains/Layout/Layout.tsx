import { Image, Menu } from 'antd';
import { BaseLayout, Footer, Header } from './Layout.styles';
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
          src="canary-white.svg"
          width={40}
          preview={false}
          alt="canary-protocol"
          wrapperStyle={{ marginRight: spacings.S5 }}
        />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ marginLeft: 15, flex: 1, minWidth: 0 }}
        />
      </Header>
      <Outlet />
      <Footer>Footer</Footer>
    </BaseLayout>
  );
};
