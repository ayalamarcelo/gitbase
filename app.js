// Mensaje de bienvenida cuando se carga la página.
document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<p>Welcome to the Git CLI simulator! Type <strong>help</strong> to see the available commands.</p>';
});

// Escucha el evento 'keydown' en el campo de entrada para manejar comandos.
document.getElementById('cli-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim();
        handleCommand(input);
        e.target.value = '';
    }
});

// Maneja los comandos introducidos por el usuario.
function handleCommand(input) {
    const outputDiv = document.getElementById('output');
    const [command, ...args] = input.split(' ');

    switch (command) {
        case 'git config':
            handleConfigCommand(args);
            break;
        case 'git init':
            handleInitCommand();
            break;
        case 'git clone':
            handleCloneCommand(args);
            break;
        case 'git status':
            handleStatusCommand();
            break;
        case 'git add':
            handleAddCommand(args);
            break;
        case 'git rm':
            handleRmCommand(args);
            break;
        case 'git commit':
            handleCommitCommand(args);
            break;
        case 'git commit --amend':
            handleCommitAmendCommand();
            break;
        case 'git log':
            handleLogCommand();
            break;
        case 'git diff':
            handleDiffCommand();
            break;
        case 'git checkout':
            handleCheckoutCommand(args);
            break;
        case 'git branch':
            handleBranchCommand(args);
            break;
        case 'git merge':
            handleMergeCommand(args);
            break;
        case 'git remote':
            handleRemoteCommand(args);
            break;
        case 'git push':
            handlePushCommand(args);
            break;
        case 'git pull':
            handlePullCommand(args);
            break;
        case 'git rebase':
            handleRebaseCommand();
            break;
        case 'git cherry-pick':
            handleCherryPickCommand(args);
            break;
        case 'git stash':
            handleStashCommand();
            break;
        case 'git stash pop':
            handleStashPopCommand();
            break;
        case 'git mergetool':
            handleMergetoolCommand();
            break;
        case 'clear':
            outputDiv.innerHTML = '';
            break;
        case 'git help':
            showHelp();
            break;
        default:
            outputDiv.innerHTML += `<p>> ${input}</p><p>Error: Unknown command.</p>`;
    }

    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Configuración inicial de Git
function handleConfigCommand(args) {
    if (args[0] === '--global' && args[1] === 'user.name') {
        const userName = args.slice(2).join(' ');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>> git config --global user.name "${userName}"</p><p>Configura el nombre del usuario globalmente.</p>`;
    } else if (args[0] === '--global' && args[1] === 'user.email') {
        const userEmail = args.slice(2).join(' ');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>> git config --global user.email "${userEmail}"</p><p>Configura el email del usuario globalmente.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git config ${args.join(' ')}</p><p>Error: Invalid config format.</p>`;
    }
}

// Inicialización del repositorio
function handleInitCommand() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>> git init</p><p>¡Excelente! Has inicializado un nuevo repositorio vacío de Git en este directorio. Ahora Git comenzará a rastrear los archivos que agregues.</p>`;
    outputDiv.innerHTML += `<p>El comando <strong>git init</strong> crea un directorio oculto <strong>.git</strong> en tu proyecto. Este directorio es donde Git guarda toda la información necesaria para gestionar el historial de versiones de tu proyecto.</p>`;
}

// Clonación de un repositorio
function handleCloneCommand(args) {
    const outputDiv = document.getElementById('output');
    if (args.length === 1) {
        const url = args[0];
        outputDiv.innerHTML += `<p>> git clone ${url}</p><p>Clonando el repositorio desde ${url}...</p>`;
    } else {
        outputDiv.innerHTML += `<p>> git clone ${args.join(' ')}</p><p>Error: Invalid clone format.</p>`;
    }
}

// Estado del repositorio
function handleStatusCommand() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>> git status</p><p>On branch main<br>nothing to commit, working tree clean</p>`;
}

// Agregar archivos al área de preparación
function handleAddCommand(args) {
    if (args.length === 1) {
        const fileName = args[0];
        document.getElementById('output').innerHTML += `<p>> git add ${fileName}</p><p>¡Archivo "${fileName}" agregado al área de preparación (staging area)! Ahora, puedes hacer un commit para guardar estos cambios.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git add ${args.join(' ')}</p><p>Error: Invalid add format.</p>`;
    }
}

// Eliminar archivos del repositorio
function handleRmCommand(args) {
    if (args.length === 1) {
        const fileName = args[0];
        document.getElementById('output').innerHTML += `<p>> git rm ${fileName}</p><p>Archivo "${fileName}" eliminado del repositorio.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git rm ${args.join(' ')}</p><p>Error: Invalid rm format.</p>`;
    }
}

// Realizar un commit
function handleCommitCommand(args) {
    const commitMessage = args.join(' ');
    if (commitMessage) {
        document.getElementById('output').innerHTML += `<p>> git commit -m "${commitMessage}"</p><p>¡Commit realizado con el mensaje: "${commitMessage}"! Los cambios se han guardado en el historial de versiones.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git commit -m</p><p>Error: Commit message is required.</p>`;
    }
}

// Modificar el último commit
function handleCommitAmendCommand() {
    document.getElementById('output').innerHTML += `<p>> git commit --amend</p><p>Modificando el último commit. Puedes cambiar el mensaje o añadir nuevos cambios.</p>`;
}

// Ver el historial de commits
function handleLogCommand() {
    document.getElementById('output').innerHTML += `<p>> git log</p><p>commit abc1234 (HEAD -> main)<br>Date: Thu Aug 16 12:00:00 2024<br><br>    Initial commit</p>`;
}

// Comparar cambios entre commits
function handleDiffCommand() {
    document.getElementById('output').innerHTML += `<p>> git diff</p><p>Mostrando diferencias entre los commits. Aquí verás los cambios entre el estado actual y el último commit.</p>`;
}

// Cambiar de rama o volver a un commit específico
function handleCheckoutCommand(args) {
    if (args.length === 1) {
        const branchOrCommit = args[0];
        document.getElementById('output').innerHTML += `<p>> git checkout ${branchOrCommit}</p><p>Cambiando a la rama o commit ${branchOrCommit}...</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git checkout ${args.join(' ')}</p><p>Error: Invalid checkout format.</p>`;
    }
}

// Listar y crear ramas
function handleBranchCommand(args) {
    if (args.length === 0) {
        document.getElementById('output').innerHTML += `<p>> git branch</p><p>Mostrando todas las ramas del repositorio.</p>`;
    } else if (args.length === 1) {
        const branchName = args[0];
        document.getElementById('output').innerHTML += `<p>> git branch ${branchName}</p><p>Creando una nueva rama llamada "${branchName}".</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git branch ${args.join(' ')}</p><p>Error: Invalid branch format.</p>`;
    }
}

// Fusionar ramas
function handleMergeCommand(args) {
    if (args.length === 1) {
        const branchName = args[0];
        document.getElementById('output').innerHTML += `<p>> git merge ${branchName}</p><p>Fusionando la rama "${branchName}" con la rama actual.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git merge ${args.join(' ')}</p><p>Error: Invalid merge format.</p>`;
    }
}

// Agregar un repositorio remoto
function handleRemoteCommand(args) {
    if (args[0] === 'add' && args[1] === 'origin' && args[2]) {
        const url = args[2];
        document.getElementById('output').innerHTML += `<p>> git remote add origin ${url}</p><p>Agregando el repositorio remoto con URL ${url}.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git remote ${args.join(' ')}</p><p>Error: Invalid remote command format.</p>`;
    }
}

// Subir cambios a un repositorio remoto
function handlePushCommand(args) {
    if (args.length === 2) {
        const remote = args[0];
        const branch = args[1];
        document.getElementById('output').innerHTML += `<p>> git push ${remote} ${branch}</p><p>Subiendo cambios a ${remote} en la rama ${branch}.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git push ${args.join(' ')}</p><p>Error: Invalid push format.</p>`;
    }
}

// Descargar cambios del repositorio remoto y fusionarlos
function handlePullCommand(args) {
    if (args.length === 2) {
        const remote = args[0];
        const branch = args[1];
        document.getElementById('output').innerHTML += `<p>> git pull ${remote} ${branch}</p><p>Descargando y fusionando cambios desde ${remote} en la rama ${branch}.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git pull ${args.join(' ')}</p><p>Error: Invalid pull format.</p>`;
    }
}

// Reaplicar commits en la cima de otro punto de la historia
function handleRebaseCommand() {
    document.getElementById('output').innerHTML += `<p>> git rebase</p><p>Reaplicando commits en la cima de otro punto de la historia.</p>`;
}

// Aplicar un commit específico de otra rama
function handleCherryPickCommand(args) {
    if (args.length === 1) {
        const commit = args[0];
        document.getElementById('output').innerHTML += `<p>> git cherry-pick ${commit}</p><p>Aplicando el commit ${commit} a la rama actual.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git cherry-pick ${args.join(' ')}</p><p>Error: Invalid cherry-pick format.</p>`;
    }
}

// Guardar temporalmente los cambios no confirmados
function handleStashCommand() {
    document.getElementById('output').innerHTML += `<p>> git stash</p><p>Guardando temporalmente los cambios no confirmados.</p>`;
}

// Recuperar los cambios guardados con stash
function handleStashPopCommand() {
    document.getElementById('output').innerHTML += `<p>> git stash pop</p><p>Recuperando los cambios guardados con stash.</p>`;
}

// Usar una herramienta para resolver conflictos
function handleMergetoolCommand() {
    document.getElementById('output').innerHTML += `<p>> git mergetool</p><p>Usando una herramienta para resolver conflictos en los archivos.</p>`;
}

// Muestra el mensaje de ayuda con los comandos disponibles.
function showHelp() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `
        <p>> git help</p>
        <p>Available commands:</p>
        <ul>
            <li><strong>git config --global user.name &lt;name&gt;</strong> - Set the global username for Git.</li>
            <li><strong>git config --global user.email &lt;email&gt;</strong> - Set the global email for Git.</li>
            <li><strong>git init</strong> - Initialize a new Git repository in the current directory.</li>
            <li><strong>git clone &lt;url&gt;</strong> - Clone an existing repository from the given URL.</li>
            <li><strong>git status</strong> - Show the status of files in the repository.</li>
            <li><strong>git add &lt;file&gt;</strong> - Add a file to the staging area.</li>
            <li><strong>git rm &lt;file&gt;</strong> - Remove a file from the repository.</li>
            <li><strong>git commit -m &lt;message&gt;</strong> - Create a commit with the provided message.</li>
            <li><strong>git commit --amend</strong> - Modify the last commit.</li>
            <li><strong>git log</strong> - Show the commit history.</li>
            <li><strong>git diff</strong> - Compare changes between commits.</li>
            <li><strong>git checkout &lt;branch/commit&gt;</strong> - Switch to a branch or specific commit.</li>
            <li><strong>git branch</strong> - List all branches.</li>
            <li><strong>git branch &lt;name&gt;</strong> - Create a new branch with the given name.</li>
            <li><strong>git merge &lt;branch&gt;</strong> - Merge the specified branch into the current branch.</li>
            <li><strong>git remote add origin &lt;url&gt;</strong> - Add a remote repository URL.</li>
            <li><strong>git push origin &lt;branch&gt;</strong> - Push changes to a remote repository.</li>
            <li><strong>git pull origin &lt;branch&gt;</strong> - Pull changes from a remote repository and merge them.</li>
            <li><strong>git rebase</strong> - Reapply commits on top of another base tip.</li>
            <li><strong>git cherry-pick &lt;commit&gt;</strong> - Apply a specific commit from another branch.</li>
            <li><strong>git stash</strong> - Save changes temporarily.</li>
            <li><strong>git stash pop</strong> - Apply stashed changes.</li>
            <li><strong>git mergetool</strong> - Use a merge tool to resolve conflicts.</li>
            <li><strong>clear</strong> - Clear the terminal output.</li>
            <li><strong>git help</strong> - Show this help message.</li>
        </ul>
    `;
}
