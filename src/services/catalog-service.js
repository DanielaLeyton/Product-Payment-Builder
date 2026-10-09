import { marketCatalog, productCatalog } from "../modules/catalog.js";
import { normalize } from "../modules/html.js";

export function listSections(sectionRegistry) {
  return sectionRegistry.map((section) => section.title);
}

export function getActiveMarket() {
  return marketCatalog.Chile;
}

export function getMarket(key) {
  return marketCatalog[key] || marketCatalog.Chile;
}

export function marketEntries() {
  return Object.entries(marketCatalog);
}

export function detectCountry(text) {
  const value = normalize(text);
  const aliases = { chile: "Chile", mexico: "Mexico", "méxico": "Mexico", brasil: "Brasil", brazil: "Brasil" };
  const alias = Object.keys(aliases).find((item) => value.includes(normalize(item)));
  return alias ? aliases[alias] : "";
}

export function detectProducts(text) {
  const value = normalize(text);
  return Object.entries(productCatalog)
    .filter(([, product]) => product.keywords.some((keyword) => value.includes(normalize(keyword))))
    .map(([key]) => key);
}

export function getProduct(key) {
  return productCatalog[key] || productCatalog.wallet;
}

export function ambiguityOptions(intent, matches) {
  const value = normalize(intent);
  if (value === "wallet" || value === "billetera" || value.includes(" wallet") || value.includes("billetera")) {
    return ["wallet", "crypto", "account"];
  }
  if (value === "cuenta") return ["account", "wallet", "prepaid"];
  return [...new Set(matches.length ? matches : ["wallet", "account", "prepaid"])].slice(0, 3);
}

export function isAmbiguous(intent, matches) {
  const value = normalize(intent);
  return matches.length > 1 || value === "wallet" || value === "billetera" || value === "cuenta";
}

export function optionLabel(key) {
  if (key === "wallet") return "Wallet custodial";
  if (key === "crypto") return "Wallet non-custodial / crypto";
  if (key === "account") return "Cuenta de pago";
  return getProduct(key).label;
}

export function optionDescription(key) {
  if (key === "wallet") return "El usuario mantiene saldo dentro de una cuenta operada por la fintech o sponsor.";
  if (key === "crypto") return "El usuario opera activos digitales o rampas fiat-crypto, con controles AML especificos.";
  if (key === "account") return "Cuenta transaccional regulada con identificador local para recibir y enviar fondos.";
  return getProduct(key).definition;
}
