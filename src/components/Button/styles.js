import styled from "styled-components";

export const ButtonTag = styled.div`
    border: none;
    margin: 0;
    background-color: ${props => props.color ? props.color : '#ccc'};
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-radius: 4px;
    color: #000;
    display: inline-block;
    

`