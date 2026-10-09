import { list, table } from "../modules/html.js";

export const regulatorySection = {
  id: "regulatory",
  title: "Mapa Regulatorio",
  render(ctx) {
    const { market } = ctx;
    return `
      <div class="grid-2">
        <div class="mini-card"><h3>Reguladores clave</h3>${list(market.regulators)}</div>
        <div class="mini-card"><h3>Licencias o modelos posibles</h3>${list(market.licenses)}</div>
        <div class="mini-card"><h3>KYC/AML por nivel</h3>${list(market.kyc)}</div>
        <div class="mini-card"><h3>Leyes aplicables</h3>${list(market.laws)}</div>
      </div>
      <details open><summary>Rol de cada regulador</summary><div>${table(["Entidad", "Implicancia para el producto"], market.regulatorRoles)}</div></details>
      <details open><summary>Rutas regulatorias y trade-offs</summary><div>${table(["Ruta", "Tiempo estimado", "Cuando conviene"], market.licensePaths)}</div></details>
      <details><summary>KYC/AML por nivel operativo</summary><div>${table(["Nivel", "Datos minimos", "Uso permitido", "Controles"], market.kycLevels)}</div></details>
      <details open><summary>Checklist de compliance con tiempos estimados</summary><div>${table(["Item", "Owner", "Tiempo"], [
        ["Gap legal inicial", "Legal + Producto", "2-3 semanas"],
        ["Modelo licencia vs sponsor", "Legal + Finance", "3-6 semanas"],
        ["Politicas KYC/AML y monitoreo", "Compliance + Risk", "4-8 semanas"],
        ["Contratos vendors y sponsor", "Legal + Procurement", "6-12 semanas"],
        ["Auditoria PCI/seguridad", "Tech + Security", "8-16 semanas"]
      ])}</div></details>
      <details><summary>Roadmap compliance production-ready</summary><div>${table(["Fase", "Owner", "Tiempo", "Entregable"], market.complianceRoadmap)}</div></details>
      <details><summary>Fuentes regulatorias base</summary><div>${table(["Fuente", "Uso en el kit"], market.regulatorySources)}</div></details>
    `;
  }
};
