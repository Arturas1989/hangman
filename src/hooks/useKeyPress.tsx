import { useEffect } from "react"

export const useKeyPress = (handleGuess: (letter: string) => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key.length === 1) handleGuess(e.key.toLowerCase())
    }
    window.addEventListener('keydown', handleKeyDown)
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  })
}