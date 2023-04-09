import { Router, Route } from 'electron-router-dom'
import { Black } from './pages/black'
import { Document } from './pages/document'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Black />} />
          <Route path="/document" element={<Document />} />
        </>
      }
    />
  )
}
