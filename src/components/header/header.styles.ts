import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["base-profile"]};
    width: 100%;
    height: 296px;
    display: flex;
    justify-content: center;
    position: relative;

    .logo {
        margin-top: 64px;
        width: 148px;
        min-width: 148px;
        height: fit-content;
    }

    .effect {
        position: absolute;
        height: 188px;
        top: 50%;
        transform: translateY(-50%);

        &:first-child {
            left: 0;
        }

        &:last-child {
            right: 0;
        }
    }
`