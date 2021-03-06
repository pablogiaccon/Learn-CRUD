import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.div<IContainerProps>`
  border: 0;
  border-bottom: 2px solid #dbdbdb;
  height: 4.8rem;
  position: relative;
  padding: 1.6rem 1.2rem 0;

  width: 100%;
  color: red;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 2rem;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused
      ? css`
          input {
            color: #555555;
          }
        `
      : css`
          input {
            color: #efeeed;
          }
        `}

  label {
    position: absolute;
    top: 0;
    left: 0;
    color: #999999;
    font-weight: bold;
    font-size: 1.2rem;
  }

  input {
    background: transparent;
    flex: 1;
    height: 100%;
    border: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 0.8rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
