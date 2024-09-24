import { env } from "@/lib/env.config";
import {
  Account,
  Client as Appwrite,
  Databases,
  OAuthProvider,
} from "appwrite";

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
    signupWithGoogle: () => Promise<any>;
  };
}

const api: any = {
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

    signupWithGoogle: () => {
      return api
        .provider()
        .account.createOAuth2Session(
          OAuthProvider.Google,
          `${env.appDomain}/`,
          `${env.appDomain}/`,
        );
    },
  },

  tickets: {
    getAll: async (extraParams: string[]) => {
      return api
        .provider()
        .database.listDocuments(env.databaseId, env.devTicketsId, extraParams);
    },
  },
};

export default api;
