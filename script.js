document.getElementById("toggleSidebar").addEventListener("click", function () {
  let sidebar = document.querySelector(".sidebar");
  let mainContent = document.querySelector(".main-content");

  sidebar.classList.toggle("collapsed");

  // Ensure smooth toggle button transition
  let icon = this.querySelector(".material-icons");
  icon.textContent = sidebar.classList.contains("collapsed")
    ? "menu_open"
    : "menu";
});

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add("active");

  // Update Sidebar Active State
  document.querySelectorAll(".menu li").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`.menu li[onclick="showSection('${sectionId}')"]`)
    ?.classList.add("active");

  // Update Toggle Button Active State
  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`.toggle-btn[onclick="showSection('${sectionId}')"]`)
    ?.classList.add("active");

  // Toggle Customer & Supplier List in Right Section
  if (sectionId === "customers") {
    document.getElementById("customers").style.display = "block";
    document.getElementById("suppliers").style.display = "none";
    document.getElementById("addButton").textContent = "Add Customer"; // Update button text
  } else if (sectionId === "suppliers") {
    document.getElementById("customers").style.display = "none";
    document.getElementById("suppliers").style.display = "block";
    document.getElementById("addButton").textContent = "Add Supplier"; // Update button text
  }
}
