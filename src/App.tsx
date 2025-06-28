import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1">
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;