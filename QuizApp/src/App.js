import { Box } from "@mui/system";
import {Container} from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Settings/>,
  },
  {
    path: "/questions",
    element: <Questions/>,
  },
  {
    path: "/score",
    element: <FinalScreen/>,
  },
]);



function App() {
  return (
    <div className="app">
    <Container sx={{backgroundColor: 'white', padding: 1, borderRadius: 1, color: 'black'}}>
      <Box  textAlign='center' mt={5}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Box>
    </Container>
    </div>
  );
}

export default App;
