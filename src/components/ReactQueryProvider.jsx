"use client";

import store from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
const queryClient = new QueryClient();
const ReactQueryProvider = ({ children }) => {
  return (
        <Provider store={store}>
    <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    </Provider>
  );
};

export default ReactQueryProvider;
