const PROMPT = "grc@⊢:~$";

// Multiline ASCII banner.
const ASCII_BANNER = [
  "  ________                      ",
  " /  _____/ __ __                ",
  "/   \\  ___|  |  \\               ",
  "\\    \\_\\  \\  |  /               ",
  " \\______  /____/                ",
  "        \\/                      ",
  "__________                      ",
  "\\______   \\__ __  ____          ",
  " |       _/  |  \\/  _ \\         ",
  " |    |   \\  |  (  <_> )        ",
  " |____|_  /____/ \\____/         ",
  "        \\/                      ",
  "_________ .__                   ",
  "\\_   ___ \\|  |__   ____   ____  ",
  "/    \\  \\/|  |  \\_/ __ \\ /    \\ ",
  "\\     \\___|   Y  \\  ___/|   |  \\",
  " \\______  /___|  /\\___  >___|  /",
  "        \\/     \\/     \\/     \\/ ",
];

const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

let currentInput = "";
const history = [];
let historyIndex = -1;

// Map command targets to URLs (adjust as your site grows)
const SECTIONS = {
  blog: "/blog/",
  notes: "/notes/",
  "math-notes": "/notes/",
};

function scrollToBottom() {
  const body = document.getElementById("terminal-body");
  if (body) {
    body.scrollTop = body.scrollHeight;
  }
}

function makeOutputLine() {
  const line = document.createElement("div");
  line.classList.add("terminal-output-line");
  return line;
}

function printLine(text, options = {}) {
  const line = makeOutputLine();

  if (options.className) {
    line.classList.add(options.className);
  }

  if (options.withPrompt) {
    const promptSpan = document.createElement("span");
    promptSpan.className = "prompt";
    promptSpan.textContent = PROMPT;
    line.appendChild(promptSpan);
  }

  const textSpan = document.createElement("span");
  textSpan.className = "input";

  if (options.asHtml) {
    textSpan.innerHTML = text;
  } else {
    textSpan.textContent = text;
  }

  line.appendChild(textSpan);
  terminalOutput.appendChild(line);
  scrollToBottom();
}

function clearTerminal() {
  terminalOutput.innerHTML = "";
}

function handleHelp() {
  printLine("Available commands:", { className: "system" });
  printLine("  help            Show this help message", { className: "system" });
  printLine("  ls              List sections", { className: "system" });
  printLine("  open <section>  Open a section (blog, notes)", {
    className: "system"
  });
  printLine("  axioms          Show a few local axioms", { className: "system" });
  printLine("  lemma           Print a small lemma", { className: "system" });
  printLine("  about           About this site", { className: "system" });
  printLine("  credits         Show UI credits", { className: "system" });
  printLine("  clear           Clear the screen", { className: "system" });
}

function handleLs() {
  printLine("sections/", { className: "system" });
  printLine("  blog", { className: "system" });
  printLine("  notes", { className: "system" });
}

function handleAxioms() {
  printLine("Axioms (local, informal):", { className: "system" });
  printLine(
    "(1) Mathematics should be precise enough to survive formalization.",
    { className: "system" }
  );
  printLine(
    "(2) Computers are not a threat to rigor; vague arguments are.",
    { className: "system" }
  );
  printLine(
    "(3) Foundations are optional only until they fail you.",
    { className: "system" }
  );
}

function handleLemma() {
  printLine("Lemma.", { className: "system" });
  printLine(
    "Every sufficiently interesting proof eventually drags logic into the room.",
    { className: "system" }
  );
}

function handleAbout() {
  printLine(
    "Ruo-Chen Gu — graduate student in mathematics at UW–Madison.",
    { className: "system" }
  );
  printLine(
    "Interests: analysis, logic, set theory, automated theorem proving, Lean.",
    { className: "system" }
  );
}

function handleCredits() {
  printLine(
    'Terminal UI inspired by <a href="https://terminal.jcubic.pl/" target="_blank" rel="noopener noreferrer">jQuery Terminal</a> by Jakub Jankiewicz.',
    { className: "system", asHtml: true }
  );
}

function handleOpen(target) {
  if (!target) {
    printLine("open: missing section name (try: open blog)", {
      className: "error"
    });
    return;
  }

  const normalized = target.toLowerCase();
  const url = SECTIONS[normalized];

  if (!url) {
    printLine(`open: unknown section '${target}'`, { className: "error" });
    return;
  }

  const linkHtml = `Opening <a href="${url}">${normalized}</a> ...`;
  printLine(linkHtml, { className: "system", asHtml: true });

  // Auto-navigate:
  window.location.href = url;
}

function handleCommand(rawInput) {
  const input = rawInput.trim();
  if (!input) {
    return;
  }

  // Echo the command
  printLine(input, { withPrompt: true });

  // Save to history
  history.push(input);
  historyIndex = history.length;

  const [cmd, ...args] = input.split(/\s+/);
  const argStr = args.join(" ");

  switch (cmd.toLowerCase()) {
    case "help":
      handleHelp();
      break;
    case "ls":
      handleLs();
      break;
    case "clear":
      clearTerminal();
      break;
    case "axioms":
      handleAxioms();
      break;
    case "lemma":
      handleLemma();
      break;
    case "about":
      handleAbout();
      break;
    case "credits":
      handleCredits();
      break;
    case "blog":
      handleOpen("blog");
      break;
    case "notes":
      handleOpen("notes");
      break;
    case "open":
      handleOpen(argStr);
      break;
    default:
      printLine(`command not found: ${cmd}`, { className: "error" });
  }
}

function updateInputDisplay() {
  terminalInput.textContent = currentInput;
  scrollToBottom();
}

function handleKeyDown(event) {
  // Printable characters
  if (
    event.key.length === 1 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey
  ) {
    currentInput += event.key;
    updateInputDisplay();
    event.preventDefault();
    return;
  }

  if (event.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateInputDisplay();
    event.preventDefault();
    return;
  }

  if (event.key === "Enter") {
    const input = currentInput;
    currentInput = "";
    updateInputDisplay();
    handleCommand(input);
    event.preventDefault();
    return;
  }

  if (event.key === "ArrowUp") {
    if (history.length > 0) {
      historyIndex = Math.max(0, historyIndex - 1);
      currentInput = history[historyIndex] || "";
      updateInputDisplay();
    }
    event.preventDefault();
    return;
  }

  if (event.key === "ArrowDown") {
    if (history.length > 0) {
      historyIndex = Math.min(history.length, historyIndex + 1);
      if (historyIndex === history.length) {
        currentInput = "";
      } else {
        currentInput = history[historyIndex] || "";
      }
      updateInputDisplay();
    }
    event.preventDefault();
    return;
  }
}

// --- subtle hover effect on scroll for the fixed terminal ---
const terminalColumn = document.querySelector(".terminal-column");
let hoverTimeout = null;

if (terminalColumn) {
  window.addEventListener("scroll", () => {
    // small upward nudge
    terminalColumn.style.setProperty("--hover-offset", "-6px");

    if (hoverTimeout !== null) {
      clearTimeout(hoverTimeout);
    }
    // relax back to center after a short delay
    hoverTimeout = setTimeout(() => {
      terminalColumn.style.setProperty("--hover-offset", "0px");
    }, 150);
  });
}

// Bio cards: vertical index switching
function initBioCards() 
{
  const navItems = document.querySelectorAll(".bio-nav-item");
  const cards = document.querySelectorAll(".bio-card");
  const definitionGraphic = document.querySelector(".bio-definition-graphic");

  if (!navItems.length || !cards.length) {
    return;
  }

  function setActiveCard(key) {
    // Toggle nav pills
    navItems.forEach((btn) => {
      if (btn.dataset.card === key) {
        btn.classList.add("bio-nav-item--active");
      } else {
        btn.classList.remove("bio-nav-item--active");
      }
    });

    // Toggle cards
    cards.forEach((card) => {
      if (card.dataset.card === key) {
        card.classList.add("bio-card--active");
      } else {
        card.classList.remove("bio-card--active");
      }
    });

    // Toggle definition SVG
    if (definitionGraphic) {
      if (key === "definition") {
        definitionGraphic.classList.add("bio-definition-graphic--visible");
      } else {
        definitionGraphic.classList.remove("bio-definition-graphic--visible");
      }
    }
  }

  // Attach handlers
  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.card;
      if (!key) {
        return;
      }
      setActiveCard(key);
    });
  });
}






function initTerminal() {
  if (!terminalOutput || !terminalInput) {
    return;
  }

  // ASCII banner at top
  ASCII_BANNER.forEach((line) => {
    printLine(line, { className: "banner" });
  });

  // Optional blank line after the banner
  printLine("", { className: "banner" });

  printLine("grc@⊢:~   —   foundations, logic, ATP", { className: "system" });
  printLine("Welcome to grc's terminal.", { className: "system" });
  printLine("Site is optimized for desktop, and may NOT work on mobile.", { className: "system" });
  printLine(
    'UI largely inspired by <a href="https://terminal.jcubic.pl/" target="_blank" rel="noopener noreferrer">jQuery Terminal</a>.',
    { className: "system", asHtml: true }
  );
  printLine('Type "help" to see available commands.', {
    className: "system"
  });

  window.addEventListener("keydown", handleKeyDown);
}

initTerminal();
initBioCards();