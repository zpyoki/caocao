import * as vscode from 'vscode'
import config from '../utils/config'

const welcome = async () => {
	console.log(`Congratulations, ${config.appName} is now active!`)
  // vscode.window.showInformationMessage(`${config.appName} is ready`)
  // await vscode.commands.executeCommand('caocao.hi')
}

export default welcome