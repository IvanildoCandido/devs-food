import styled from 'styled-components';

export const LinkArea = styled.a`
  border-radius: 10px;
  background-color: ${(props) => (props.active ? '#0b4d0b' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;
