document.addEventListener("DOMContentLoaded", () => {
  const keys = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  let encodedFlag = '';

  for (const k of keys) {
    encodedFlag += localStorage.getItem(k);
  }

  const flag = atob(encodedFlag);
  console.log("✅ Flag Reconstructed:", flag);
});
