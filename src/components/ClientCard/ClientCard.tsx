import { A } from "@solidjs/router";
import './ClientCard.scss'

export default function ClientCard(client) {
  console.log(client)
    return (
      <A href={`/client/${client.client.id}`}>
        <div class="client-card">
          <div class="card-client-name">
            <span>{client.client.id}</span>
            <span>{client.client.firstName}</span>
            <span>{client.client.lastName}</span>
            </div>
          <div class="card-content-row">
            <ion-icon name="calendar-outline" />
            <span>Next Booking:</span>
          </div>
          <div class="card-content-row">
            <ion-icon name="card-outline" />
            <span>Payment Status:</span>
          </div>
        </div>
      </A>  
    );
  }
