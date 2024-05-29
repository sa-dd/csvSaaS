import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode; 
}

const App: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App

