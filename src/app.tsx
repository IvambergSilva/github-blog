import { ThemeProvider } from "styled-components";
import { BlogContextProvider } from "./context/blog-context";
import { GlobalStyles } from "./styles/global-styles";
import { DefaultTheme } from "./styles/theme-default/theme-default";
import { Home } from "./components/home/home";
import { DefaultLayout } from "./components/default-layout/default-layout";

export function App() {
    return (
        <>
            <ThemeProvider theme={DefaultTheme}>
                <BlogContextProvider>
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                    <GlobalStyles />
                </BlogContextProvider>
            </ThemeProvider>
        </>
    )
}
