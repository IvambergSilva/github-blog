import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./search-form.styles";
import * as z from "zod";
import { useContextSelector } from "use-context-selector";
import { BlogContext } from "../../context/blog-context";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm() {
    const { posts, fetchIssues } = useContextSelector(BlogContext, ({ posts, fetchIssues }) => {
        return {
            posts,
            fetchIssues
        }
    })

    const searchPostFormDataSchema = z.object({
        query: z.string()
    })

    type SearchPostFormData = z.infer<typeof searchPostFormDataSchema>

    const {
        register,
        handleSubmit,
        reset
    } = useForm<SearchPostFormData>({
        resolver: zodResolver(searchPostFormDataSchema)
    })

    function handleSearchForm({ query }: SearchPostFormData) {
        fetchIssues(query)
        reset();
    }

    return (
        <SearchFormContainer
            onSubmit={handleSubmit(handleSearchForm)}
        >
            <div>
                <h3>Publicações</h3>
                <span>{posts?.length} publicações</span>
            </div>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register("query")}
            />
        </SearchFormContainer>
    )
}
