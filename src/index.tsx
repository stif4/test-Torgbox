import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import AppLoader from "./hok/AppLoader";

render(
  <Provider store={store}>
    <AppLoader>
      <App />
    </AppLoader>
  </Provider>,
  document.getElementById("root")
);
