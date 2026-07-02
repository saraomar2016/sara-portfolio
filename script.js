// Future edits: update these project details when Sara wants to revise public case-study wording.
const projectDetails = {
  mandoobi: {
    type: "Enterprise Business Application",
    title: "Mandoobi Sales Tracking Platform",
    meta: "Sales Operations / Transportation | .NET Backend Developer",
    overview:
      "Mandoobi is a sales tracking and workflow management platform used to support sales representatives, vehicles, warehouse and stock movement, operational tracking, live updates, and reporting workflows.",
    role:
      "I worked on backend APIs, database design, reporting support, real-time updates, integrations, and backend services that connected desktop and mobile clients with operational workflows.",
    responsibilities: [
      "Designed and developed backend APIs for sales and operational workflows.",
      "Built database structures for tracking sales operations and vehicle-related inventory.",
      "Implemented real-time updates using SignalR.",
      "Supported reporting features using RDLC.",
      "Integrated backend services with desktop and mobile clients.",
      "Improved reliability and helped support operational visibility."
    ],
    outcome:
      "Helped improve operational visibility, organize business data and reporting, and enable real-time updates between connected systems.",
    technologies: ["C#", "ASP.NET Core Web API", "MongoDB", "SignalR", "WPF", "RDLC Reports", "REST APIs"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  monitoring: {
    type: "Monitoring & Facility Management Solutions",
    title: "Monitoring & Facility Management Solutions",
    meta: "Security / Facility Management | .NET Developer",
    overview:
      "A set of related operational solution areas supporting security, monitoring, visitor access, facility workflows, and operational control. The public case study groups the work into BMS, VMS, LPR, and monitoring integrations without exposing internal system details.",
    role:
      "I contributed to .NET application development, database-backed workflows, integration support, and desktop application features for monitoring and facility management use cases.",
    responsibilities: [
      "Developed desktop and business application features using C#, WPF, and WinForms.",
      "Designed and supported SQL Server database logic for operational workflows.",
      "BMS (Building Management System): Supported workflows related to facility monitoring and operational control, helping internal users manage building-related processes and system data.",
      "VMS (Visitor Management System): Worked on visitor access workflows, registration-related screens, database-backed visitor records, and operational features used by internal teams.",
      "LPR (License Plate Recognition): Contributed to workflows related to vehicle identification, plate recognition integration, and operational tracking connected to monitoring and security processes.",
      "Monitoring integrations: Supported integration work with monitoring systems, including Milestone Systems SDK, to connect application workflows with security and monitoring operations.",
      "Built reporting and operational features where needed.",
      "Worked on reliability and usability improvements for internal users."
    ],
    outcome:
      "Supported reliable daily operations by helping internal users manage monitoring, access, reporting, and facility-related workflows more consistently.",
    technologies: ["C#", "WPF", "WinForms", "SQL Server", "MongoDB", "Entity Framework", "RDLC Reports", ".NET MAUI", "Milestone Systems SDK"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  tolling: {
    type: "Business Operations System",
    title: "Ticketing & Tolling System",
    meta: "Tolling / Subscriptions / Operations | .NET Developer",
    overview:
      "A business operations system for ticketing, tolling, subscriptions, reporting, and operational tracking across internal workflows.",
    role:
      "I worked on application features, database structures, business logic, reporting, and workflow support for operational business users.",
    responsibilities: [
      "Developed application features using C# and WinForms.",
      "Built and maintained database-backed business workflows.",
      "Worked on subscription and ticketing logic.",
      "Created reporting features using RDLC.",
      "Supported operational tracking and internal business processes.",
      "Helped improve data organization and usability for business users."
    ],
    outcome:
      "Helped organize business data, support reporting needs, and make daily ticketing, tolling, and subscription workflows easier for business users to operate.",
    technologies: ["C#", "WinForms", "SQL Server", "Entity Framework", "RDLC Reports"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  companyArchive: {
    type: "Document Management / Internal Business System",
    title: "Company Archive System",
    meta: "Document Archiving / Internal Operations | .NET Developer",
    overview:
      "A company archive system designed to help internal teams organize, store, search, and manage company documents and structured records in a more reliable and accessible way.",
    role:
      "I worked on backend and application features related to document records, database structures, search workflows, file handling, and internal user operations.",
    responsibilities: [
      "Developed features for managing archived company documents and related metadata.",
      "Built database-backed workflows for organizing document records.",
      "Supported search and filtering features to help users find documents faster.",
      "Worked on file handling and document-related business logic.",
      "Helped improve data organization and internal document accessibility.",
      "Supported role-based or internal-user workflows where applicable, without exposing private implementation details."
    ],
    outcome:
      "Helped internal users organize company documents more consistently, improve document access, and reduce dependency on scattered manual file tracking.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "REST APIs", "RDLC Reports", "File Management"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private documents, credentials, production screenshots, or internal business details."
  },
  parking: {
    type: "Operations / Parking Management System",
    title: "Parking Management System",
    meta: "Parking Operations / Access Control | .NET Developer",
    overview:
      "A parking management system used to support parking operations, vehicle-related workflows, access control processes, subscriptions or permits, reporting, and internal operational tracking.",
    role:
      "I worked on application features, database-backed workflows, reporting, and business logic that supported daily parking operations and internal users.",
    responsibilities: [
      "Developed application features for parking and vehicle-related workflows.",
      "Worked on database structures for operational tracking and parking records.",
      "Supported subscription, permit, or access-related business logic where applicable.",
      "Built reporting features using RDLC.",
      "Helped improve data organization for parking operations.",
      "Supported internal users with practical features for daily operational workflows."
    ],
    outcome:
      "Helped support more organized parking operations, clearer vehicle-related records, and reporting workflows for business users.",
    technologies: ["C#", "WinForms", "SQL Server", "Entity Framework"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
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
  modal.querySelector("[data-modal-outcome]").textContent = project.outcome;
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
