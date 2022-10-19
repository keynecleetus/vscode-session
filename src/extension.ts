
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('vscode',vscode);
	console.log('Congratulations, your extension "vscode-session" is now active!');
	
	let disposable = vscode.commands.registerCommand('vscode-session.helloWorld', () => {
	
		vscode.window.showInformationMessage('Hello World from vscode-session!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
