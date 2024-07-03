import * as vscode from 'vscode'
import grettings from '../utils/grettings'

const hi = vscode.commands.registerCommand('caocao.hi', async () => {
  const hiList = grettings
  const randomNumber = Math.round(Math.random() * (hiList.length - 1) + 1)
  const msg = hiList[randomNumber]
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: msg,
    cancellable: true
  }, progress => {
    const p = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, msg.length * 200)
    })
    return p
  })
})

export default hi