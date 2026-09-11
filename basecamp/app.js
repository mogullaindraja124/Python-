// SA // BASECAMP - PLATFORM LOGIC & ROUTING ENGINE

// State Management
let systemState = {
  activeView: "home",
  activeCategory: "Tech (Coding)",
  activeWalkthroughNode: null,
  isAuthenticated: false
};

// Featured roles for Home page
const FEATURED_ROLES = [
  { code: "P1", name: "Full-Stack Developer", desc: "Comprehensive architecture and professional skills for Full-Stack Developer experts..." },
  { code: "P2", name: "Data Scientist", desc: "Advanced statistics, machine learning, and business intelligence pipelines..." },
  { code: "P3", name: "Cloud Engineer", desc: "Design, deploy, and scale multi-cloud infrastructures with high availability..." },
  { code: "P4", name: "DevOps Engineer", desc: "Bridge development and operations through automation and infrastructure pipelines..." }
];

// Helper: Get Resource Link for Topic
function getTopicResourceLink(topic, category = "general") {
  const t = topic.toLowerCase().trim();
  
  const mappings = {
    // Aptitude & Core Concepts
    "logical reasoning": "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
    "algorithmic thinking": "https://www.geeksforgeeks.org/introduction-to-algorithms/",
    "problem solving": "https://www.mindtools.com/pages/article/newTMC_00.htm",
    "attention to detail": "https://www.indeed.com/career-advice/career-development/how-to-improve-attention-to-detail",
    "systems design": "https://www.geeksforgeeks.org/system-design-tutorial/",
    "debugging skills": "https://en.wikipedia.org/wiki/Debugging",
    "network architecture": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-network-architecture.html",
    "security auditing": "https://www.cloudflare.com/learning/security/what-is-a-security-audit/",
    "automation mindset": "https://www.redhat.com/en/topics/automation/what-is-it-automation",
    "numerical aptitude": "https://www.indiabix.com/arithmetic-ability/questions-and-answers/",
    "analytical reasoning": "https://www.indiabix.com/analytical-reasoning/questions-and-answers/",
    "systems thinking": "https://en.wikipedia.org/wiki/Systems_thinking",

    // Tech Topics
    "html5, css3, & modern semantic web layouts": "https://www.w3schools.com/html/",
    "modern javascript es6+ & document object model (dom) control": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "advanced css layouts (grid, flexbox, custom media queries)": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "react.js foundations: state, hooks, & component lifecycle": "https://react.dev/",
    "state management patterns (redux toolkit, context api)": "https://redux-toolkit.js.org/",
    "backend web architectures: node.js & express.js setup": "https://nodejs.org/en/docs",
    "relational database integration using postgresql & sql": "https://www.postgresql.org/docs/",
    "nosql database management using mongodb & mongoose": "https://docs.mongodb.com/",
    "restful api development & authentication via jwt": "https://jwt.io/introduction",
    "frontend-backend system integration & axios operations": "https://axios-http.com/docs/intro",
    "continuous integration & deployment on vercel/render/heroku": "https://vercel.com/docs",
    "web security best practices: cors, csrf, & content security policy": "https://cheatsheetseries.owasp.org/",

    "introduction to artificial intelligence & neural networks": "https://en.wikipedia.org/wiki/Artificial_intelligence",
    "advanced python programming, numpy, & pandas foundations": "https://pandas.pydata.org/docs/",
    "supervised machine learning: regression & decision trees": "https://scikit-learn.org/stable/supervised_learning.html",
    "unsupervised machine learning: clustering & dimensionality reduction": "https://scikit-learn.org/stable/unsupervised_learning.html",
    "deep learning foundations: multi-layer perceptrons & backpropagation": "https://www.deeplearningbook.org/",
    "convolutional neural networks (cnns) for computer vision": "https://cs231n.github.io/",
    "recurrent neural networks (rnns) & transformers for nlp": "https://huggingface.co/docs/transformers/index",
    "model optimization, pruning, & hyperparameter tuning": "https://keras.io/api/keras_tuner/",
    "mlops foundations: git, dvc, & mlflow integration": "https://mlflow.org/docs/latest/index.html",
    "deploying models as APIs using fastapi & docker": "https://fastapi.tiangolo.com/",
    "cloud deployment on aws (sagemaker) & google cloud platform": "https://aws.amazon.com/sagemaker/",
    "model monitoring, drift detection, & continuous retraining": "https://www.evidentlyai.com/",

    "process design & simulation basics (aspen plus / hysys)": "https://en.wikipedia.org/wiki/Chemical_process_modeling",
    "thermodynamics, mass transfer, & heat transfer operations": "https://en.wikipedia.org/wiki/Thermodynamics",
    "chemical safety, hazop study, & risk matrix calculations": "https://en.wikipedia.org/wiki/Hazard_and_operability_study",
    "plant operations knowledge, piping, & instrumentation diagrams (p&ids)": "https://en.wikipedia.org/wiki/Piping_and_instrumentation_diagram",
    
    // Languages general
    "python": "https://docs.python.org/3/",
    "javascript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "java": "https://docs.oracle.com/en/java/",
    "c++": "https://en.cppreference.com/w/",
    "go": "https://go.dev/doc/",
    "rust": "https://www.rust-lang.org/learn",
    "sql": "https://www.w3schools.com/sql/",
    "bash": "https://www.gnu.org/software/bash/manual/"
  };

  if (mappings[t]) return mappings[t];

  // Specific companies mapping
  if (category === "company") {
    const commonCompanies = {
      "google": "https://www.google.com/about/careers",
      "microsoft": "https://careers.microsoft.com",
      "amazon": "https://www.amazon.jobs",
      "adobe": "https://www.adobe.com/careers",
      "nvidia": "https://www.nvidia.com/en-us/about-nvidia/careers/",
      "meta": "https://www.metacareers.com",
      "tcs": "https://www.tcs.com/careers",
      "zomato": "https://www.zomato.com/careers",
      "razorpay": "https://razorpay.com/jobs/",
      "reliance": "https://www.ril.com/Careers.aspx",
      "ongc": "https://www.ongcindia.com/wps/wcm/connect/en/career/",
      "gail": "https://gailonline.com/CR-Currentopenings.html",
      "dr. reddy's": "https://careers.drreddys.com/"
    };
    const cleanComp = t.replace(/['"\s]/g, "");
    for (let key in commonCompanies) {
      if (cleanComp.includes(key)) return commonCompanies[key];
    }
    return `https://www.google.com/search?q=${encodeURIComponent(topic + " careers website")}&btnI=1`;
  }

  // General fallbacks
  if (t.length < 30) {
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(topic)}`;
  }
  return `https://www.google.com/search?q=${encodeURIComponent(topic + " tutorial documentation")}&btnI=1`;
}

// Router Initializer
function initRouter() {
  const handleRouting = () => {
    const hash = window.location.hash || "#";
    const navItems = document.querySelectorAll(".navbar .nav-item");
    navItems.forEach(item => item.classList.remove("active"));
    
    // Hide all views first
    const views = document.querySelectorAll(".page-view");
    views.forEach(view => view.classList.remove("active"));

    // Check Auth status for Admin View
    const savedAuth = sessionStorage.getItem("cgp_auth");
    if (savedAuth === "true") {
      systemState.isAuthenticated = true;
    }

    if (hash === "#" || hash === "#/" || hash === "") {
      systemState.activeView = "home";
      document.getElementById("home-view").classList.add("active");
      document.getElementById("nav-home").classList.add("active");
      animateHomeStats();
      renderFeaturedCourses();
    } else if (hash === "#/roadmaps") {
      systemState.activeView = "roadmaps";
      document.getElementById("roadmaps-view").classList.add("active");
      document.getElementById("nav-roadmaps").classList.add("active");
      setupArchitectPanel();
    } else if (hash === "#/languages") {
      systemState.activeView = "languages";
      document.getElementById("languages-view").classList.add("active");
      document.getElementById("nav-languages").classList.add("active");
      renderLanguageLibrary();
    } else if (hash === "#/login") {
      if (systemState.isAuthenticated) {
        window.location.hash = "#/admin";
      } else {
        systemState.activeView = "login";
        document.getElementById("login-view").classList.add("active");
        document.getElementById("nav-login").classList.add("active");
      }
    } else if (hash === "#/admin") {
      if (!systemState.isAuthenticated) {
        window.location.hash = "#/login";
      } else {
        systemState.activeView = "admin";
        document.getElementById("admin-dashboard-view").classList.add("active");
        document.getElementById("nav-login").classList.add("active");
        renderAdminDashboard();
      }
    } else if (hash.startsWith("#/role/")) {
      systemState.activeView = "role-detail";
      const roleName = decodeURIComponent(hash.substring(7));
      document.getElementById("role-detail-view").classList.add("active");
      renderRoleDetailPage(roleName);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("hashchange", handleRouting);
  window.addEventListener("load", handleRouting);
}

// Stats Counter Animation
function animateHomeStats() {
  const animateCounter = (id, target, suffix = "+") => {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.floor(progress * target);
      el.textContent = val.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };

  animateCounter("stat-roadmaps", 294);
  animateCounter("stat-experts", 1200);
  animateCounter("stat-students", 850);
}

// Words Cycler for "Empowering Dream"
function initWordCycler() {
  const words = ["Dream", "Future", "Career", "Success", "Skills", "Mastery", "Growth", "Vision"];
  let index = 0;
  const cyclerEl = document.getElementById("word-cycler");
  if (!cyclerEl) return;

  setInterval(() => {
    cyclerEl.style.opacity = 0;
    cyclerEl.style.transform = "translateY(-5px)";
    setTimeout(() => {
      index = (index + 1) % words.length;
      cyclerEl.textContent = words[index];
      cyclerEl.style.opacity = 1;
      cyclerEl.style.transform = "translateY(0)";
    }, 200);
  }, 2500);
}

// Render Premium Course Cards
function renderFeaturedCourses() {
  const grid = document.getElementById("featured-courses-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  FEATURED_ROLES.forEach(role => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <div>
        <div class="course-badge">${role.code}</div>
        <h3>${role.name} Mastery</h3>
        <p>${role.desc}</p>
      </div>
      <a href="#/role/${encodeURIComponent(role.name)}" class="course-action">
        Explore Mastery <i class="fa-solid fa-arrow-right"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

// Setup Career Path Architect Page
function setupArchitectPanel() {
  const trackContainer = document.getElementById("track-filter-container");
  if (!trackContainer) return;

  const data = getSystemData();
  
  // Render categories pills
  trackContainer.innerHTML = "";
  data.tracks.forEach((track, index) => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + (track === systemState.activeCategory ? " active" : "");
    btn.textContent = track;
    btn.onclick = () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      systemState.activeCategory = track;
      updateRoleDropdown();
    };
    trackContainer.appendChild(btn);
  });

  updateRoleDropdown();
}

// Update Target Role Dropdown depending on category
function updateRoleDropdown() {
  const selector = document.getElementById("select-target-role");
  if (!selector) return;

  const data = getSystemData();
  const roles = data.roles[systemState.activeCategory] || [];
  
  selector.innerHTML = "";
  if (roles.length === 0) {
    selector.innerHTML = "<option value=''>-- No Roles Available --</option>";
    return;
  }

  roles.forEach(role => {
    const opt = document.createElement("option");
    opt.value = role;
    opt.textContent = role;
    selector.appendChild(opt);
  });
}

// Construct Strategy Button Handler
function initConstructStrategy() {
  const btn = document.getElementById("btn-construct-strategy");
  if (!btn) return;

  btn.onclick = () => {
    const targetRole = document.getElementById("select-target-role").value;
    if (!targetRole) {
      alert("Please select a target role first!");
      return;
    }

    const duration = document.getElementById("select-duration").value;
    const academicYear = document.getElementById("select-academic-year").value;
    const overlay = document.getElementById("loading-overlay");

    // Display spinner
    overlay.classList.add("active");

    setTimeout(() => {
      overlay.classList.remove("active");
      generateRoadmapTree(targetRole, duration, academicYear);
      
      // Scroll to tree output smoothly
      const outputPanel = document.getElementById("roadmap-output-panel");
      outputPanel.classList.add("active");
      outputPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500);
  };

  // Refresh data click handler
  const btnRefresh = document.getElementById("btn-refresh-data");
  if (btnRefresh) {
    btnRefresh.onclick = () => {
      setupArchitectPanel();
      document.getElementById("roadmap-output-panel").classList.remove("active");
      document.getElementById("walkthrough-panel").classList.remove("active");
    };
  }
}

// Generate the Org-Chart Tree Layout dynamically (Page 3)
function generateRoadmapTree(roleName, duration, academicYear) {
  const data = getSystemData();
  const details = data.details[roleName] || getFallbackRoleDetails(roleName);
  
  const container = document.getElementById("tree-phases-container");
  const titleHeader = document.getElementById("tree-header-title");
  if (!container || !titleHeader) return;

  titleHeader.innerHTML = `Precision Roadmap // ${roleName} // ${academicYear}`;
  container.innerHTML = "";

  // Parse weeks count depending on duration selection
  let totalWeeks = 12; // 3 months default
  if (duration.includes("1 Month")) totalWeeks = 4;
  else if (duration.includes("6 Months")) totalWeeks = 24;
  else if (duration.includes("12 Months")) totalWeeks = 48;

  // Split into phases:
  // Phase 1: Foundation & Tech (approx 75% of weeks)
  // Phase 2: Soft Skills & Mastery (approx 25% of weeks)
  const technicalWeeksCount = Math.ceil(totalWeeks * 0.75);
  const softWeeksCount = totalWeeks - technicalWeeksCount;

  // Distribute tech topics & soft topics into week lists
  const techTopics = details.techTopics || [];
  const softTopics = details.softTopics || [];

  // Generate Phase 1 blocks
  const phase1Block = createPhaseBlock("FOUNDATION & TECH", 1, technicalWeeksCount, techTopics);
  container.appendChild(phase1Block);

  // Generate Phase 2 blocks
  const phase2Block = createPhaseBlock("SOFT SKILLS & MASTERY", technicalWeeksCount + 1, totalWeeks, softTopics);
  container.appendChild(phase2Block);

  // Auto-trigger walkthrough for the first item
  const firstPill = container.querySelector(".topic-pill");
  if (firstPill) {
    firstPill.click();
  }
}

// Create a phase layout row
function createPhaseBlock(title, startWeek, endWeek, topicsArray) {
  const block = document.createElement("div");
  block.className = "phase-block";

  const pTitle = document.createElement("div");
  pTitle.className = "phase-title";
  pTitle.textContent = title;
  block.appendChild(pTitle);

  const row = document.createElement("div");
  row.className = "weeks-row";

  let topicIndex = 0;
  
  // Renders 4 columns in the row, or handles multiple chunks dynamically if more than 4 weeks
  // Let's create columns. In a month duration we have 4 columns.
  // In 3 months, we have weeks split. To prevent horizontal clutter, we layout week cards in a grid
  const weeksToRender = endWeek - startWeek + 1;
  
  // We distribute the items
  for (let w = startWeek; w <= endWeek; w++) {
    const col = document.createElement("div");
    col.className = "week-card";
    
    // Label week
    const weekLabel = document.createElement("span");
    weekLabel.className = "week-num";
    // Check if it's a consolidation week (e.g. last week of phase, or divisible by 4)
    const isConsolidationWeek = (w === endWeek);
    weekLabel.textContent = isConsolidationWeek ? `WEEK ${w}-${w}` : `WEEK ${w}`;
    col.appendChild(weekLabel);

    // Pick 1-2 topics
    const topicsForThisWeek = [];
    if (isConsolidationWeek) {
      topicsForThisWeek.push("<i>Consolidation & Review</i>");
    } else {
      // Pick next technical or soft topic
      const t1 = topicsArray[topicIndex % topicsArray.length];
      topicsForThisWeek.push(t1);
      topicIndex++;

      // 50% chance of adding a second topic if available and not a 4-week short sprint
      if (topicsArray.length > weeksToRender && Math.random() > 0.5) {
        const t2 = topicsArray[topicIndex % topicsArray.length];
        if (t2 !== t1) {
          topicsForThisWeek.push(t2);
          topicIndex++;
        }
      }
    }

    // Render topic pills
    topicsForThisWeek.forEach(topic => {
      const pill = document.createElement("div");
      pill.className = "topic-pill";
      pill.innerHTML = topic;
      
      // Store raw text for mapping references
      const rawText = pill.innerText || pill.textContent;
      
      pill.onclick = () => {
        // Toggle active style
        document.querySelectorAll(".topic-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        showWalkthroughDetails(rawText);
      };
      
      col.appendChild(pill);
    });

    row.appendChild(col);
  }

  block.appendChild(row);
  return block;
}

// Show Walkthrough panel details
function showWalkthroughDetails(topicText) {
  const panel = document.getElementById("walkthrough-panel");
  const title = document.getElementById("walkthrough-title");
  const desc = document.getElementById("walkthrough-desc");
  const resourceList = document.getElementById("walkthrough-resource-list");
  
  if (!panel || !title || !desc || !resourceList) return;

  panel.classList.add("active");
  title.textContent = `Walkthrough Milestone // ${topicText}`;
  desc.textContent = `Learn operational skills for "${topicText}". Follow the syllabus steps below to translate this theory into functional competence.`;

  // Generate resource links
  resourceList.innerHTML = "";
  const types = ["video", "article", "documentation"];
  const titles = [
    `Mastering ${topicText} Fundamentals`,
    `${topicText} Advanced Integration Walkthrough`,
    `Official ${topicText} Reference Manual`
  ];

  types.forEach((type, index) => {
    const item = document.createElement("div");
    item.className = "resource-item";
    
    // Choose appropriate icon
    let icon = "fa-video";
    if (type === "article") icon = "fa-file-lines";
    else if (type === "documentation") icon = "fa-book-open";

    const linkUrl = getTopicResourceLink(topicText, type);

    item.innerHTML = `
      <span class="resource-type-tag tag-${type}">${type}</span>
      <a href="${linkUrl}" target="_blank">
        <i class="fa-solid ${icon}"></i> ${titles[index]}
      </a>
      <i class="fa-solid fa-arrow-up-right-from-glass" style="font-size:0.8rem; color:var(--text-muted);"></i>
    `;
    resourceList.appendChild(item);
  });
}

// Render Role Detail View (Page 4)
function renderRoleDetailPage(roleName) {
  const data = getSystemData();
  const details = data.details[roleName] || getFallbackRoleDetails(roleName);
  
  document.getElementById("role-detail-name").textContent = roleName;
  
  // Set subheading
  document.getElementById("role-detail-track").textContent = `1st Year Track // 3 Months Sprint // Market Certified`;

  // Populate Aptitude Focus
  const aptContainer = document.getElementById("detail-aptitude-list");
  aptContainer.innerHTML = "";
  (details.aptitude || []).forEach(apt => {
    const pill = document.createElement("span");
    pill.className = "skill-pill";
    pill.textContent = apt;
    pill.onclick = () => window.open(getTopicResourceLink(apt));
    aptContainer.appendChild(pill);
  });

  // Populate Soft Skills
  const softContainer = document.getElementById("detail-soft-list");
  softContainer.innerHTML = "";
  (details.softSkills || []).forEach(soft => {
    const pill = document.createElement("span");
    pill.className = "skill-pill";
    pill.textContent = soft;
    pill.onclick = () => window.open(getTopicResourceLink(soft));
    softContainer.appendChild(pill);
  });

  // Populate Salaries
  document.getElementById("detail-salary-avg").textContent = details.salary.avg;
  document.getElementById("detail-salary-range").textContent = details.salary.range;
  document.getElementById("detail-salary-top").textContent = details.salary.top;

  // Populate Target Companies
  const compContainer = document.getElementById("detail-companies-list");
  compContainer.innerHTML = "";
  (details.companies || []).forEach(comp => {
    const pill = document.createElement("span");
    pill.className = "company-pill";
    pill.textContent = comp;
    pill.onclick = () => window.open(getTopicResourceLink(comp, "company"));
    compContainer.appendChild(pill);
  });
}

// Render Language Library Grid (Page 5)
function renderLanguageLibrary() {
  const grid = document.getElementById("languages-grid-container");
  const searchInput = document.getElementById("language-search-input");
  if (!grid) return;

  const data = getSystemData();
  const filterText = searchInput ? searchInput.value.toLowerCase() : "";

  grid.innerHTML = "";
  
  const filteredLangs = data.languages.filter(lang => 
    lang.name.toLowerCase().includes(filterText) ||
    lang.desc.toLowerCase().includes(filterText)
  );

  if (filteredLangs.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; background: white; border-radius: 20px; border: 1px dashed var(--border-light);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4>No Languages Found</h4>
        <p style="color: var(--text-muted);">Try a different query (e.g. Python, JS, C++)</p>
      </div>
    `;
    return;
  }

  filteredLangs.forEach(lang => {
    const card = document.createElement("div");
    card.className = "lang-card";
    card.onclick = () => openLanguageTimelineDrawer(lang);
    card.innerHTML = `
      <div class="lang-icon"><i class="${lang.icon}"></i></div>
      <h3>${lang.name}</h3>
      <p>${lang.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// Language Library Live Search
function initLanguageSearch() {
  const searchInput = document.getElementById("language-search-input");
  if (searchInput) {
    searchInput.onkeyup = () => {
      renderLanguageLibrary();
    };
  }
}

// Open sliding drawer timeline (Page 5 Zoom)
function openLanguageTimelineDrawer(lang) {
  const drawer = document.getElementById("language-drawer-modal");
  const nameEl = document.getElementById("drawer-lang-name");
  const descEl = document.getElementById("drawer-lang-desc");
  const timelineEl = document.getElementById("drawer-timeline-steps");

  if (!drawer || !nameEl || !descEl || !timelineEl) return;

  nameEl.textContent = `${lang.name} Integration`;
  descEl.textContent = lang.desc;
  
  // Parse step strings
  timelineEl.innerHTML = "";
  const phases = lang.steps.split("\n\n");
  
  phases.forEach((p, idx) => {
    const lines = p.trim().split("\n");
    const title = lines[0] || `Week ${idx + 1}`;
    const content = lines.slice(1).join("\n");

    const step = document.createElement("div");
    step.className = "timeline-step";
    step.innerHTML = `
      <h4>${title}</h4>
      <p>${content}</p>
    `;
    timelineEl.appendChild(step);
  });

  drawer.classList.add("active");
  document.body.style.overflow = "hidden"; // disable scroll
}

// Close sliding drawer timeline
function initDrawerClosing() {
  const closeBtn = document.getElementById("btn-drawer-close");
  const overlay = document.getElementById("drawer-overlay-close");
  const drawer = document.getElementById("language-drawer-modal");

  const close = () => {
    if (drawer) drawer.classList.remove("active");
    document.body.style.overflow = ""; // enable scroll
  };

  if (closeBtn) closeBtn.onclick = close;
  if (overlay) overlay.onclick = close;
}

// Switch views on sticky header navbar
function initScrollSpy() {
  window.onscroll = () => {
    const nav = document.getElementById("main-navbar");
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
}

/* ==========================================
   ADMIN LOGIN & DASHBOARD IMPLEMENTATION
   ========================================== */

function initAdminAuth() {
  const loginBtn = document.getElementById("btn-admin-login");
  const logoutBtn = document.getElementById("btn-admin-logout");
  const errorMsg = document.getElementById("login-error-message");

  if (loginBtn) {
    loginBtn.onclick = () => {
      const u = document.getElementById("admin-username").value.trim();
      const p = document.getElementById("admin-password").value.trim();

      // Check Credentials
      if ((u === "admin@basecamp.com" || u === "admin") && p === "admin123") {
        systemState.isAuthenticated = true;
        sessionStorage.setItem("cgp_auth", "true");
        if (errorMsg) errorMsg.style.display = "none";
        
        // Redirect to admin panel
        window.location.hash = "#/admin";
      } else {
        if (errorMsg) errorMsg.style.display = "block";
      }
    };
  }

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      systemState.isAuthenticated = false;
      sessionStorage.removeItem("cgp_auth");
      window.location.hash = "#/";
    };
  }
}

// Switch between admin categories
function switchAdminSection(section) {
  document.querySelectorAll(".admin-menu-item").forEach(item => item.classList.remove("active"));
  document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));

  if (section === "roles") {
    document.getElementById("menu-roles").classList.add("active");
    document.getElementById("admin-roles-section").classList.add("active");
  } else if (section === "languages") {
    document.getElementById("menu-languages").classList.add("active");
    document.getElementById("admin-languages-section").classList.add("active");
  }
}

// Render administrative dashboards
function renderAdminDashboard() {
  const rolesBody = document.getElementById("admin-roles-table-body");
  const languagesBody = document.getElementById("admin-languages-table-body");
  const data = getSystemData();

  // 1. Roles list CRUD table
  if (rolesBody) {
    rolesBody.innerHTML = "";
    data.tracks.forEach(track => {
      const roles = data.roles[track] || [];
      roles.forEach(roleName => {
        const details = data.details[roleName] || getFallbackRoleDetails(roleName);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${track}</strong></td>
          <td>${roleName}</td>
          <td>${details.salary.avg}</td>
          <td>
            <button class="btn-action btn-edit" onclick="openEditRoleDialog('${roleName}', '${track}')"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            <button class="btn-action btn-delete" onclick="deleteRoleRecord('${roleName}', '${track}')"><i class="fa-solid fa-trash-can"></i> Delete</button>
          </td>
        `;
        rolesBody.appendChild(tr);
      });
    });
  }

  // 2. Languages list CRUD table
  if (languagesBody) {
    languagesBody.innerHTML = "";
    data.languages.forEach((lang, index) => {
      const weeksCount = lang.steps.split("\n\n").length;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${lang.name}</strong></td>
        <td>${lang.desc.substring(0, 50)}...</td>
        <td>${weeksCount} Weeks</td>
        <td>
          <button class="btn-action btn-edit" onclick="openEditLangDialog(${index})"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
          <button class="btn-action btn-delete" onclick="deleteLangRecord(${index})"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </td>
      `;
      languagesBody.appendChild(tr);
    });
  }
}

// Open Editor Dialog for Roles (Create / Edit)
window.openEditRoleDialog = function(roleName, trackCategory) {
  const modal = document.getElementById("admin-edit-modal");
  const title = document.getElementById("admin-modal-title");
  
  // Toggle form panels
  document.getElementById("admin-role-form-fields").style.display = "block";
  document.getElementById("admin-lang-form-fields").style.display = "none";

  // Load Categories into dropdown selection
  const selectCat = document.getElementById("form-role-category");
  const data = getSystemData();
  selectCat.innerHTML = "";
  data.tracks.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    selectCat.appendChild(opt);
  });

  if (roleName) {
    // Edit existing
    title.textContent = `Edit Target Role Data // ${roleName}`;
    document.getElementById("edit-original-name").value = roleName;
    document.getElementById("edit-original-category").value = trackCategory;

    const details = data.details[roleName] || getFallbackRoleDetails(roleName);
    selectCat.value = trackCategory;
    document.getElementById("form-role-name").value = roleName;
    document.getElementById("form-role-salary-avg").value = details.salary.avg;
    document.getElementById("form-role-salary-range").value = details.salary.range;
    document.getElementById("form-role-salary-top").value = details.salary.top;
    document.getElementById("form-role-aptitude").value = details.aptitude.join(", ");
    document.getElementById("form-role-soft").value = details.softSkills.join(", ");
    document.getElementById("form-role-companies").value = details.companies.join(", ");
    document.getElementById("form-role-techtopics").value = details.techTopics.join("\n");
    document.getElementById("form-role-softtopics").value = details.softTopics.join("\n");
  } else {
    // Create new
    title.textContent = "Add New Target Role to Database";
    document.getElementById("edit-original-name").value = "";
    document.getElementById("edit-original-category").value = "";
    
    document.getElementById("form-role-name").value = "";
    document.getElementById("form-role-salary-avg").value = "₹6.0 LPA";
    document.getElementById("form-role-salary-range").value = "₹3.5 - ₹10 LPA";
    document.getElementById("form-role-salary-top").value = "₹15 LPA";
    document.getElementById("form-role-aptitude").value = "Logical Reasoning, Problem Solving";
    document.getElementById("form-role-soft").value = "Professional Communication, Teamwork";
    document.getElementById("form-role-companies").value = "Google, Microsoft, Amazon";
    document.getElementById("form-role-techtopics").value = "Technical Topic 1\nTechnical Topic 2\nTechnical Topic 3";
    document.getElementById("form-role-softtopics").value = "Soft Skill Topic 1\nSoft Skill Topic 2";
  }

  modal.classList.add("active");
};

// Open Editor Dialog for Languages (Create / Edit)
window.openEditLangDialog = function(index) {
  const modal = document.getElementById("admin-edit-modal");
  const title = document.getElementById("admin-modal-title");
  
  // Toggle form panels
  document.getElementById("admin-role-form-fields").style.display = "none";
  document.getElementById("admin-lang-form-fields").style.display = "block";

  title.textContent = index !== null ? `Edit Language timeline // Syllabus` : "Add Language Timeline";
  document.getElementById("edit-original-name").value = index !== null ? index : "NEW_LANG";
  
  if (index !== null) {
    const data = getSystemData();
    const lang = data.languages[index];
    document.getElementById("form-lang-name").value = lang.name;
    document.getElementById("form-lang-desc").value = lang.desc;
    document.getElementById("form-lang-steps").value = lang.steps;
  } else {
    document.getElementById("form-lang-name").value = "";
    document.getElementById("form-lang-desc").value = "";
    document.getElementById("form-lang-steps").value = "Week 1: Core Fundamentals\nStudy standard syntax patterns.\n\nWeek 2: Advanced structures\nStudy advanced OOP.";
  }

  modal.classList.add("active");
};

// Save Dialog modifications
function initAdminFormSave() {
  const cancelBtn = document.getElementById("btn-edit-cancel");
  const saveBtn = document.getElementById("btn-edit-save");
  const modal = document.getElementById("admin-edit-modal");

  if (cancelBtn) {
    cancelBtn.onclick = () => modal.classList.remove("active");
  }

  if (saveBtn) {
    saveBtn.onclick = () => {
      const isRole = document.getElementById("admin-role-form-fields").style.display === "block";
      const data = getSystemData();
      const origName = document.getElementById("edit-original-name").value;

      if (isRole) {
        // Collect Role Inputs
        const category = document.getElementById("form-role-category").value;
        const name = document.getElementById("form-role-name").value.trim();
        const avgSal = document.getElementById("form-role-salary-avg").value.trim();
        const rangeSal = document.getElementById("form-role-salary-range").value.trim();
        const topSal = document.getElementById("form-role-salary-top").value.trim();
        const aptTags = document.getElementById("form-role-aptitude").value.split(",").map(s => s.trim()).filter(s => s);
        const softTags = document.getElementById("form-role-soft").value.split(",").map(s => s.trim()).filter(s => s);
        const companies = document.getElementById("form-role-companies").value.split(",").map(s => s.trim()).filter(s => s);
        const techTopics = document.getElementById("form-role-techtopics").value.split("\n").map(s => s.trim()).filter(s => s);
        const softTopics = document.getElementById("form-role-softtopics").value.split("\n").map(s => s.trim()).filter(s => s);

        if (!name) {
          alert("Please specify a target role name.");
          return;
        }

        // Delete original if editing name/category change
        if (origName) {
          const origCategory = document.getElementById("edit-original-category").value;
          data.roles[origCategory] = data.roles[origCategory].filter(r => r !== origName);
          delete data.details[origName];
        }

        // Add to list if not already present
        if (!data.roles[category].includes(name)) {
          data.roles[category].push(name);
        }

        // Save details
        data.details[name] = {
          aptitude: aptTags,
          softSkills: softTags,
          salary: { avg: avgSal, range: rangeSal, top: topSal },
          companies: companies,
          techTopics: techTopics,
          softTopics: softTopics
        };

      } else {
        // Collect Language Inputs
        const name = document.getElementById("form-lang-name").value.trim();
        const desc = document.getElementById("form-lang-desc").value.trim();
        const steps = document.getElementById("form-lang-steps").value.trim();

        if (!name || !desc || !steps) {
          alert("All language fields are required.");
          return;
        }

        const langData = {
          name: name,
          desc: desc,
          icon: getLanguageDeviconClass(name),
          steps: steps
        };

        if (origName === "NEW_LANG") {
          data.languages.push(langData);
        } else {
          const idx = parseInt(origName);
          data.languages[idx] = langData;
        }
      }

      saveSystemData(data);
      modal.classList.remove("active");
      renderAdminDashboard();
    };
  }
}

// Get standard Devicon code mapping depending on language name input
function getLanguageDeviconClass(name) {
  const n = name.toLowerCase().trim();
  const mapping = {
    "javascript": "devicon-javascript-plain colored",
    "js": "devicon-javascript-plain colored",
    "typescript": "devicon-typescript-plain colored",
    "ts": "devicon-typescript-plain colored",
    "python": "devicon-python-plain colored",
    "java": "devicon-java-plain colored",
    "c++": "devicon-cplusplus-plain colored",
    "cpp": "devicon-cplusplus-plain colored",
    "go": "devicon-go-original-wordmark colored",
    "golang": "devicon-go-original-wordmark colored",
    "rust": "devicon-rust-plain colored",
    "sql": "devicon-mysql-plain colored",
    "html": "devicon-html5-plain colored",
    "css": "devicon-css3-plain colored",
    "php": "devicon-php-plain colored",
    "ruby": "devicon-ruby-plain colored"
  };
  return mapping[n] || "devicon-code-plain colored";
}

// Delete Role Record Action
window.deleteRoleRecord = function(roleName, category) {
  if (confirm(`Are you sure you want to delete the target role "${roleName}"?`)) {
    const data = getSystemData();
    data.roles[category] = data.roles[category].filter(r => r !== roleName);
    delete data.details[roleName];
    saveSystemData(data);
    renderAdminDashboard();
  }
};

// Delete Language Record Action
window.deleteLangRecord = function(index) {
  const data = getSystemData();
  const langName = data.languages[index].name;
  if (confirm(`Are you sure you want to delete language roadmap "${langName}"?`)) {
    data.languages.splice(index, 1);
    saveSystemData(data);
    renderAdminDashboard();
  }
};

// Global handlers to link Add Role & Add Language
function initAdminAddButtons() {
  const addRoleBtn = document.getElementById("btn-add-role");
  const addLangBtn = document.getElementById("btn-add-lang");

  if (addRoleBtn) {
    addRoleBtn.onclick = () => openEditRoleDialog(null, null);
  }
  if (addLangBtn) {
    addLangBtn.onclick = () => openEditLangDialog(null);
  }
}

// Run platform engines
initRouter();
initWordCycler();
initConstructStrategy();
initLanguageSearch();
initDrawerClosing();
initScrollSpy();
initAdminAuth();
initAdminFormSave();
initAdminAddButtons();
