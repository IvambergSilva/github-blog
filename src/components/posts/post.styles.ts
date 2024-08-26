import styled from "styled-components";

export const PostContainer = styled.section`
    padding: 3.2rem;
    border-radius: 10px;
    background: ${props => props.theme["base-post"]};
    cursor: pointer;
    border: 2px solid transparent;
    text-decoration: none;
    
    div {
        display: flex;
        margin-bottom: 2rem;
        justify-content: space-between;
        gap: 2.5rem;
        
        h2 {
            font-size: 2rem;
            font-weight: 700;
            color: ${props => props.theme["base-title"]};
            line-height: 160%;
            text-align: left;
        }

        span {
            font-size: 1.4rem;
            color: ${props => props.theme["base-span"]};
            line-height: 160%;
            min-width: fit-content;
            
            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: 1.6rem;
        max-height: 11.2rem;
        line-height: 160%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        text-align: left;
    }

    &:hover {
        border: 2px solid ${props => props.theme["base-label"]};
        transition: 0.1s;
    }
`