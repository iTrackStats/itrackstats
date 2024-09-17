import { Account, Client as Appwrite, Databases } from "appwrite";
import { env } from "@/lib/env.config";

interface ApiSdk {
  account: Account;
  database: Databases;
}

const api: { sdk: ApiSdk | null; provider: () => ApiSdk } = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    const appwrite = new Appwrite();
    appwrite.setEndpoint(env.endpoint).setProject(env.projectId);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    api.sdk = { account, database };
    return api.sdk;
  },
};

export default api;
