import { Router } from "./Router";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
      <Toaster position="top-center" duration={1000 * 5} />
    </ThemeProvider>
  );
}

export default App;
