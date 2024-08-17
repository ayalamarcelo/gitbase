// Welcome message when the page loads.
document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<p>Welcome to the Git CLI simulator! Type <strong>git help</strong> to see the available commands.</p>';
});

// Listen for 'keydown' events on the input field to handle commands.
document.getElementById('cli-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim();
        handleCommand(input);
        e.target.value = '';
    }
});

function handleCommand(input) {
    const outputDiv = document.getElementById('output');

    // Split the input into parts, the first element is the command and the rest are arguments
    const [command, ...args] = input.split(' ');

    // Reconstruct the base command
    const baseCommand = command + (args.length ? ' ' + args[0] : '');

    // Check the base command
    switch (baseCommand) {
        case 'git config':
            handleConfigCommand(args.slice(1));
            break;
        case 'git init':
            handleInitCommand();
            break;
        case 'git clone':
            handleCloneCommand(args.slice(1));
            break;
        case 'git status':
            handleStatusCommand();
            break;
        case 'git add':
            handleAddCommand(args.slice(1));
            break;
        case 'git rm':
            handleRmCommand(args.slice(1));
            break;
        case 'git commit':
            handleCommitCommand(args.slice(1));
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
            handleCheckoutCommand(args.slice(1));
            break;
        case 'git branch':
            handleBranchCommand(args.slice(1));
            break;
        case 'git merge':
            handleMergeCommand(args.slice(1));
            break;
        case 'git remote':
            handleRemoteCommand(args.slice(1));
            break;
        case 'git push':
            handlePushCommand(args.slice(1));
            break;
        case 'git pull':
            handlePullCommand(args.slice(1));
            break;
        case 'git rebase':
            handleRebaseCommand();
            break;
        case 'git cherry-pick':
            handleCherryPickCommand(args.slice(1));
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

// Initial Git setup
function handleConfigCommand(args) {
    if (args[0] === '--global' && args[1] === 'user.name') {
        const userName = args.slice(2).join(' ');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>> git config --global user.name "${userName}"</p><p>Sets the global username for Git.</p>`;
    } else if (args[0] === '--global' && args[1] === 'user.email') {
        const userEmail = args.slice(2).join(' ');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>> git config --global user.email "${userEmail}"</p><p>Sets the global email for Git.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git config ${args.join(' ')}</p><p>Error: Invalid config format.</p>`;
    }
}

// Initialize repository
function handleInitCommand() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>> git init</p><p>Great! You've initialized a new empty Git repository in this directory. Git will now start tracking the files you add.</p>`;
    outputDiv.innerHTML += `<p>The <strong>git init</strong> command creates a hidden <strong>.git</strong> directory in your project. This directory is where Git stores all the information needed to manage your project's version history.</p>`;
}

// Clone a repository
function handleCloneCommand(args) {
    const outputDiv = document.getElementById('output');
    if (args.length === 1) {
        const url = args[0];
        outputDiv.innerHTML += `<p>> git clone ${url}</p><p>Cloning the repository from ${url}...</p>`;
    } else {
        outputDiv.innerHTML += `<p>> git clone ${args.join(' ')}</p><p>Error: Invalid clone format.</p>`;
    }
}

// Repository status
function handleStatusCommand() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>> git status</p><p>On branch main<br>nothing to commit, working tree clean</p>`;
}

// Add files to staging area
function handleAddCommand(args) {
    if (args.length === 1) {
        const fileName = args[0];
        document.getElementById('output').innerHTML += `<p>> git add ${fileName}</p><p>File "${fileName}" added to the staging area! You can now commit these changes.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git add ${args.join(' ')}</p><p>Error: Invalid add format.</p>`;
    }
}

// Remove files from repository
function handleRmCommand(args) {
    if (args.length === 1) {
        const fileName = args[0];
        document.getElementById('output').innerHTML += `<p>> git rm ${fileName}</p><p>File "${fileName}" removed from the repository.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git rm ${args.join(' ')}</p><p>Error: Invalid rm format.</p>`;
    }
}

// Make a commit
function handleCommitCommand(args) {
    const commitMessage = args.join(' ');
    if (commitMessage) {
        document.getElementById('output').innerHTML += `<p>> git commit -m "${commitMessage}"</p><p>Commit made with the message: "${commitMessage}"! Changes have been saved to the version history.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git commit -m</p><p>Error: Commit message is required.</p>`;
    }
}

// Amend the last commit
function handleCommitAmendCommand() {
    document.getElementById('output').innerHTML += `<p>> git commit --amend</p><p>Amending the last commit. You can change the message or add new changes.</p>`;
}

// View commit history
function handleLogCommand() {
    document.getElementById('output').innerHTML += `<p>> git log</p><p>commit abc1234 (HEAD -> main)<br>Date: Thu Aug 16 12:00:00 2024<br><br>    Initial commit</p>`;
}

// Compare changes between commits
function handleDiffCommand() {
    document.getElementById('output').innerHTML += `<p>> git diff</p><p>Showing differences between commits. Here you'll see the changes between the current state and the last commit.</p>`;
}

// Switch branches or go back to a specific commit
function handleCheckoutCommand(args) {
    if (args.length === 1) {
        const branchOrCommit = args[0];
        document.getElementById('output').innerHTML += `<p>> git checkout ${branchOrCommit}</p><p>Switching to branch or commit ${branchOrCommit}...</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git checkout ${args.join(' ')}</p><p>Error: Invalid checkout format.</p>`;
    }
}

// List and create branches
function handleBranchCommand(args) {
    if (args.length === 0) {
        document.getElementById('output').innerHTML += `<p>> git branch</p><p>Showing all branches in the repository.</p>`;
    } else if (args.length === 1) {
        const branchName = args[0];
        document.getElementById('output').innerHTML += `<p>> git branch ${branchName}</p><p>Creating a new branch named "${branchName}".</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git branch ${args.join(' ')}</p><p>Error: Invalid branch format.</p>`;
    }
}

// Merge branches
function handleMergeCommand(args) {
    if (args.length === 1) {
        const branchName = args[0];
        document.getElementById('output').innerHTML += `<p>> git merge ${branchName}</p><p>Merging branch "${branchName}" with the current branch.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git merge ${args.join(' ')}</p><p>Error: Invalid merge format.</p>`;
    }
}

// Manage remotes
function handleRemoteCommand(args) {
    if (args.length === 2 && args[0] === 'add') {
        const remoteName = args[1];
        document.getElementById('output').innerHTML += `<p>> git remote add ${remoteName}</p><p>Adding remote "${remoteName}".</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git remote ${args.join(' ')}</p><p>Error: Invalid remote format.</p>`;
    }
}

// Push changes to a remote repository
function handlePushCommand(args) {
    if (args.length === 2) {
        const remoteName = args[0];
        const branchName = args[1];
        document.getElementById('output').innerHTML += `<p>> git push ${remoteName} ${branchName}</p><p>Pushing changes to branch "${branchName}" on remote "${remoteName}".</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git push ${args.join(' ')}</p><p>Error: Invalid push format.</p>`;
    }
}

// Fetch changes from a remote repository
function handlePullCommand(args) {
    if (args.length === 2) {
        const remoteName = args[0];
        const branchName = args[1];
        document.getElementById('output').innerHTML += `<p>> git pull ${remoteName} ${branchName}</p><p>Pulling changes from branch "${branchName}" on remote "${remoteName}".</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git pull ${args.join(' ')}</p><p>Error: Invalid pull format.</p>`;
    }
}

// Reapply commits on top of another base tip
function handleRebaseCommand() {
    document.getElementById('output').innerHTML += `<p>> git rebase</p><p>Rebasing your commits. This will apply your changes on top of another base tip.</p>`;
}

// Apply changes from another commit
function handleCherryPickCommand(args) {
    if (args.length === 1) {
        const commitHash = args[0];
        document.getElementById('output').innerHTML += `<p>> git cherry-pick ${commitHash}</p><p>Applying changes from commit ${commitHash} to the current branch.</p>`;
    } else {
        document.getElementById('output').innerHTML += `<p>> git cherry-pick ${args.join(' ')}</p><p>Error: Invalid cherry-pick format.</p>`;
    }
}

// Stash changes
function handleStashCommand() {
    document.getElementById('output').innerHTML += `<p>> git stash</p><p>Stashing your changes. Your modifications will be saved and the working directory will be clean.</p>`;
}

// Apply stashed changes
function handleStashPopCommand() {
    document.getElementById('output').innerHTML += `<p>> git stash pop</p><p>Applying stashed changes to your working directory.</p>`;
}

// Merge tool
function handleMergetoolCommand() {
    document.getElementById('output').innerHTML += `<p>> git mergetool</p><p>Launching merge tool to resolve conflicts.</p>`;
}

// Show help message
function showHelp() {
    document.getElementById('output').innerHTML += `<p>> help</p><p>Available commands:</p>
        <ul>
            <li><code>git init</code> - Initialize a new Git repository</li>
            <li><code>git config --global user.name "Your Name"</code> - Set global username</li>
            <li><code>git config --global user.email "you@example.com"</code> - Set global email</li>
            <li><code>git clone [url]</code> - Clone a repository</li>
            <li><code>git status</code> - Show the working tree status</li>
            <li><code>git add [file]</code> - Add file contents to the index</li>
            <li><code>git rm [file]</code> - Remove files from the working directory and from the index</li>
            <li><code>git commit -m "message"</code> - Record changes to the repository</li>
            <li><code>git commit --amend</code> - Amend the last commit</li>
            <li><code>git log</code> - Show the commit logs</li>
            <li><code>git diff</code> - Show changes between commits, commit and working tree, etc.</li>
            <li><code>git checkout [branch]</code> - Switch branches or restore working tree files</li>
            <li><code>git branch [branch]</code> - List, create, or delete branches</li>
            <li><code>git merge [branch]</code> - Join two or more development histories together</li>
            <li><code>git remote add [name] [url]</code> - Add a remote repository</li>
            <li><code>git push [remote] [branch]</code> - Update remote refs along with associated objects</li>
            <li><code>git pull [remote] [branch]</code> - Fetch from and integrate with another repository or a local branch</li>
            <li><code>git rebase</code> - Reapply commits on top of another base tip</li>
            <li><code>git cherry-pick [commit]</code> - Apply the changes introduced by some existing commits</li>
            <li><code>git stash</code> - Stash the changes in a dirty working directory</li>
            <li><code>git stash pop</code> - Apply the stashed changes and remove them from the stash</li>
            <li><code>git mergetool</code> - Run merge conflict resolution tools to resolve conflicts</li>
            <li><code>clear</code> - Clear the console output</li>
            <li><code>help</code> - Show this help message</li>
        </ul>`;
}
