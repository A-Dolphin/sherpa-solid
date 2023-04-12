import { Outlet } from "solid-start";
import Header from "~/components/Header/Header";
import Sidebar from "~/components/Sidebar/Sidebar";
import '../root.scss'

export default function App() {
  return (
    <main class="app">
      <Header/>
      <div class="main-container">
        <Sidebar/>
        <div class="content">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
