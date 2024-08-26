import * as Dialog from "@radix-ui/react-dialog";
import { PostDetailsModal } from "../post-details/post-details-modal"
import { PostsList } from "../posts-list/posts-list";
import { HomeContainer } from "./home.styles";
import { SearchForm } from "../search-form/search-form";

export function Home() {
    return (
        <HomeContainer>
            <SearchForm />
            <Dialog.Root>
                <Dialog.Trigger>
                    <PostsList />
                </Dialog.Trigger>
                <PostDetailsModal />
            </Dialog.Root>
        </HomeContainer>
    )
}
