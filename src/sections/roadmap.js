import { list, table } from "../modules/html.js";

export const roadmapSection = {
  id: "roadmap",
  title: "Roadmap de Implementacion",
  render() {
    const phases = [
      ["0 Discovery", "Tesis, regulacion, economics", "Producto + Legal"],
      ["1 Diseño", "PRD, arquitectura, RFP", "Producto + Tech"],
      ["2 Build", "Integraciones, KYC, ledger", "Tech + Risk"],
      ["3 Piloto", "Usuarios beta, monitoreo, soporte", "Ops + CX"],
      ["4 Scale", "Growth, optimizacion, auditoria", "C-Level + Finance"]
    ];
    return `
      <div class="timeline">
        ${phases.map(([name, deliverable, owner]) => `<div class="phase"><strong>${name}</strong><p>${deliverable}</p><small>${owner}</small></div>`).join("")}
      </div>
      <details open><summary>Timeline estimado Gantt</summary><div>${table(["Mes", "Foco", "Resultado"], [
        ["0-1", "Discovery + modelo regulatorio", "Decision go/no-go"],
        ["1-2", "Diseño funcional y vendors", "PRD + RFP + arquitectura"],
        ["2-3", "Build MVP", "MVP testeable"],
        ["3-5", "Piloto controlado", "Primeras transacciones reales"],
        ["6-9", "Full launch", "Escala comercial y controles maduros"]
      ])}</div></details>
      <details><summary>Dependencias criticas y cuellos de botella</summary><div>${list(["Sponsor o licencia", "KYC/AML aprobado", "Certificacion PCI/EMV", "Contratos y SLAs de vendor", "Conciliacion operativa", "Soporte y disputas"])}</div></details>
    `;
  }
};
