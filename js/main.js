import { showSection } from "./tabs.js"; // ✅ Import `showSection`
import { toggleSidebar } from "./sidebar.js";
import { setupButtons } from "./buttons.js";

// Attach event listener to sidebar toggle button
document
  .getElementById("toggleSidebar")
  .addEventListener("click", toggleSidebar);

// Attach event listeners to all tab buttons
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.getAttribute("data-section"); // "customers" or "suppliers"
    showSection(sectionId); // ✅ Call function correctly
  });
});

// Setup buttons
setupButtons();
