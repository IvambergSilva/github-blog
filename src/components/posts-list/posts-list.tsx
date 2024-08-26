import { useContextSelector } from "use-context-selector";
import { BlogContext } from "../../context/blog-context";
import { ListPostContainer } from "./posts-list.styles";
import { Post } from "../posts/post";

export function PostsList() {
    const posts = useContextSelector(BlogContext, ({ posts }) => posts)
    
    return (
        <ListPostContainer>
            <>
                {posts && (
                    posts.map((post) => {
                        return (
                            <Post
                                key={post.number}
                                post={post}
                            />
                        )
                    })
                )}
            </>
        </ListPostContainer>
    )
}
