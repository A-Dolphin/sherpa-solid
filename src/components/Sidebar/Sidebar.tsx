import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import './Sidebar.scss'

export default function Sidebar() {
    return (
      <nav>
        <A href="/">Clients</A>
        <A href="/bookings">Bookings</A>
        <A href="/billing">Billing</A>
        <A href="/analytics">Analytics</A>
        <A href="/marketing">Marketing</A>
      </nav>
    );
  }
