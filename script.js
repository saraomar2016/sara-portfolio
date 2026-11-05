// Future edits: update these project details when Sara wants to revise public case-study wording.
const projectDetails = {
  mandoobi: {
    type: "Retail & Wholesale Sales Management",
    title: "Mandoobi Sales Management Platform",
    meta: "Sales Operations | Freelance .NET Backend Developer",
    overview:
      "Mandoobi is a retail and wholesale sales management platform for sales representatives, supervisors, warehouses, and vehicle inventory, covering invoices, quotations, money collection, returns, stock transfers, and price lists.",
    role:
      "I architected and delivered the backend end-to-end within a 4-person team, and implemented the business logic and API integration of the WPF admin application on top of provided UI designs.",
    responsibilities: [
      "Built an ASP.NET Core 9 Web API with 70+ controllers on MongoDB, structured with Clean Architecture and Dependency Injection.",
      "Secured the API with JWT authentication and BCrypt password hashing.",
      "Implemented real-time updates with a SignalR hub across the admin application and the field sales mobile app.",
      "Generated PDF quotations with QuestPDF and sent email notifications with MailKit.",
      "Built 20 bilingual (Arabic/English) RDLC reports, including daily sales, inventory, profit margin, product performance, customer lifetime value, and salesperson performance.",
      "Implemented multi-company setup, user privileges, regions, and sales heat maps.",
      "Packaged the WPF admin application as a Windows installer."
    ],
    outcome:
      "Gave management one platform to run retail and wholesale sales, warehouses, and field teams, with live updates and 20 reports in two languages.",
    technologies: ["C#", "ASP.NET Core 9", "MongoDB", "JWT", "SignalR", "QuestPDF", "RDLC Reports", "WPF"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  monitoring: {
    type: "Security & Facility Management",
    title: "Security & Facility Management Platform",
    meta: "BMS · VMS · CCC · Entrance · Camera Access | MTI Holding | .NET Backend Developer",
    overview:
      "An integrated security platform made of several modules that share backend libraries, APIs, and a real-time SignalR hub.",
    role:
      "I built backend APIs, database designs, real-time messaging, and the business logic of the desktop and tablet applications across the modules.",
    responsibilities: [
      "BMS (Building Management System): Cardholders, doors, floors, departments, access groups, behavior models, alarms, floor maps, and access reports.",
      "VMS (Visitor Management System): Visitor registration, gates, lanes, temporary cards, face recognition and ID OCR requests, with a .NET MAUI tablet app for visitor check-in.",
      "CCC (Command & Control Center): One operator view of buildings, entrances, gates, fences, vehicle search, black/white lists, and live camera streams.",
      "Entrance System: Employee and visitor entry and exit dashboards with door status and camera streams.",
      "Camera Access Requests: Time-limited camera access workflow where users request a camera and approvers grant it with a session duration and optional PTZ control. Built the ASP.NET Core 7 API on MongoDB and the WPF application, with real-time request updates over SignalR and full request history.",
      "Setup and data entry tools: Central configuration for buildings, gates, devices, cameras, users, and permissions across all modules.",
      "Built REST APIs with ASP.NET Web API and ASP.NET Core 7 (Swagger) on MongoDB, shared by WPF applications and the MAUI tablet app.",
      "Packaged and deployed the BMS, VMS, CCC, and entrance control applications as Windows installers with Advanced Installer and Visual Studio Installer Projects."
    ],
    outcome:
      "Gave security operators one connected set of tools to manage buildings, visitors, entrances, and devices, with live updates across every module.",
    technologies: ["C#", "ASP.NET Web API", "ASP.NET Core 7", "MongoDB", "SignalR", "WPF", ".NET MAUI", "RDLC Reports"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  lpr: {
    type: "Video Analytics / Milestone Plugin",
    title: "License Plate Recognition (LPR) — Milestone XProtect Plugin",
    meta: "Security / Vehicle Recognition | MTI Holding | .NET Backend Developer",
    overview:
      "A Milestone XProtect Smart Client plugin that adds license plate and car make recognition workflows directly inside the VMS.",
    role:
      "I built the plugin, its MongoDB backend, real-time updates, and the analytics and reporting features.",
    responsibilities: [
      "Built the Smart Client plugin with the Milestone SDK: workspace, view items, side panel, and settings panel.",
      "Implemented plate and car make records and searches.",
      "Built black list and white list management with alarm history.",
      "Embedded live camera views and video playback for each recognized plate.",
      "Built analytics dashboards with LiveCharts and Excel export with EPPlus.",
      "Pushed live plate events to operators with SignalR."
    ],
    outcome:
      "Let operators recognize, search, and act on vehicles without leaving Milestone XProtect.",
    technologies: ["C#", "WPF", "Milestone Systems SDK", "MongoDB", "SignalR", "LiveCharts", "EPPlus"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  tolling: {
    type: "Business Operations System",
    title: "Ticketing & Tolling System",
    meta: "Tolling / Subscriptions / Operations | MTI Holding | .NET Backend Developer",
    overview:
      "A business operations system for ticketing, tolling, monthly and UHF subscriptions, and cashier shifts, with dynamic reporting and embedded Milestone XProtect video.",
    role:
      "I built application features, database structures, business logic, reporting, and the Milestone video integration.",
    responsibilities: [
      "Built ticketing, tolling, and subscription logic in C# and WinForms, including monthly and UHF tag subscriptions.",
      "Implemented cashier shifts, cash receiving, refunds, and auditing workflows.",
      "Designed SQL Server database structures with Entity Framework.",
      "Built 20+ dynamic RDLC reports, including shift, cashier, refund, subscription, ticket count, and auditor reports.",
      "Embedded Milestone XProtect live video streaming and playback using the Milestone Systems SDK."
    ],
    outcome:
      "Gave operators ticketing, tolling, subscriptions, and cash control in one system, with 20+ reports and live and recorded video in the same application.",
    technologies: ["C#", "WinForms", "SQL Server", "Entity Framework", "RDLC Reports", "Milestone Systems SDK"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  accessControl: {
    type: "Access Control / Milestone Plugin",
    title: "Access Control — Milestone XProtect Plugin",
    meta: "System Integration | MTI Holding | .NET Backend Developer",
    overview:
      "A Milestone XProtect Smart Client workspace plugin that brings access control into the VMS.",
    role:
      "I built the plugin, its data layer, and its real-time updates using the Milestone Systems SDK.",
    responsibilities: [
      "Built the Smart Client workspace, view items, side panel, and settings panel with the Milestone SDK.",
      "Built an access map view and user management inside the plugin.",
      "Delivered real-time updates from SQL Server with SqlTableDependency.",
      "Built the data layer with Entity Framework and SQL Server."
    ],
    outcome:
      "Let security operators manage access control and see live access events in the same place they watch video.",
    technologies: ["C#", "WPF", "Milestone Systems SDK", "Entity Framework", "SQL Server", "SqlTableDependency"],
    confidentiality:
      "This overview excludes internal configurations, customer information, proprietary implementation details, source code, and credentials."
  },
  videoBookmarks: {
    type: "Video Management / Milestone Integration",
    title: "Video Bookmarking & Retrieval",
    meta: "Security Operations | MTI Holding | .NET Backend Developer",
    overview:
      "A desktop module for organizing video bookmarks and retrieving recorded video from Milestone XProtect.",
    role:
      "I built the backend, database, and Milestone video integration.",
    responsibilities: [
      "Built bookmark management for recorded video.",
      "Retrieved recorded video from Milestone XProtect using the Milestone SDK.",
      "Designed the SQL Server database with Entity Framework.",
      "Delivered real-time updates with SqlTableDependency."
    ],
    outcome:
      "Made recorded video faster to find and organize for operators.",
    technologies: ["C#", "WPF", "SQL Server", "Entity Framework", "Milestone Systems SDK", "SqlTableDependency"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  gisMapping: {
    type: "GIS / Mapping",
    title: "GIS Mapping Tool",
    meta: "Mapping | MTI Holding | .NET Backend Developer",
    overview:
      "An interactive map tool for placing and managing devices and device groups.",
    role:
      "I built the map features and the device data layer.",
    responsibilities: [
      "Built device and group placement on interactive maps with GMap.NET.",
      "Built device editing, grouping, and map layer controls.",
      "Stored map and device data with MongoDB and SQL Server."
    ],
    outcome:
      "Let teams place and manage devices visually on a map.",
    technologies: ["C#", "WPF", "WinForms", "GMap.NET", "MongoDB", "SQL Server"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private data, credentials, production screenshots, or internal business details."
  },
  companyArchive: {
    type: "Internal Business System",
    title: "Company Management & Archive System",
    meta: "Business Operations | MTI Holding | .NET Backend Developer",
    overview:
      "An internal system for managing companies, agencies, contracts, products, and policies, with ratings and maintenance tracking.",
    role:
      "I built the backend library, database, and application logic.",
    responsibilities: [
      "Built company, agency, contract, product, and policy management.",
      "Built rating workflows for companies, employees, and projects.",
      "Added maintenance tracking with notifications.",
      "Designed the SQL Server database with Entity Framework in a separate backend library.",
      "Added Excel export for business users."
    ],
    outcome:
      "Replaced scattered records with one searchable system for companies, contracts, and ratings.",
    technologies: ["C#", "WPF", "SQL Server", "Entity Framework", "Excel Export"],
    confidentiality:
      "This case study describes my technical role and responsibilities without exposing source code, private documents, credentials, production screenshots, or internal business details."
  },
  parking: {
    type: "Operations / Parking Management System",
    title: "Parking Management System",
    meta: "Parking Operations / Access Control | MTI Holding | .NET Backend Developer",
    overview:
      "A parking management system for vehicle access, permits and subscriptions, operational tracking, and reporting.",
    role:
      "I built application features, database structures, business logic, and reporting for daily parking operations.",
    responsibilities: [
      "Built vehicle access and parking workflows in C# and WinForms.",
      "Designed SQL Server database structures with Entity Framework for parking records.",
      "Implemented permit and subscription business logic.",
      "Built operational reports with RDLC."
    ],
    outcome:
      "Gave parking operators organized vehicle records, permit management, and reporting in one system.",
    technologies: ["C#", "WinForms", "SQL Server", "Entity Framework", "RDLC Reports"],
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
