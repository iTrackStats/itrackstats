// Aquí se definen las variables de entorno para ser exportadas a la app
export const env = {
  projectId: process.env.PROJECT_ID || "",
  apiKey: process.env.API_KEY || "",
  databaseId: process.env.DATABASE_ID || "",
  bucketId: process.env.BUCKET_ID || "",
  endpoint: process.env.NEXT_PUBLIC_ENDPOINT || "",
};
