import Router from "./routes";
import { ThemeProvider } from "styled-components";
import { Colors } from "./Utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <section>
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
      </section>
    </ThemeProvider>
  );
}

export default App;
