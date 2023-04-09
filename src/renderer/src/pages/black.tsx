import { Link } from 'react-router-dom'

export function Black() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Selecione ou crie um arquivo para começar
      <Link to="/document">Acessar Document</Link>
    </main>
  )
}
