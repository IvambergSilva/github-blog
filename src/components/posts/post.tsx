import { PostContainer } from "./post.styles";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useContextSelector } from "use-context-selector";
import { BlogContext } from "../../context/blog-context";

interface PostProps {
    post: {
        title: string;
        number: number;
        body: string;
        updated_at: string;
    }
}

export function Post({ post }: PostProps) {
    const getIssueById = useContextSelector(BlogContext, ({ getIssueById }) => getIssueById);

    function handleGetIssueById(id: number) {
        getIssueById(id)
    }

    return (
        <PostContainer
            key={post.number}
            onClick={() => handleGetIssueById(post.number)}
        >
            <div>
                <h2>{post.title}</h2>
                <span>{formatDistanceToNow(post.updated_at, {
                    addSuffix: true,
                    locale: ptBR
                })}</span>
            </div>
            <p>{post.body}</p>
        </PostContainer>
    )
}