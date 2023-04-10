import { Router, Route } from 'electron-router-dom'
import { Black } from './pages/black'
import { Document } from './pages/document'
import { Default } from './pages/layouts/default'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Black />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
