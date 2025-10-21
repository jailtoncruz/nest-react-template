import { Spinner, Text } from "@radix-ui/themes";

export function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
      <Text className="text-white text-2xl font-bold">Loading...</Text>
      <Spinner size="3" className="text-white" />
    </div>
  );
}
