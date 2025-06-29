import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import { Router, Routes , Route} from "react-router";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      </div>
    </ThemeProvider>
    
  );
}

export default App;