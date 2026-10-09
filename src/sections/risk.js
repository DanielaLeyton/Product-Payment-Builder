import { list, table } from "../modules/html.js";

export const riskSection = {
  id: "risk",
  title: "Seguridad y Riesgos",
  render() {
    return `
      ${table(["Riesgo", "Ejemplo", "Control minimo"], [
        ["Fraude", "Cuenta falsa, triangulacion, robo de tarjeta", "KYC, device fingerprint, velocity checks, 3DS"],
        ["Credito", "Default o mora en BNPL", "Scoring, limites, provisiones, cobranza temprana"],
        ["Liquidez", "Descalce cash-in/cash-out", "Saldos segregados, forecast, limites diarios"],
        ["Operativo", "Falla conciliacion o autorizador", "Runbooks, alertas, reconciliacion diaria"],
        ["Reputacional", "Cobros erroneos o soporte lento", "SLAs, comunicacion incidente, compensacion"]
      ])}
      <div class="grid-2">
        <div class="mini-card"><h3>Controles minimos</h3>${list(["Tokenizacion", "Limites por cuenta y comercio", "Listas AML/sanciones", "Monitoreo transaccional", "Reglas por pais y nivel KYC", "Revision manual para alertas de alto riesgo"])}</div>
        <div class="mini-card"><h3>Continuidad e incidentes</h3>${list(["RTO inicial: 4 horas, RPO: 15 minutos", "Canal de crisis con Legal, Risk, Tech y CX", "Postmortem en 5 dias habiles", "Prueba DR semestral"])}</div>
      </div>
      <details><summary>Politicas de fraude y chargebacks</summary><div>${list(["Definir razon de disputa y evidencia requerida", "Bloqueo preventivo por patron de abuso", "Umbral de perdida esperada por cohorte", "Playbook de recupero y comunicacion al cliente"])}</div></details>
    `;
  }
};
