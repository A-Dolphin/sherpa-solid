import { Title, useParams } from "solid-start";

export default function ClientDetails() {

  const clientID = useParams();
  return (
    <Title>Client { clientID.clientID }</Title>
  );
}
