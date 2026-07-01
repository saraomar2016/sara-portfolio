// Future edits: update these project details when Sara wants to revise public case-study wording.
const projectDetails = {
  mandoobi: {
    type: "Enterprise Business Application",
    title: "Mandoobi Sales Tracking Platform",
    meta: "Sales Operations / Transportation | .NET Backend Developer",
    overview:
      "Mandoobi is a sales tracking and workflow management platform designed to support field sales operations, live tracking, reporting, and business process management.",
    role:
      "I worked on backend development, database design, API development, reporting support, and system integration.",
    responsibilities: [
      "Designed and developed backend APIs for sales workflow management.",
      "Built database structures for operational tracking.",
      "Implemented real-time updates using SignalR.",
      "Supported desktop and mobile applications through API integration.",
      "Worked on reporting features to support business monitoring and decision-making."
    ],
    technologies: ["C#", "ASP.NET Core Web API", "MongoDB", "SignalR", "WPF", "RDLC Reports"],
    confidentiality:
      "Source code, production data, and internal screenshots are not publicly shared due to confidentiality."
  },
  monitoring: {
    type: "Monitoring & Security Solutions",
    title: "Enterprise Monitoring Systems",
    meta: "Security / Facility Management | .NET Developer",
    overview:
      "A group of enterprise solutions including Building Management Systems, Visitor Management Systems, and License Plate Recognition workflows.",
    role:
      "I developed .NET business applications and supported database-backed operational workflows for monitoring and facility management use cases.",
    responsibilities: [
      "Developed business applications using C#, WPF, WinForms, and SQL Server.",
      "Integrated monitoring workflows with Milestone Systems SDK.",
      "Supported visitor management, access workflows, and monitoring operations.",
      "Built backend and database logic for operational processes."
    ],
    technologies: ["C#", "WPF", "WinForms", "SQL Server", "MongoDB", "RDLC Reports", "MAUI", "Entity Framework", "Milestone Systems SDK"],
    confidentiality:
      "Internal implementation details and screenshots are not publicly shared."
  },
  tolling: {
    type: "Business Operations System",
    title: "Ticketing & Tolling System",
    meta: "Tolling / Subscriptions / Operations | .NET Developer",
    overview:
      "An automated tolling and subscription-based service management system supporting business workflows, reporting, and operational tracking.",
    role:
      "I worked on application features, reporting, database structures, and business logic for operational workflows.",
    responsibilities: [
      "Developed application features using C# and SQL Server.",
      "Built reporting features using RDLC.",
      "Worked on database structures and operational workflows.",
      "Supported business logic for subscription and ticketing processes."
    ],
    technologies: ["C#", "WinForms", "SQL Server", "Entity Framework", "RDLC Reports", "Milestone Systems SDK"],
    confidentiality:
      "The case study only describes the technical role and responsibilities without exposing confidential details."
  }
};

const html = document.documentElement;
const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const modal = document.querySelector("[data-project-modal]");
const backdrop = document.querySelector("[data-modal-backdrop]");
const closeModalButton = document.querySelector("[data-close-modal]");
const toast = document.querySelector("[data-toast]");
let lastFocusedElement = null;
let toastTimeout = null;

function readStoredTheme() {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch (error) {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch (error) {
    return;
  }
}

function setTheme(theme) {
  html.dataset.theme = theme;
  storeTheme(theme);
  themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
}

function createListItems(container, items) {
  container.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function openProject(projectKey) {
  const project = projectDetails[projectKey];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modal.querySelector("[data-modal-type]").textContent = project.type;
  modal.querySelector("[data-modal-title]").textContent = project.title;
  modal.querySelector("[data-modal-meta]").textContent = project.meta;
  modal.querySelector("[data-modal-overview]").textContent = project.overview;
  modal.querySelector("[data-modal-role]").textContent = project.role;
  modal.querySelector("[data-modal-confidentiality]").textContent = project.confidentiality;
  createListItems(modal.querySelector("[data-modal-responsibilities]"), project.responsibilities);
  createListItems(modal.querySelector("[data-modal-technologies]"), project.technologies);

  modal.hidden = false;
  backdrop.hidden = false;
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeProject() {
  modal.hidden = true;
  backdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 3600);
}

// // Future edits: replace the placeholder action after adding a public resume file.
// document.querySelector("[data-resume-placeholder]").addEventListener("click", () => {
//   showToast("Resume download placeholder: add a public resume file when ready.");
// });

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => {
    openProject(button.closest("[data-project]").dataset.project);
  });
});

closeModalButton.addEventListener("click", closeProject);
backdrop.addEventListener("click", closeProject);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeProject();
  }
});

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});

themeToggle.addEventListener("click", () => {
  setTheme(html.dataset.theme === "dark" ? "light" : "dark");
});

setTheme(readStoredTheme() || "dark");
