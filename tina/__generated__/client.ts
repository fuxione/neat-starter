import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '71da2590608e297eab313d7c89f4c2087ca94056', queries,  });
export default client;
  