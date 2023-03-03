import { A } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { Title, useRouteData } from "solid-start";
import Counter from "~/components/Counter";

export function routeData() {
  const [clients] = createResource(async () => {
    const response = await fetch("http://localhost:3000/api/clientsdata")
    return await response.json() as string[];
  })
  return { clients }
}

export default function Home() {
  const {clients} = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>Your Clients</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <ul>
      <For each ={clients()} fallback={<div>Loading...</div>}>
        {client => 
        <li>
          <A href={"/clients/" + client.id}>{client.firstName + client.lastName}</A>
        </li>}
      </For>
      </ul>

    </main>
  );
}
