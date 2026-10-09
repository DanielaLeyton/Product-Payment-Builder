import { depthText, list, table } from "../modules/html.js";

export const productSection = {
  id: "product",
  title: "Ficha del Producto",
  render(ctx) {
    const { product } = ctx;
    return `
      <div class="grid-2">
        <div class="mini-card"><h3>Definicion y alcance</h3><p>${product.definition}</p><p>${depthText(ctx, "Incluye MVP, roles clave y puntos de decision para priorizar.", "Incluye dominios de cuenta, ledger, autorizacion, conciliacion, soporte, riesgos y reporting.")}</p></div>
        <div class="mini-card"><h3>Modelo economico</h3><p>${product.unitEconomics.model}</p><p><strong>Breakeven:</strong> ${product.unitEconomics.breakEven}</p></div>
      </div>
      <details open><summary>Unit economics detallados</summary><div>
        ${table(["Supuesto", "Rango inicial"], product.unitEconomics.assumptions)}
        <div class="grid-2 unit-grid">
          <div class="mini-card"><h3>Revenue drivers</h3>${table(["Driver", "Como impacta"], product.unitEconomics.revenueDrivers)}</div>
          <div class="mini-card"><h3>Cost drivers</h3>${table(["Driver", "Como impacta"], product.unitEconomics.costDrivers)}</div>
        </div>
        <div class="mini-card"><h3>Palancas de mejora</h3>${list(product.unitEconomics.levers)}</div>
      </div></details>
      <details open><summary>Casos de uso principales</summary><div>${list(product.useCases)}</div></details>
      <details><summary>User personas target</summary><div>${list(product.personas)}</div></details>
      <details open><summary>Flujo de dinero end-to-end</summary><div class="mermaid-wrap"><pre class="mermaid">${moneyFlowDiagram(product.label)}</pre></div></details>
    `;
  }
};

function moneyFlowDiagram(label) {
  return `flowchart LR
    U[Usuario] --> A[App ${label}]
    A --> K[KYC y limites]
    A --> L[Ledger]
    L --> P[Procesador o PSP]
    P --> R[Red / Rail local]
    R --> M[Comercio o beneficiario]
    M --> C[Conciliacion]
    C --> L`;
}
