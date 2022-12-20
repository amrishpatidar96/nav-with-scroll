import { useRef } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles.css";

const Button = (props) => {
  return (
    <button
      {...props}
      style={{
        padding: "10px"
      }}
    />
  );
};

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref0 = useRef(null);

  return (
    <>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Button
                onClick={() => {
                  console.log(ref0.current);
                  ref0.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  ref1.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ABOUT
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  ref2.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                PROJECTS
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  ref3.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                BLOG
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  ref4.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT ME
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" ref={ref0}>
        Home
      </section>
      <section id="about" ref={ref1}>
        ABOUT
      </section>
      <section id="projects" ref={ref2}>
        PROJECTS
      </section>
      <section id="blog" ref={ref3}>
        BLOG
      </section>
      <section id="contact" ref={ref4}>
        CONTACT ME
      </section>
    </>
  );
};

// const Projects = () => {
//   return (
//     <>
//       <section id="projects">PROJECTS</section>
//     </>
//   );
// };
// const About = () => {
//   return (
//     <>
//       <section id="about">ABOUT</section>
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
