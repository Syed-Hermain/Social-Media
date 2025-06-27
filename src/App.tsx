import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle/>
        <h1 className="text-3xl font-bold underline text-center text-white bg-background">
          Hello Vite + React!
        </h1>
        <p className="text-center text-gray-500">
          This is a simple example of a Vite + React application with Tailwind CSS.
        </p>
      </div>
    </ThemeProvider>
  )
}

export default App