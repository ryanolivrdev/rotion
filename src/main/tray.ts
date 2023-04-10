import { BrowserWindow, Menu, Tray, nativeImage } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, '../../resources/rotionTemplate.png'),
  )

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', icon, enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    {
      label: 'Documento recentes',
      enabled: false,
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+N',
      acceleratorWorksWhenHidden: false,
      click: () => {
        console.log('Criar novo documento')
      },
    },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
