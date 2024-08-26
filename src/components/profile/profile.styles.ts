import styled from "styled-components";

export const ProfileContainer = styled.section`
    background: ${props => props.theme["base-profile"]};
    padding: 3.2rem;
    display: flex;
    align-items: center;
    max-width: 864px;
    margin: auto;
    box-shadow: 0 2px 28px ${props => props.theme["base-box-shadow"]};
    margin-top: -88px;
    position: relative;

    section {
        display: grid;
        width: 100%;
        gap: 0 3.2rem;
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(3, auto);
        grid-template-areas: 
            "avatar title"
            "avatar description"
            "avatar info";

        .avatar {
            min-width: 148px;
            width: 148px;
            aspect-ratio: 1/1;
            border-radius: 8px;
            overflow: hidden;
            grid-area: avatar;
    
            img {
                width: 100%;
                aspect-ratio: 1/1;
            }
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            grid-area: title;
            
            h1 {
                color: ${props => props.theme["base-title"]};
                font-size: 2.4rem;
                font-weight: 700;
            }

            a {
                color: ${props => props.theme.blue};
                font-weight: 700;
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                gap: 0.8rem;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                height: fit-content;
                padding: 0.4rem 0;
                text-transform: uppercase;
                
                &:hover {
                    border-bottom: 1px solid ${props => props.theme.blue};
                    transition: 0.1s;
                };

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                svg {
                    font-size: 1.2rem;
                }
            }
        }
        
        p {
            font-size: 1.6rem;
            color: ${props => props.theme["base-text"]};
            margin: 0.8rem 0 2.4rem;
            line-height: 160%;
            grid-area: description;
        }

        .info {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            grid-area: info;
    
            div, a {
                display: flex;
                gap: 0.8rem;
                align-items: center;
                padding: 0 0.4rem;
                color: ${props => props.theme["base-label"]};

                svg {
                    font-size: 1.8rem;
                }

                span {
                    color: ${props => props.theme["base-subtitle"]};
                    font-size: 1.6rem;
                    text-align: center;
                }
            }
            
            a {
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 768px) {
        section {
            grid-template-rows: repeat(2, auto);
            grid-template-areas: 
                "avatar title"
                "description description"
                "info info";
            gap: 2.5rem;
            
            .avatar {
                grid-area: avatar;
            }
            
            .info {
                grid-area: info;
                flex-direction: column;
            }
            
            .header {
                grid-area: title;
                flex-direction: column;
                justify-content: center;
                gap: 1rem;
            }

            p {
                grid-area: description;
                margin: 0;
                text-align: center;
            }
        }
    }
`