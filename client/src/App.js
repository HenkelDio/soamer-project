import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import Global from "./styles/Global";
import _default from "./styles/theme/default";

export default function App() {
  return(
    <ThemeProvider theme={_default}>
      <BrowserRouter>
        <Global />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
