import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import { Router, Routes , Route} from "react-router";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<div>Notifications</div>} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      </div>
    </ThemeProvider>
    
  );
}

export default App;