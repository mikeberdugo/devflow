import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Login } from "./pages/login";
import { CreateUser } from "./pages/register";
import { Home } from "./pages/home";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="container mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Login</title>
                    <link rel="icon" type="image/png" href="/bm-63461.svg" />
                  </Helmet>
                  <Login />
                </>
              }
            />

            <Route
              path="/register"
              element={
                <>
                  <Helmet>
                    <title>Register</title>
                    <link rel="icon" type="image/png" href="/bm-63461.svg" />
                  </Helmet>
                  <CreateUser />
                </>
              }
            />

            <Route
              path="/home"
              element={
                <>
                  <Helmet>
                    <title>Home</title>
                    <link rel="icon" type="image/png" href="/bm-63461.svg" />
                  </Helmet>
                  <Home />
                </>
              }
            />
            {/* Otras rutas */}
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
