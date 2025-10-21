import { api } from "../http";

export async function createExample(dto: { name: string }) {
  // TODO: Implement your api.get here
  const { data } = await api.post<{ id: string; name: string }>(
    "/example",
    dto
  );
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return data;
}
