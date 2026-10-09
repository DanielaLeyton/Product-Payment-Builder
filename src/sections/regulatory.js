import { cite, list, table } from "../modules/html.js";

export const regulatorySection = {
  id: "regulatory",
  title: "Mapa Regulatorio",
  render(ctx) {
    const { market, product, productKey } = ctx;
    const sourced = (rows) => rows.map((row) => [...row.slice(0, -1), cite(market.sources, row[row.length - 1])]);
    const productRules = market.productRules[productKey] || [];
    return `
      <div class="mini-card product-rules">
        <h3>Qué aplica a ${product.label}</h3>
        ${list(productRules.map(([text, keys]) => `${text} ${cite(market.sources, keys)}`))}
      </div>
      <div class="grid-2">
        <div class="mini-card"><h3>Reguladores clave</h3>${list(market.regulators)}</div>
        <div class="mini-card"><h3>Normas aplicables</h3>${list(market.laws)}</div>
      </div>
      <details open><summary>Rutas regulatorias y requisitos</summary><div>${table(["Ruta", "Requisito clave", "Cuándo conviene", "Tiempo (estimación propia)", "Fuente"], sourced(market.licensePaths))}</div></details>
      <details open><summary>Obligaciones operativas</summary><div>${table(["Tema", "Qué exige", "Fuente"], sourced(market.obligations))}</div></details>
      <details open><summary>Calendario regulatorio</summary><div>${table(["Fecha", "Hito", "Fuente"], sourced(market.keyDates))}</div></details>
      <details><summary>Identificación y límites de saldo en prepago</summary><div>${table(["Tipo de tarjeta", "Identificación", "Saldo máximo", "Fuente"], sourced(market.kycLevels))}</div></details>
      <details><summary>Rol de cada regulador</summary><div>${table(["Entidad", "Implicancia para el producto", "Fuente"], sourced(market.regulatorRoles))}</div></details>
      <details><summary>Roadmap de compliance (estimación propia)</summary><div>${table(["Fase", "Owner", "Tiempo", "Entregable"], market.complianceRoadmap)}</div></details>
      <p class="muted source-note">Contenido elaborado con fuentes públicas y revisado en ${market.reviewed}. Los tiempos son estimaciones propias y no provienen de una fuente oficial. No reemplaza asesoría legal.</p>
    `;
  }
};
