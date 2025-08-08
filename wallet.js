
function getTokens() {
  return parseInt(localStorage.getItem("tokens") || "1000");
}
function setTokens(amount) {
  localStorage.setItem("tokens", amount);
  updateWalletDisplay();
}
function updateWalletDisplay() {
  const el = document.getElementById("walletDisplay");
  if (el) el.textContent = "💰 Tokens: " + getTokens();
}
document.addEventListener("DOMContentLoaded", updateWalletDisplay);
