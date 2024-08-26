import "styled-components";
import { DefaultTheme } from "../styles/theme-default/theme-default";

type ThemeProps = typeof DefaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeProps { };
}