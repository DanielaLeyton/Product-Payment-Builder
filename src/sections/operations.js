import { list, table } from "../modules/html.js";

export const operationsSection = {
  id: "operations",
  title: "Playbook Operativo",
  render() {
    return `
      <div class="grid-2">
        <div class="mini-card"><h3>Procesos operativos</h3>${list(["Onboarding y KYC", "Emision o apertura de cuenta", "Cash-in / recargas", "Autorizacion y liquidacion", "Disputas y reversas", "Offboarding y cierre"])}</div>
        <div class="mini-card"><h3>Equipo minimo</h3>${list(["Product Manager", "Tech Lead + 2 ingenieros", "Compliance Officer", "Risk/Fraud Analyst", "Ops Lead", "CX especializado"])}</div>
      </div>
      <details open><summary>SLAs y metricas de salud</summary><div>${table(["Metrica", "Objetivo MVP", "Objetivo escala"], [
        ["Uptime API", "99.5%", "99.9%+"],
        ["Aprobacion pagos", "85-92%", "92-97%"],
        ["Tiempo de emision/apertura", "< 5 min", "< 90 seg"],
        ["Disputas resueltas", "10 dias habiles", "5 dias habiles"],
        ["Fraude neto", "< 35 bps", "< 20 bps"]
      ])}</div></details>
      <details><summary>Runbooks esenciales</summary><div>${list(["Caida de procesador", "Descuadre de ledger", "Alerta AML", "Pico de chargebacks", "Incidente de datos", "Comunicacion a regulador si aplica"])}</div></details>
    `;
  }
};
