import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { Fragment, useEffect } from "react";
import PageTransition from "./components/PageTransition/PageTransition";
import { AnimatePresence } from "framer-motion";
import SlowScroll from "./components/SlowScroll/SlowScroll";

function App() {
  const location = useLocation(); // Lấy thông tin route hiện tại

  useEffect(() => {
    window.scrollTo(0, 0); // Đưa scroll về đầu trang khi reload
  }, []);

  return (
    <AnimatePresence mode="wait">
      <PageTransition>
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
      <SlowScroll />
      <App />
    </BrowserRouter>
  );
}
