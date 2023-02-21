import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

const DefaultLayout: FunctionComponent = () => {
  return (
    <main className="multiform-layout">
      <section className="multiform-layout-container">
        <nav className="multiform-layout-container-navigator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
      <section className="multiform-layout-container-form">
        <Outlet />
      </section>
    </main>
  );
};

export { DefaultLayout };
