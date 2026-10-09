export const downloadsSection = {
  id: "downloads",
  title: "Kit Descargable",
  render(ctx) {
    const assets = [
      ["prd", "PRD template", "Objetivo, alcance, journeys, KPIs y riesgos."],
      ["rfp", "RFP para vendors", "Preguntas para procesador, core, KYC, sponsor y adquirencia."],
      ["checklist", "Checklist regulatorio", "Licencias, KYC, AML, datos, contratos y tiempos."],
      ["finance", "Modelo financiero Excel", "CSV abrible en Excel con unit economics base."]
    ];
    return `
      <div class="download-grid">
        ${assets.map(([key, title, desc]) => `<div class="download-card"><h3>${title}</h3><p>${desc}</p><button data-download="${key}">Descargar</button></div>`).join("")}
      </div>
      <details><summary>Resumen del paquete</summary><div><p>Incluye supuestos para ${ctx.product.label} en ${ctx.market.label}: ${ctx.market.regulators.slice(0, 3).join(", ")}.</p></div></details>
    `;
  }
};
