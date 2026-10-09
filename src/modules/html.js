export function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

export function table(headers, rows) {
  return `<table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}

export function cite(sources, keys) {
  return keys
    .map((key) => `<a class="source-link" href="${sources[key][1]}" target="_blank" rel="noopener">${sources[key][0]}</a>`)
    .join(" ");
}

export const legalDisclaimer = "Validar con equipo legal. Revisado en octubre de 2026.";

export function depthText(ctx, executive, technical) {
  return ctx.depth === "executive" ? executive : technical;
}

export function slug(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function sectionShell(number, title, body) {
  const badge =
    title === "Mapa Regulatorio"
      ? `<span class="disclaimer">${legalDisclaimer}</span>`
      : title === "Benchmark Competitivo"
        ? '<span class="status-pill">Fuentes públicas</span>'
        : '<span class="status-pill">Mock realista</span>';
  return `
    <article id="section-${number}" class="kit-section">
      <div class="section-card">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Seccion ${number}</span>
            <h2>${title}</h2>
          </div>
          ${badge}
        </div>
        ${body}
      </div>
    </article>
  `;
}
