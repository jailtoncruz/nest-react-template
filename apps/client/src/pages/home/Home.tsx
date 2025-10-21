import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateExampleMutation, useExampleQuery } from "@/hooks/useExample";
import { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export function Home() {
  const [name, setName] = useState("");
  const { data: examples } = useExampleQuery();
  const mutation = useCreateExampleMutation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!name) return;
    mutation.mutate(
      { name },
      {
        onSuccess() {
          setName("");
          if (Math.random() > 0.5)
            toast.info(
              <p>
                There is a deliberate delay in
                <strong> src/services/api/example/create-example.ts</strong>
              </p>
              // "There is a deliberate delay in src/services/api/example/create-example.ts."
            );
          inputRef.current?.focus();
        },
      }
    );
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4 mb-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl font-bold">NestJS + React SPA Template</h1>

      <div className="min-w-96 flex flex-col gap-4 mt-4">
        <div className="flex flex-row gap-2">
          <Input
            placeholder="Type something..."
            value={name}
            ref={inputRef}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleClick();
            }}
          />
          <Button onClick={handleClick} disabled={mutation.isPending}>
            {mutation.isPending ? <Spinner /> : <AiOutlinePlus size={16} />}
          </Button>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex-1 flex flex-col">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <ModeToggle />
        </div>
        <Table>
          <TableCaption>A list of examples.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {examples?.slice(0, 5).map((e, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    EXP{e.id.toString().padStart(3, "0")}
                  </TableCell>
                  <TableCell>{e.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
