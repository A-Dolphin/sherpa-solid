import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import styles from './ClientCard.scss'

export default function ClientCard(client:object) {
  console.log(client)
    return (
      <A href={`/clients/${client.client.id}`}>
        <div class="client-card">
          <h1>{client.client.id}</h1>
          <h2>{client.firstName}</h2>
          <h2>{client.lastName}</h2>
        </div>
      </A>  
    );
  }
