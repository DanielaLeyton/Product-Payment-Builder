import { list, table } from "../modules/html.js";

export const technologySection = {
  id: "technology",
  title: "Stack Tecnologico",
  render(ctx) {
    const { product, market } = ctx;
    return `
      <details open><summary>Arquitectura de referencia</summary><div class="mermaid-wrap"><pre class="mermaid">${architectureDiagram(product.label)}</pre></div></details>
      <div class="grid-3">
        <div class="mini-card"><h3>Componentes core</h3>${list(["Core bancario o wallet core", "Ledger doble entrada", "Procesador / gateway", "Switch y autorizador", "Motor KYC/AML", "Conciliacion y reporting"])}</div>
        <div class="mini-card"><h3>APIs criticas</h3>${list(["Onboarding/KYC", "Cuentas y saldos", "Autorizaciones", "Movimientos ISO 20022 cuando aplique", "Webhooks de eventos", "Disputas y chargebacks"])}</div>
        <div class="mini-card"><h3>Certificaciones</h3>${list(["PCI-DSS para datos de tarjeta", "EMV L2/L3 en POS", "3DS para ecommerce", "BIN sponsor y card network certification", "Pruebas de continuidad"])}</div>
      </div>
      <details open><summary>Build vs Buy</summary><div>${table(["Dimension", "Build in-house", "Comprar / vendor"], [
        ["Time-to-market", "6-12 meses", "8-16 semanas"],
        ["Control", "Alto", "Medio"],
        ["Costo inicial", "Alto", "Medio"],
        ["Riesgo regulatorio", "Mayor carga interna", "Compartido con sponsor/vendor"],
        ["Escalabilidad", "Custom", "Depende del contrato y SLAs"]
      ])}</div></details>
      <details><summary>Vendors recomendados por componente</summary><div>${list(product.vendors.concat(market.vendors).slice(0, 9))}</div></details>
    `;
  }
};

function architectureDiagram(label) {
  return `flowchart TB
    App[Mobile/Web App] --> API[API Gateway]
    API --> KYC[KYC AML]
    API --> Core[Core ${label}]
    Core --> Ledger[Ledger doble entrada]
    Core --> Proc[Procesador / Gateway]
    Proc --> Rail[Card Network / Transferencias]
    Ledger --> Recon[Conciliacion]
    Recon --> BI[Risk, Finance, Reporting]`;
}
