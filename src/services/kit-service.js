import { sectionRegistry } from "../sections/index.js";
import { legalDisclaimer, sectionShell, slug } from "../modules/html.js";
import { getMarket, getProduct } from "./catalog-service.js";

export function createKitContext({ intent, country = "Chile", productKey, depth }) {
  return {
    intent,
    country,
    depth,
    productKey,
    product: getProduct(productKey),
    market: getMarket(country)
  };
}

export function renderKitSections(ctx) {
  return sectionRegistry.map((section, index) => sectionShell(index + 1, section.title, section.render(ctx))).join("");
}

export function sectionTitles() {
  return sectionRegistry.map((section) => section.title);
}

export function renderKitSkeleton() {
  return `
    <section class="kit-loading" aria-live="polite" aria-busy="true">
      <div class="loading-copy">
        <span class="eyebrow">Construyendo kit chileno</span>
        <h2>Armando regulación, arquitectura y roadmap</h2>
      </div>
      ${[1, 2, 3].map(() => `
        <article class="skeleton-section">
          <div class="skeleton-line short"></div>
          <div class="skeleton-line title"></div>
          <div class="skeleton-grid">
            <div class="skeleton-block"></div>
            <div class="skeleton-block"></div>
          </div>
          <div class="skeleton-table">
            <span></span><span></span><span></span>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

export function answerKitQuestion(ctx, question) {
  const q = question.toLowerCase();
  if (q.includes("licencia") || q.includes("regula") || q.includes("legal")) {
    return `Mapa regulatorio: mira ${ctx.market.regulators.slice(0, 3).join(", ")}. Modelos posibles: ${ctx.market.licenses.slice(0, 2).join(" o ")}. La decision clave es licencia propia vs sponsor. ${legalDisclaimer}`;
  }
  if (q.includes("vendor") || q.includes("proveedor")) {
    return `Shortlist sugerida: ${ctx.product.vendors.slice(0, 4).join(", ")}. Pide SLAs, cobertura local, certificaciones, pricing por transaccion, ownership del ledger y tiempos de certificacion.`;
  }
  if (q.includes("riesgo") || q.includes("fraude")) {
    return "Riesgos principales: fraude de onboarding, abuso transaccional, liquidez y disputas. Controles minimos: KYC por niveles, velocity checks, tokenizacion, monitoreo AML y runbooks de incidentes.";
  }
  if (q.includes("tiempo") || q.includes("roadmap") || q.includes("mvp")) {
    return "Un MVP razonable toma 3 meses si usas sponsor y vendors listos. El full launch suele tomar 6-9 meses por contratos, compliance, certificaciones, piloto y hardening operativo.";
  }
  if (q.includes("economics") || q.includes("margen") || q.includes("revenue")) {
    return `Economics base: ingresos por ${ctx.product.revenue.slice(0, 3).join(", ")}. Costos fuertes: ${ctx.product.costs.slice(0, 3).join(", ")}. El breakeven depende de volumen, fraude y costo de soporte.`;
  }
  return `Para ${ctx.product.label} en ${ctx.country}, empezaria por cerrar alcance, sponsor/licencia, KYC y vendor core. ${legalDisclaimer}`;
}

export function downloadableAsset(ctx, type) {
  const baseName = `paykit-${slug(ctx.product.label)}-${slug(ctx.country)}`;
  const files = {
    prd: {
      name: `${baseName}-prd.md`,
      type: "text/markdown",
      content: `# PRD - ${ctx.product.label} en ${ctx.country}\n\n## Objetivo\n${ctx.intent}\n\n## Alcance MVP\n${ctx.product.useCases.map((x) => `- ${x}`).join("\n")}\n\n## KPIs\n- Activacion\n- Volumen transaccional\n- Aprobacion\n- Fraude neto\n- NPS\n\n## Riesgos\n${ctx.product.costs.map((x) => `- ${x}`).join("\n")}\n\n${legalDisclaimer}\n`
    },
    rfp: {
      name: `${baseName}-rfp.md`,
      type: "text/markdown",
      content: `# RFP Vendors - ${ctx.product.label}\n\n## Vendors sugeridos\n${ctx.product.vendors.concat(ctx.market.vendors).slice(0, 8).map((x) => `- ${x}`).join("\n")}\n\n## Preguntas clave\n- Cobertura en ${ctx.country}\n- SLAs y uptime\n- Pricing por evento/transaccion\n- Certificaciones PCI/EMV/3DS\n- Modelo de soporte y escalamiento\n- Exportacion de datos y ownership del ledger\n`
    },
    checklist: {
      name: `${baseName}-checklist-regulatorio.md`,
      type: "text/markdown",
      content: `# Checklist regulatorio - ${ctx.country}\n\n## Reguladores\n${ctx.market.regulators.map((x) => `- ${x}`).join("\n")}\n\n## Licencias/modelos\n${ctx.market.licenses.map((x) => `- [ ] ${x}`).join("\n")}\n\n## KYC/AML\n${ctx.market.kyc.map((x) => `- [ ] ${x}`).join("\n")}\n\n## Obligaciones operativas\n${ctx.market.obligations.map(([topic, text]) => `- [ ] ${topic}: ${text}`).join("\n")}\n\n## Fuentes\n${Object.values(ctx.market.sources).map(([name, url]) => `- ${name}: ${url}`).join("\n")}\n\n${legalDisclaimer}\n`
    },
    finance: {
      name: `${baseName}-modelo-financiero.csv`,
      type: "text/csv",
      content: [
        "Hoja,Concepto,Valor,Notas",
        `Resumen,Producto,${ctx.product.label},${ctx.country}`,
        `Resumen,Modelo economico,${ctx.product.unitEconomics.model},`,
        `Resumen,Breakeven,${ctx.product.unitEconomics.breakEven},`,
        ...ctx.product.unitEconomics.assumptions.map(([k, v]) => `Supuestos,${k},${v},Rango base para discovery`),
        ...ctx.product.unitEconomics.revenueDrivers.map(([k, v]) => `Revenue drivers,${k},${v},Validar pricing local`),
        ...ctx.product.unitEconomics.costDrivers.map(([k, v]) => `Cost drivers,${k},${v},Validar con vendor/sponsor`),
        ...ctx.product.unitEconomics.levers.map((v) => `Palancas,${v},,Priorizar en roadmap`),
        "P&L,Concepto,Mes 1,Mes 2,Mes 3,Mes 6,Mes 9",
        "P&L,Usuarios activos,1000,5000,12000,45000,90000",
        "P&L,TPV USD,50000,250000,800000,3500000,9000000",
        "P&L,Revenue neto USD,900,4500,15200,70000,180000",
        "P&L,Costos variables USD,650,3000,9800,43000,105000",
        "P&L,Costos fijos USD,25000,32000,42000,65000,90000",
        "P&L,EBITDA USD,-24750,-30500,-36600,-38000,-15000"
      ].join("\n")
    }
  };
  return files[type];
}
