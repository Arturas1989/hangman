import { useEffect } from "react"
import { keyPressAllowed } from "../utils/helpers"

export const useKeyPress = (handleGuess: (letter: string) => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(keyPressAllowed(e.key)) handleGuess(e.key.toLowerCase())
    }
    window.addEventListener('keydown', handleKeyDown)
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  })
}