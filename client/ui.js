document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

/**
 * Task form
 */
const processForm = document.querySelector("#processForm");

processForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = "Proceso de "+ processForm["process"].value;
  const process = processForm["process"].value;
  const description = processForm["description"].value;
  App.createProcess(title, process, description);
});
