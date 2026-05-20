import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { authClient } from "@/lib/auth-client";

const MyAddedCarsPage = async () => {
  const { data: session, error } = await authClient.getSession();

  console.log(session);

  return <div>my added cars page</div>;
};

export default MyAddedCarsPage;
