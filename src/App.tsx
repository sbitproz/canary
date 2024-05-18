import { useApiInterceptor } from "./api/hooks/useApiInterceptor";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";
import { store } from "./store/store";

function App() {
  const { ready } = useApiInterceptor();

  if (!ready) {
    return null;
  }

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
