import styled from '@emotion/styled';

export const Brick = styled('span')<{ rgb: [number, number, number] }>`
  display: flex;
  width: 24px;
  height: 24px;
  background-color: ${({ rgb: [r, g, b] }) => `rgb(${r}, ${g}, ${b})`};
  font-weight: 700;
`;
