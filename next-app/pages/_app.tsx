import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CssVarsProvider>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</CssVarsProvider>
	);
}
