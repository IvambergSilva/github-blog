import styled from "styled-components";

export const ListPostContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    padding: 0 4rem 4rem;
    max-width: 864px;
    background: ${props => props.theme["base-background"]};

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`