import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaTerminal } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const fileSystem = {
    'about.txt': "Salut, je suis Abdoulaye, un développeur logiciel passionné par l'écosystème Linux et la création d'applications performantes.",
    'contact.txt': 'Email: twoylit@gmail.com\nLinkedIn: https://linkedin.com/in/abdoulaye-balde',
    'cv.pdf': 'Erreur: Impossible de lire un fichier binaire dans le terminal. Utilisez le lien de l\'interface utilisateur.',
    'projects': {
        'portfolio.txt': 'Portfolio - React + Tailwind. Mon site portfolio personnel.',
        'ram_monitor.txt': 'Ram_monitor - C. Un outil de monitoring de la mémoire RAM en temps réel.',
        'easyTol.txt': 'easyTol - Alpine js + Django. Application web full-stack.',
        'knyxis.txt': 'knyxis - Electron. Application desktop moderne.',
        'enclos.txt': 'enclos - C. Projet système explorant la gestion mémoire.'
    },
    'skills': {
        'languages.txt': 'C, Java, Python, JavaScript, PHP, Dart',
        'frameworks.txt': 'React, Django, Laravel, Flutter',
        'tools.txt': 'Linux, Git'
    }
};

const commandsHelp = `Commandes disponibles:
  whoami   - Affiche les informations sur l'utilisateur
  ls       - Liste les fichiers disponibles
  cat      - Affiche le contenu d'un fichier (ex: cat about.txt)
  cd       - Changer de dossier (ex: cd projects)
  pwd      - Affiche le chemin du dossier courant
  clear    - Efface le terminal
  date     - Affiche la date actuelle
  echo     - Affiche le texte passé en argument
  sudo     - Exécute une commande en tant que superutilisateur
  exit     - Ferme le terminal`;

function Terminal({ isOpen, onClose }) {
    const [history, setHistory] = useState([
        { command: '', output: 'Bienvenue sur le terminal de portfolio\nTapez "help" pour voir les commandes disponibles.', isError: false, path: '~' }
    ]);
    const [input, setInput] = useState('');
    const [currentPath, setCurrentPath] = useState('~');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            if (!cmd) {
                setHistory([...history, { command: '', output: '', isError: false, path: currentPath }]);
                return;
            }

            if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            }

            if (cmd === 'exit') {
                onClose();
                setInput('');
                return;
            }

            let output = '';
            let isError = false;
            let newPath = currentPath;

            const args = cmd.split(' ').filter(Boolean);
            const mainCmd = args[0];

            if (mainCmd === 'help') {
                output = commandsHelp;
            } else if (mainCmd === 'whoami') {
                output = 'Abdoulaye Balde - Passionné par Linux, C et le dev Web/Mobile.';
            } else if (mainCmd === 'date') {
                output = new Date().toString();
            } else if (mainCmd === 'echo') {
                output = args.slice(1).join(' ');
            } else if (mainCmd === 'sudo') {
                output = "Nice try. This incident will be reported.";
                isError = true;
            } else if (mainCmd === 'pwd') {
                output = `/home/2yli${currentPath === '~' ? '' : '/' + currentPath.replace('~/', '')}`;
            } else if (mainCmd === 'ls') {
                let targetDir = currentPath;
                if (args[1]) {
                    const target = args[1].replace(/\/$/, '');
                    if (target === '~') {
                        targetDir = '~';
                    } else if (target === '..') {
                        targetDir = '~';
                    } else if (currentPath === '~' && fileSystem[target] && typeof fileSystem[target] === 'object') {
                        targetDir = target;
                    } else {
                        output = `ls: impossible d'accéder à '${args[1]}': Aucun fichier ou dossier de ce type`;
                        isError = true;
                    }
                }

                if (!isError) {
                    if (targetDir === '~') {
                        output = Object.entries(fileSystem).map(([key, val]) => typeof val === 'object' ? `${key}/` : key).join('\n');
                    } else {
                        const dir = targetDir.replace('~/', '');
                        if (fileSystem[dir]) {
                            output = Object.keys(fileSystem[dir]).join('\n');
                        } else {
                            output = `ls: impossible d'accéder à '${targetDir}': Aucun fichier ou dossier de ce type`;
                            isError = true;
                        }
                    }
                }
            } else if (mainCmd === 'cd') {
                const target = args[1] ? args[1].replace(/\/$/, '') : '~';
                if (!target || target === '~') {
                    newPath = '~';
                } else if (target === '..') {
                    newPath = '~';
                } else if (currentPath === '~' && fileSystem[target]) {
                    if (typeof fileSystem[target] === 'object') {
                        newPath = target;
                    } else {
                        output = `cd: ${target}: n'est pas un dossier`;
                        isError = true;
                    }
                } else if (currentPath !== '~' && target === currentPath) {
                    // Do nothing, already there
                } else {
                    output = `cd: ${target}: Aucun fichier ou dossier de ce type`;
                    isError = true;
                }
            } else if (mainCmd === 'cat') {
                if (!args[1]) {
                    output = `cat: aucun fichier spécifié`;
                    isError = true;
                } else {
                    let target = args[1];
                    let dirContext = currentPath === '~' ? fileSystem : fileSystem[currentPath];

                    if (currentPath === '~' && target.includes('/')) {
                        const parts = target.split('/');
                        if (parts.length === 2 && fileSystem[parts[0]] && typeof fileSystem[parts[0]] === 'object') {
                            dirContext = fileSystem[parts[0]];
                            target = parts[1];
                        }
                    }

                    if (dirContext && dirContext[target]) {
                        if (typeof dirContext[target] === 'object') {
                            output = `cat: ${args[1]}: est un dossier`;
                            isError = true;
                        } else {
                            output = dirContext[target];
                        }
                    } else {
                        output = `cat: ${args[1]}: Aucun fichier ou dossier de ce type`;
                        isError = true;
                    }
                }
            } else {
                output = `bash: ${mainCmd}: commande introuvable`;
                isError = true;
            }

            setHistory([...history, { command: cmd, output, isError, path: currentPath }]);
            setCurrentPath(newPath);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 w-[95vw] sm:w-[600px] h-[400px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden z-[100] border border-gray-700 flex flex-col font-mono text-sm"
                >
                    {/* Header */}
                    <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-gray-900 select-none">
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaTerminal size={14} />
                            <span className="text-xs">2yli@portfolio: {currentPath === '~' ? '~' : '~/' + currentPath}</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                    </div>

                    {/* Body */}
                    <div
                        className="flex-1 p-4 overflow-y-auto text-gray-300"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {history.map((entry, i) => (
                            <div key={i} className="mb-2">
                                {entry.command && (
                                    <div className="flex gap-2 text-green-400" style={{ wordBreak: "break-all" }}>
                                        <span>2yli@portfolio:{entry.path === '~' ? '~' : '~/' + entry.path}$</span>
                                        <span className="text-white ml-2">{entry.command}</span>
                                    </div>
                                )}
                                {entry.output && (
                                    <div className={`whitespace-pre-wrap mt-1 ${entry.isError ? 'text-red-400' : 'text-gray-300'}`}>
                                        {entry.output}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="flex gap-2 text-green-400 mt-2">
                            <span className="shrink-0">2yli@portfolio:{currentPath === '~' ? '~' : '~/' + currentPath}$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="flex-1 bg-transparent border-none outline-none text-white font-mono min-w-0"
                                spellCheck={false}
                                autoComplete="off"
                                autoFocus
                            />
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Terminal;
