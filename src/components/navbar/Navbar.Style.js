import styled from "styled-components";


const Wrapper = styled.div`
list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #6200ea;
    li{
        display: flex;
        float: left; 
        a{
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            &:hover{
                background-color: #33691e;
            }
        }
    }

`;



export { Wrapper };