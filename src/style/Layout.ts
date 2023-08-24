import { styled, css } from 'styled-components';

const CommonStyle = css`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px 20px;
  background-color: var(--bg);
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Layout = styled.div`
  ${CommonStyle}
`;
