import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Spell from "./pages/Spell";
import Home from "./pages/Home";
import ClassDescriptionCard from "./components/ClassDescriptionCard";
import Layout from "./Layout";
import FavoriteSpells from "./pages/FavoriteSpells";
import DescriptionCard from "./components/DescriptionCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={"/spells/:index"} element={<Spell />} />
      <Route
        path={"/api/damage-types/:name"}
        element={<DescriptionCard {...{ type: "damage-types" }} />}
      />
      <Route
        path={"/api/magic-schools/:name"}
        element={<DescriptionCard {...{ type: "magic-schools" }} />}
      />
      <Route path={"/api/classes/:name"} element={<ClassDescriptionCard />} />
      <Route
        path={"/api/subclasses/:name"}
        element={<DescriptionCard {...{ type: "subclasses" }} />}
      />
      <Route path={"/favorite-spells"} element={<FavoriteSpells />} />
    </Route>
  )
);

const App: React.FC = () => <RouterProvider {...{ router }} />;

export default App;
