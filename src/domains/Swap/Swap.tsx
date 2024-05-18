import { type TabsProps } from "antd";
import { Tabs } from "./Swap.styles";
import { useSwap } from "./useSwap";
import { Content } from "./Swap.styles";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { somethingWentWrong } from "@components/ErrorBoundary/ErrorBoundary.utils";
import { CryptoSwapForm } from "./components/CryptoSwapForm/CryptoSwapForm";
import { ComingSoon } from "@/common/components/ComingSoon/ComingSoon";
import { MetaMaskModal } from "@/common/components/MetaMaskModal/MetaMaskModal";
import { metaMaskProps } from "./Swap.constants";
import { SignSwap } from "./components/SignSwap/SignSwap";
import { CryptoSubmitted } from "./components/CryptoSubmitted/CryptoSubmitted";
import { SwapStage } from "@/store/reducers/swapReducer";

const userErrorLabel = somethingWentWrong("the swap page");

export const Swap = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const {
    isMetaMaskVisible,
    onMetaMaskProgress,
    onCloseMetaMask,
    swapStage,
    onProgress,
  } = useSwap();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Swap",
      children: <CryptoSwapForm />,
    },
    {
      key: "2",
      label: "Limit",
      children: <ComingSoon />,
    },
    {
      key: "3",
      label: "TWAP",
      children: <ComingSoon />,
    },
  ];

  const Component = () => {
    if ([SwapStage.SIGN_SWAP, SwapStage.SIGNING_SWAP].includes(swapStage)) {
      return <SignSwap onClickSign={onProgress} />;
    }

    if ([SwapStage.SUBMITTING_SWAP].includes(swapStage)) {
      return <CryptoSubmitted />;
    }

    return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
  };

  return (
    <>
      <MetaMaskModal
        {...metaMaskProps[swapStage]}
        isModalOpen={isMetaMaskVisible}
        onOk={onMetaMaskProgress}
        onCancel={onCloseMetaMask}
      />
      <Content>
        <ErrorBoundary label={userErrorLabel}>
          <Component />
        </ErrorBoundary>
      </Content>
    </>
  );
};
