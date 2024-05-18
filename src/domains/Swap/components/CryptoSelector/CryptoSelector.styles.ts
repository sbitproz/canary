import { colors } from '@/styles/colors';
import { spacings } from '@/styles/spacings';
import styled from '@emotion/styled';
import { InputNumber as InputNumberBase } from 'antd';

export const InputLabel = styled.div`
  font-weight: 400;
  line-height: 20px;
  color: ${colors.grey180};
  margin-bottom: ${spacings.S5};
`;

export const InputNumber = styled(InputNumberBase)`
  background: transparent;
  border: none;

  input.ant-input-number-input {
    font-size: 30px;
    font-weight: 600;
    color: ${colors.black100};
    line-height: 10px;
    background: transparent;
    padding-left: 0px;
  }
  flex-grow: 1;

  :focus-within,
  :hover,
  :focus {
    background-color: transparent;
    border: transparent;
    box-shadow: none;
  }
`;

export const CryptoSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.grey190};
  border-radius: ${spacings.S7}px;
  padding: ${spacings.S7}px;
  max-width: 100%;
  margin-bottom: ${spacings.S2}px;
`;

export const ConversionLabel = styled.div`
  font-weight: 400;
  line-height: 14px;
  color: ${colors.grey180};
`;

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
