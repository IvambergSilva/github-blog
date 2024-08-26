import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 7.2rem auto 4.8rem;
    padding: 0 4rem;
    max-width: 864px;
    
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        h3 {
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.8rem;
        }

        span {
            font-size: 1.4rem;
            color: ${props => props.theme["base-span"]};
        }
    }

    input {
        color: ${props => props.theme["base-span"]};
        background: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        font-size: 1.6rem;
        border-radius: 6px;
        padding: 1.2rem 1.6rem;
        outline: none;
        border: 1px solid transparent;

        &:focus{
            border: 1px solid ${props => props.theme.blue};
        }

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }

    @media screen and (max-width: 768px) {
        margin: 4rem 0 3rem;
    }
`