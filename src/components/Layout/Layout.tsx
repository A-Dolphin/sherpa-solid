import { Outlet } from "solid-start/islands/server-router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <div class="main-content"></div>
      </>
    );
  }
