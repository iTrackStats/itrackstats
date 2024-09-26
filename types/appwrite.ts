import { Models } from "appwrite";

export interface Tickets extends Models.Document {
  $id: string;
  title: string;
  description: string;
  priority: string;
  due_date: string;
  responsable: string;
}
