import { api } from "../http";

export async function listExamples() {
  // TODO: Implement your api.get here
  const { data } = await api.get<{ id: number; name: string }[]>("/example");
  return data;
}
