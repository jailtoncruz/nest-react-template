import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Suspense } from "react";
import { LoadingPage } from "./pages/loading";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
