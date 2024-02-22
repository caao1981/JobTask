import React from "react";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routing/ApplicationRoutes";
import Snackbar from "./Providers/SnackbarProvider";
import Theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
// import variables from "./config/env";

const queryClient = new QueryClient();
const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <QueryClientProvider client={queryClient}>
          <Snackbar>
            <ApplicationRoutes />
          </Snackbar>
        </QueryClientProvider>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
