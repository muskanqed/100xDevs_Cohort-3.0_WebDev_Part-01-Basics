import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* This is bad way and fetchs the html all over again */}
      {/* <a href="/">Allen</a>
    | <a href="/class-11">Class-11</a>
    | <a href="/class-12">Class-12</a> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/class-11" element={<Class11Program />} />
            <Route path="/class-12" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/">Allen</Link>|<Link to="/class-11">Class-11</Link>|
      <Link to="/class-12">Class-12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      footer
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>Sorry page not found</h1>
    </div>
  );
}

function LandingPage() {
  return <div>Welcom Allen</div>;
}

function Class11Program() {
  return <div>Class-11 Program</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, 5000);
  }, []);

  return <div>Class-12 Program</div>;
}

export default App;
