export function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the correct section
  document.getElementById(sectionId).style.display = "block";

  // Update active button styles
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document
    .querySelector(`.toggle-btn[data-section="${sectionId}"]`)
    ?.classList.add("active");

  // Update add button text dynamically
  const addButton = document.getElementById("addButton");
  addButton.textContent =
    sectionId === "customers" ? "Add Customer" : "Add Supplier";
}
