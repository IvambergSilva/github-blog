import { ReactNode, useCallback, useEffect, useState } from "react"
import { createContext } from "use-context-selector"
import { apiGitHubUser, apiGitHubSearch, apiIssues } from "../lib/api"

interface BlogContextProps {
    profile: ProfileProps | null;
    posts: PostsProps[] | null;
    currentPost: PostsProps | null;
    fetchIssues: (query?: string) => void;
    getIssueById: (id: number) => void;
}

export const BlogContext = createContext({} as BlogContextProps)

interface BlogContextProviderProps {
    children: ReactNode
}

interface ProfileProps {
    name: string;
    avatar_url: string;
    followers: number;
    bio: string;
    html_url: string;
    login: string;
    company: string;
}

export interface PostsProps {
    title: string;
    number: number;
    body: string;
    updated_at: string;
    html_url: string;
    comments: number;
    user: {
        login: string;
        html_url: string
    }
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
    const [profile, setProfile] = useState<ProfileProps | null>(null)

    async function getProfile() {
        const {
            name, avatar_url, bio, followers, html_url, login, company
        }: ProfileProps = (await apiGitHubUser.get('/IvambergSilva')).data

        const profile: ProfileProps = {
            name, avatar_url, bio, followers, html_url, login, company
        }

        setProfile(profile)
    }

    const [posts, setPosts] = useState<PostsProps[] | null>(null)

    const fetchIssues = useCallback(async (query?: string) => {
        const username = "IvambergSilva";
        const repo = "github-blog";

        if (!query) query = ""

        const params = `${query} repo:${username}/${repo}`;

        const response = await apiGitHubSearch.get('', {
            params: {
                q: params,
                _sort: 'updated_at',
                _order: 'desc',
            }
        })

        const posts: PostsProps[] = response.data.items

        setPosts(posts)
    }, [])

    useEffect(() => {
        getProfile()
        fetchIssues()
    }, [])

    const [currentPost, setcurrentPost] = useState<PostsProps | null>(null)

    const getIssueById = useCallback(async (id: number) => {
        const username = "IvambergSilva";
        const repo = "github-blog";

        const response = await apiIssues.get(`/${username}/${repo}/issues/${id}`)

        const post: PostsProps = response.data

        setcurrentPost(post)
    }, [])

    return (
        <BlogContext.Provider
            value={{
                profile,
                posts,
                fetchIssues,
                currentPost,
                getIssueById
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}
