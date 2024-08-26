import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.overlay};
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 523px;
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    border-radius: 4rem;
    border: 2px solid ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-background"]};

    &::-webkit-scrollbar {
        width: 0px;
    }

    @media screen and (max-width: 768px) {
        width: 85%;
    }
`

export const CloseButton = styled(Dialog.Close)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${props => props.theme.blue};
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    height: fit-content;
    padding: 0.4rem 0;
    background: transparent;
    border: none;
    
    &:hover {
        border-bottom: 1px solid ${props => props.theme.blue};
        transition: 0.1s;
    };

    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const PostDetailsContent = styled.section`
    max-width: 864px;
    width: 100%;
    background: ${props => props.theme["base-background"]};
    box-shadow: 0 2px 28px ${props => props.theme["base-box-shadow"]};
    
    aside {
        padding: 3.2rem;
        background: ${props => props.theme["base-profile"]};
        border-radius: 10px;
        width: 100%;

        section {
            display: flex;
            justify-content: space-between;
            text-transform: uppercase;
            font-size: 1.2rem;
            
            a {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                color: ${props => props.theme.blue};
                font-weight: 700;
                cursor: pointer;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                height: fit-content;
                padding: 0.4rem 0;
                
                &:hover {
                    border-bottom: 1px solid ${props => props.theme.blue};
                    transition: 0.1s;
                };

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            svg {
                font-size: 1.2rem;
            }
        }

        h1 {
            font-weight: 700;
            font-size: 2.4rem;
            color: ${props => props.theme["base-title"]};
            margin: 2rem 0 1.5rem;
        }

        .info {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2.4rem;
    
            div, a {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                padding: 0 0.4rem;

                svg {
                    color: ${props => props.theme["base-label"]};
                    font-size: 1.8rem;
                }
    
                span {
                    color: ${props => props.theme["base-subtitle"]};
                    font-size: 1.6rem;
                }
            }

            a {
                text-decoration: none;
            }
        }
    }
    
    .content {
        padding: 4rem 3.2rem;
        background: ${props => props.theme["base-background"]};
        
        p {
            font-size: 1.6rem;
            color: ${props => props.theme["base-text"]};
            line-height: 160%;
        }
    }

    @media screen and (max-width: 768px) {
        .content {
            padding-top: 2rem;
        }
    }
`