import * as vscode from 'vscode'
import welcome from './lib/welcome'
import hi from './lib/hi'

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(hi)
	
	welcome()
}

export function deactivate() {}
