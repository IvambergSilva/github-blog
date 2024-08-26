import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer } from "./profile.styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faExternalLink, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useContextSelector } from "use-context-selector";
import { BlogContext } from "../../context/blog-context";

export function Profile() {
    const profile = useContextSelector(BlogContext,
        ({ profile }) => profile)

    return (
        <ProfileContainer>
            <section>
                <div className="avatar">
                    <img src={profile?.avatar_url} alt={profile?.name} />
                </div>
                <header className="header">
                    <h1>{profile?.name}</h1>
                    <a
                        href={profile?.html_url}
                        target="_blank"
                    >
                        <span>GitHub</span>
                        <FontAwesomeIcon
                            icon={faExternalLink}
                        />
                    </a>
                </header>

                <p>{profile?.bio}</p>

                <div className="info">
                    <a
                        href={profile?.html_url}
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                        />
                        <span>{profile?.login}</span>
                    </a>
                    <div>
                        <FontAwesomeIcon
                            icon={faBuilding}
                        />
                        <span>{profile?.company}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faUserGroup}
                        />
                        <span>{profile?.followers} seguidores</span>
                    </div>
                </div>
            </section>
        </ProfileContainer >
    )
}
