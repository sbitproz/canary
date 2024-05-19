import { Image, Menu, MenuProps } from 'antd';
import { BaseLayout, Footer, Header, Switch } from './Layout.styles';
import { Outlet } from 'react-router-dom';
import { spacings } from '@/styles/spacings';
import { ExportOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors/swap.selectors';
import { ThemeOptions } from '@/theme/theme.constants';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { label: 'Swap', key: '1' },
  { label: 'Explore', key: '2' },
  { label: 'FAQ', key: '3' },
  { label: 'More', key: '4' },
];

export const Layout = () => {
  const { setTheme } = useSwapStore();
  const theme = useAppSelector(selectTheme);

  const onChange = useCallback(() => {
    setTheme(
      theme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT,
    );
  }, [theme, setTheme]);

  return (
    <BaseLayout data-testid="base-layout">
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
        <Switch defaultChecked onChange={onChange} />
      </Header>
      <Outlet />
      <Footer>
        <div>Canary Protocol &#169; 2024</div>
        <div>
          <span style={{ marginRight: 20 }}>UI Mirrors: </span>
          <span style={{ marginRight: 20 }}>
            IPFS <ExportOutlined style={{ marginLeft: 5 }} />
          </span>{' '}
          <span>19542364</span>
        </div>
      </Footer>
    </BaseLayout>
  );
};
