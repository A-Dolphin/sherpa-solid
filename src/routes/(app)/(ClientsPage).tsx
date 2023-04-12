import { createResource, For } from "solid-js";
import { Title, useRouteData } from "solid-start";
import ClientCard from "~/components/ClientCard/ClientCard";
import './ClientsPage.scss'
import Modal from "~/components/Modal/Modal";

export function routeData() {
  const [clients] = createResource(async () => {
    const response = await fetch("http://localhost:3000/api/clients")
    return await response.json() as string[];
  })
  return { clients }
}

export default function ClientsPage() {
  const {clients} = useRouteData<typeof routeData>();
  return (
    <>
      <Title>Your Clients</Title>
      <div class="page-header">
        <h1>Hello world!</h1>
        <button onClick={() => console.log('add')} class="text-button">New Client</button>
      </div>

      <div class="card-container">
        <For each ={clients()} fallback={<div>Loading...</div>}>
          {client => 
          <ClientCard client={client}/>
          }
        </For>
      </div>
      <Modal heading="New client">
        u wot
      </Modal>
    </>
  );
}
