import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import paths from "@/constants/paths";
import { Layout } from "@/components/Layout/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.app} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
