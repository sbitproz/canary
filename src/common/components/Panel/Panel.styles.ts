import { colors } from "@/styles/colors";
import { spacings } from "@/styles/spacings";
import styled from "@emotion/styled";

export const SignSwapContainer = styled.div`
  width: 450px;
  border-radius: ${spacings.S5}px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignSwapTop = styled.div`
  background-color: ${({ theme }) => theme.brandColors.primary195};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  border-radius: ${spacings.S5}px ${spacings.S5}px 0 0;
`;

export const SignSwapContent = styled.div`
  width: 100%;
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  border: 1px solid ${colors.grey185};
  border-radius: 0 0 ${spacings.S5}px ${spacings.S5}px;

  && h4 {
    margin-top: 0;
    margin-bottom: 0;
    color: ${colors.grey150};
  }

  && h3 {
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
