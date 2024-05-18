import { Image } from 'antd';
import { ComingSoonContainer } from './ComingSoon.styles';

export const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <Image
        src="canary.svg"
        alt="Coming soon"
        preview={false}
        width={100}
        style={{ marginBottom: 20 }}
      />
      <div>Coming soon...</div>
    </ComingSoonContainer>
  );
};
