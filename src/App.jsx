import { useEffect, useState } from 'react'
import Terminal from './components/Terminal.jsx'
import GUIPortfolio from './components/GUIPortfolio.jsx'
import { THEMES, DEFAULT_THEME } from './data/themes.js'
import './gui.css'

const THEME_KEY = 'avi-terminal-theme'
const MODE_KEY = 'avi-portfolio-mode'

export default function App() {
  const [mode, setMode] = useState(() => {
    const saved =
      typeof localStorage !== 'undefined' && localStorage.getItem(MODE_KEY)
    return saved === 'terminal' || saved === 'gui' ? saved : 'gui'
  })

  const [theme, setTheme] = useState(() => {
    const saved =
      typeof localStorage !== 'undefined' && localStorage.getItem(THEME_KEY)
    return saved && THEMES.includes(saved) ? saved : DEFAULT_THEME
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
    }
  }, [theme])

  useEffect(() => {
    try {
      localStorage.setItem(MODE_KEY, mode)
    } catch {
    }
  }, [mode])

  const switchToTerminal = () => {
    setMode('terminal')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const switchToGUI = () => {
    setMode('gui')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (mode === 'terminal') {
    return <Terminal setTheme={setTheme} onSwitchMode={switchToGUI} />
  }

  return <GUIPortfolio onSwitchMode={switchToTerminal} />
}
