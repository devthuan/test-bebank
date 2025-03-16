import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";
import PageTransition from "./components/PageTransition/PageTransition";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation(); // Lấy thông tin route hiện tại

  return (
    <AnimatePresence mode="wait">
      <PageTransition >
        <Routes location={location} key={location.pathname}>
          {publicRoutes.map((route, i) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
