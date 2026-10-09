import {
  ambiguityOptions,
  detectCountry,
  detectProducts,
  getMarket,
  getProduct,
  isAmbiguous,
  marketEntries,
  optionDescription,
  optionLabel
} from "./services/catalog-service.js";
import {
  answerKitQuestion,
  createKitContext,
  downloadableAsset,
  renderKitSections,
  renderKitSkeleton,
  sectionTitles
} from "./services/kit-service.js";

const state = {
  intent: "",
  country: "Chile",
  productKey: "",
  depth: "executive",
  ctx: null
};

let skeletonTimer = null;
const floatingChat = window.matchMedia("(max-width: 1180px)");

const els = {
  appShell: document.querySelector(".app-shell"),
  nav: document.getElementById("sectionNav"),
  sidebarReset: document.querySelector(".sidebar-action"),
  input: document.getElementById("intentInput"),
  hero: document.getElementById("hero"),
  decisionPanel: document.getElementById("decisionPanel"),
  dashboard: document.getElementById("kitDashboard"),
  topHeader: document.getElementById("topHeader"),
  kitTitle: document.getElementById("kitTitle"),
  countrySelect: document.getElementById("countrySelect"),
  execMode: document.getElementById("execMode"),
  techMode: document.getElementById("techMode"),
  chatPanel: document.getElementById("chatPanel"),
  chatMessages: document.getElementById("chatMessages"),
  chatForm: document.getElementById("chatForm"),
  chatInput: document.getElementById("chatInput"),
  chatLauncher: document.getElementById("chatLauncher"),
  toggleChat: document.getElementById("toggleChat")
};

init();

function init() {
  renderNav();
  renderCountrySelect();
  showHome();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => {
      els.input.value = button.dataset.example;
      els.input.focus();
    });
  });

  els.countrySelect.addEventListener("change", () => {
    state.country = "Chile";
    els.countrySelect.value = "Chile";
    if (state.productKey) renderKit(false);
  });

  els.execMode.addEventListener("click", () => setDepth("executive"));
  els.techMode.addEventListener("click", () => setDepth("technical"));
  els.toggleChat.addEventListener("click", () => setChatVisible(false));
  els.chatLauncher.addEventListener("click", () => setChatVisible(true));

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-generate-kit]")) {
      event.preventDefault();
      startBuild(els.input.value.trim());
    }
    if (event.target.closest("[data-reset-builder]")) showHome();
    if (event.target.closest("[data-download]")) downloadAsset(event.target.closest("[data-download]").dataset.download);
  });

  els.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = els.chatInput.value.trim();
    if (!question || !state.ctx) return;
    addMessage(question, "user");
    addMessage(answerKitQuestion(state.ctx, question), "bot");
    els.chatInput.value = "";
  });
}

function renderCountrySelect() {
  els.countrySelect.innerHTML = marketEntries()
    .map(([key, market]) => `<option value="${key}" ${market.status === "soon" ? "disabled" : ""}>${market.label}</option>`)
    .join("");
}

function renderNav() {
  els.nav.innerHTML = sectionTitles().map((title, index) => `<a href="#section-${index + 1}">${index + 1}. ${title}</a>`).join("");
}

function startBuild(intent) {
  if (!intent) return;
  state.intent = intent;
  const requestedCountry = detectCountry(intent);
  const matches = detectProducts(intent);

  if (requestedCountry && getMarket(requestedCountry).status === "soon") {
    showSoonMarket(requestedCountry, matches);
    return;
  }

  state.country = "Chile";
  els.countrySelect.value = "Chile";

  if (matches.length === 0 || isAmbiguous(intent, matches)) {
    showProductChoice(matches);
    return;
  }

  state.productKey = matches[0];
  renderKit(true);
}

function showHome() {
  if (skeletonTimer) window.clearTimeout(skeletonTimer);
  skeletonTimer = null;
  state.intent = "";
  state.country = "Chile";
  state.productKey = "";
  state.ctx = null;
  els.input.value = "";
  els.countrySelect.value = "Chile";
  els.appShell.classList.add("home-mode");
  els.hero.classList.remove("hidden");
  els.decisionPanel.classList.add("hidden");
  els.dashboard.classList.add("hidden");
  els.topHeader.classList.add("hidden");
  setKitChromeVisible(false);
  setChatVisible(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSoonMarket(country, matches) {
  showDecisionView();
  const productOptions = matches.length ? matches : detectProducts(state.intent);
  els.decisionPanel.innerHTML = `
    <div class="section-card">
      <span class="eyebrow">Mercado pronto</span>
      <h2>${country} estara disponible pronto</h2>
      <p class="muted">Por ahora PayKit Builder esta enfocado en Chile. Puedes generar el mismo producto con regulacion, vendors y benchmarks chilenos.</p>
      <div class="choices-grid grid-3">
        <div class="choice-card">
          <h3>Chile</h3>
          <p>Mercado activo con kit completo.</p>
          <button data-use-chile>Generar para Chile</button>
        </div>
        <div class="choice-card disabled">
          <h3>Mexico - Pronto</h3>
          <p>Regulacion y vendors mexicanos quedaran disponibles en una proxima version.</p>
          <button type="button" disabled>No disponible</button>
        </div>
        <div class="choice-card disabled">
          <h3>Brasil - Pronto</h3>
          <p>Regulacion y vendors brasilenos quedaran disponibles en una proxima version.</p>
          <button type="button" disabled>No disponible</button>
        </div>
      </div>
    </div>
  `;
  els.decisionPanel.querySelector("[data-use-chile]").addEventListener("click", () => {
    state.country = "Chile";
    const nextMatches = productOptions.length ? productOptions : detectProducts(state.intent);
    if (nextMatches.length === 0 || isAmbiguous(state.intent, nextMatches)) {
      showProductChoice(nextMatches);
    } else {
      state.productKey = nextMatches[0];
      renderKit(true);
    }
  });
}

function showProductChoice(matches) {
  showDecisionView();
  const options = ambiguityOptions(state.intent, matches);
  els.decisionPanel.innerHTML = `
    <div class="section-card">
      <span class="eyebrow">Intencion ambigua</span>
      <h2>Elige la interpretacion que mejor calza</h2>
      <p class="muted">Asi el kit queda accionable y evita mezclar obligaciones regulatorias distintas.</p>
      <div class="choices-grid grid-3">
        ${options
          .map((key) => `<div class="choice-card"><h3>${optionLabel(key)}</h3><p>${optionDescription(key)}</p><button data-product="${key}">Generar este kit</button></div>`)
          .join("")}
      </div>
    </div>
  `;
  els.decisionPanel.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      state.productKey = button.dataset.product;
      renderKit(true);
    });
  });
}

function showDecisionView() {
  els.appShell.classList.remove("home-mode");
  els.hero.classList.add("hidden");
  els.topHeader.classList.add("hidden");
  els.dashboard.classList.add("hidden");
  els.decisionPanel.classList.remove("hidden");
  setKitChromeVisible(false);
  els.sidebarReset.classList.remove("hidden");
  setChatVisible(false);
}

function setDepth(depth) {
  state.depth = depth;
  els.execMode.classList.toggle("active", depth === "executive");
  els.techMode.classList.toggle("active", depth === "technical");
  if (state.productKey) renderKit(false);
}

function renderKit(showSkeleton) {
  state.ctx = createKitContext({
    intent: state.intent,
    country: state.country,
    productKey: state.productKey,
    depth: state.depth
  });

  els.appShell.classList.remove("home-mode");
  els.hero.classList.add("hidden");
  els.decisionPanel.classList.add("hidden");
  els.dashboard.classList.remove("hidden");
  els.topHeader.classList.remove("hidden");
  setKitChromeVisible(true);
  if (showSkeleton) setChatVisible(!floatingChat.matches);
  els.kitTitle.textContent = `Kit para: ${displayIntent()} en ${state.country}`;
  els.countrySelect.value = state.country;

  if (skeletonTimer) window.clearTimeout(skeletonTimer);
  if (showSkeleton) {
    els.dashboard.innerHTML = renderKitSkeleton();
    window.scrollTo({ top: 0, behavior: "smooth" });
    skeletonTimer = window.setTimeout(() => {
      skeletonTimer = null;
      renderKitContent();
    }, 650);
    return;
  }

  renderKitContent();
}

function renderKitContent() {
  els.dashboard.innerHTML = renderKitSections(state.ctx);
  renderMermaid();
  seedChat();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setKitChromeVisible(isVisible) {
  els.nav.classList.toggle("hidden", !isVisible);
  els.sidebarReset.classList.toggle("hidden", !isVisible);
}

function setChatVisible(isVisible) {
  els.chatPanel.classList.toggle("hidden", !isVisible);
  els.chatLauncher.classList.toggle("hidden", isVisible || !state.productKey);
  els.appShell.classList.toggle("chat-collapsed", !isVisible);
}

function seedChat() {
  els.chatMessages.innerHTML = "";
  addMessage("Listo. Puedes preguntarme por licencias, vendors, riesgos, roadmap o economics del kit activo.", "bot");
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `chat-message ${type}`;
  message.textContent = text;
  els.chatMessages.appendChild(message);
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function downloadAsset(type) {
  if (!state.ctx) return;
  const file = downloadableAsset(state.ctx, type);
  if (!file) return;
  const blob = new Blob([file.content], { type: file.type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = file.name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function renderMermaid() {
  if (!window.mermaid) return;
  window.mermaid.initialize({ startOnLoad: false, theme: "base", securityLevel: "loose" });
  window.mermaid.run({ querySelector: ".mermaid" }).catch(() => {
    document.querySelectorAll(".mermaid-wrap").forEach((wrap) => {
      wrap.className = "mermaid-fallback";
    });
  });
}

function displayIntent() {
  return state.intent
    .replace(/\s+(en|para)\s+(Chile|Mexico|México|Brasil|Brazil)\b/gi, "")
    .replace(/\b(Chile|Mexico|México|Brasil|Brazil)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
