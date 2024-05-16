import { useSwap } from "./useSwap";
import { Content } from "./Swap.styles";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { somethingWentWrong } from "@components/ErrorBoundary/ErrorBoundary.utils";

const userErrorLabel = somethingWentWrong("the user table");

export const Swap = () => {
  useSwap();

  return (
    <>
      <Content>
        <ErrorBoundary label={userErrorLabel}>Swap</ErrorBoundary>
      </Content>
    </>
  );
};
