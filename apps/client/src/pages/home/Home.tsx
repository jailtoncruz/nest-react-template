import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4 mb-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NestJS + React SPA Template</h1>
    </div>
  );
}
