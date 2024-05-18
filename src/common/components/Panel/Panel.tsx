import {
  SignSwapContainer,
  SignSwapContent,
  SignSwapTop,
} from './Panel.styles';
import { ReactNode } from 'react';

interface PanelProps {
  topSection: ReactNode;
  bottomSection: ReactNode;
}

export const Panel = ({ topSection, bottomSection }: PanelProps) => {
  return (
    <SignSwapContainer data-testid="sign-swap" style={{ zIndex: 1000 }}>
      <SignSwapTop data-testid="sign-swap-top">{topSection}</SignSwapTop>
      <SignSwapContent>{bottomSection}</SignSwapContent>
    </SignSwapContainer>
  );
};
