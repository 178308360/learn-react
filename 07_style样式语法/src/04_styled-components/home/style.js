import styled from 'styled-components';
const HomeWrapper = styled.div`
  font-size: 50px;
  color: blue;
  .content {
    background-color: blue;

    li {
      color: #fff;

      &.active {
        color: red;
      }
      &:hover {
        color: gray;
      }
      &::after {
        content: 'aaa';
      }
    }
  }
`;
const TitleWrapper = styled.h2`
  text-decoration: underline;
  font-size:${props=> props.theme.fontSize};
`;
export { HomeWrapper, TitleWrapper };
