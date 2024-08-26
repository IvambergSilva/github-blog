import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseButton, Content, Overlay, PostDetailsContent } from "./post-details-modal.styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCalendarDay, faChevronLeft, faComment, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { useContextSelector } from "use-context-selector";
import { BlogContext } from "../../context/blog-context";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import * as Dialog from "@radix-ui/react-dialog";

export function PostDetailsModal() {
    const currentPost = useContextSelector(BlogContext, ({ currentPost }) => currentPost)

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                {currentPost && (
                    <PostDetailsContent>
                        <aside>
                            <section>
                                <CloseButton>
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                    />
                                    <span>Voltar</span>
                                </CloseButton>
                                <a
                                    href={currentPost.html_url}
                                    target="_blank"
                                >
                                    <span>Ver no GitHub</span>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faExternalLink}
                                        />
                                    </span>
                                </a>
                            </section>

                            <h1>{currentPost.title}</h1>

                            <div className="info">
                                <a
                                    href={currentPost.user.html_url}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                    />
                                    <span>{currentPost.user.login}</span>
                                </a>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCalendarDay}
                                    />
                                    <span>{formatDistanceToNow(currentPost.updated_at, {
                                        addSuffix: true,
                                        locale: ptBR
                                    })}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faComment}
                                    />
                                    <span>{currentPost.comments} {currentPost.comments === 1 ? 'comentário' : 'comentários'}</span>
                                </div>
                            </div>
                        </aside>
                        <div className="content">
                            <p>{currentPost.body}</p>
                        </div>
                    </PostDetailsContent>
                )}
            </Content>
        </Dialog.Portal>
    )
}
