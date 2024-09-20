import { Account, Client as Appwrite, Databases } from "appwrite";
import { env } from "@/lib/env.config";

interface ApiSdk {
  account: Account;
  database: Databases;
}

interface Api {
  sdk: ApiSdk | null;
  provider: () => ApiSdk;
  auth: {
    getCurrentSession: () => Promise<any>;
    deleteCurrentSession: () => Promise<any>;
  };
}

const api: Api = {
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

  auth: {
    getCurrentSession: () => {
      let account = api.provider().account;
      return account.get();
    },

    deleteCurrentSession: () => {
      return api.provider().account.deleteSession("current");
    },
  },
};

export default api;
