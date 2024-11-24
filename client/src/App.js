import Router from "./routes";
import { ThemeProvider } from "styled-components";
import { Colors } from "./Utils";

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <section>
        <Router />
      </section>
    </ThemeProvider>
  );
}

export default App;
