import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #6200ea;
  justify-content: space-between;
  .menu,
  .auth {
    list-style-type: none;
    display: flex;
    margin-bottom: 0;

    a {
      display: block;
      text-decoration: none;
      color: white;
      text-align: center;
      padding: 14px 16px;
      &:hover {
        background-color: #5002bf;
      }
    }
 
`;

export { Wrapper };
