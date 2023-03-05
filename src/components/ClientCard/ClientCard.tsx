import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import './ClientCard.scss'

export default function ClientCard(client) {
  console.log(client)
    return (
      <A href={`/client/${client.client.id}`}>
        <div class="client-card">
          <span>{client.client.id}</span>
          <span>{client.client.firstName}</span>
          <span>{client.client.lastName}</span>
        </div>
      </A>  
    );
  }
