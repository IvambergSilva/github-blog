import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme["base-background"]};
`