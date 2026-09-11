// Initial Data Store for SA // BASECAMP
const INITIAL_TRACKS = [
  "Tech (Coding)",
  "LD(tech coding)",
  "LD(tech Non coding)",
  "Tech (Non coding)",
  "Non Tech",
  "non tech(outsourcing)",
  "Non Tech (GOVERNANCE)",
  "Governance & Outsourcing"
];

const INITIAL_ROLES = {
  "Tech (Coding)": [
    "AI Software Developer",
    "Full-Stack Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Cybersecurity Engineer"
  ],
  "LD(tech coding)": [
    "Java Systems Engineer",
    "Python API Developer",
    "C++ Game Systems Dev",
    "Go Cloud Microservices Dev",
    "Rust Systems Architect"
  ],
  "LD(tech Non coding)": [
    "SQL Database Admin",
    "Linux System Administrator",
    "Network Administrator",
    "Git & DevOps Tooling Expert"
  ],
  "Tech (Non coding)": [
    "Product Manager",
    "UI/UX Designer",
    "Agile Scrum Master",
    "Data Analyst"
  ],
  "Non Tech": [
    "Chemical Process Engineer",
    "Mechanical Design Engineer",
    "Business Consultant",
    "Civil Project Engineer"
  ],
  "non tech(outsourcing)": [
    "BPO Operations Specialist",
    "Client Relationship Manager",
    "Technical Support Lead"
  ],
  "Non Tech (GOVERNANCE)": [
    "IT Compliance Specialist",
    "Information Security Auditor",
    "Risk Assessment Specialist"
  ],
  "Governance & Outsourcing": [
    "Vendor Relations Director",
    "SLA Compliance Manager",
    "Sourcing Operations Specialist"
  ]
};

const INITIAL_ROLE_DETAILS = {
  "AI Software Developer": {
    aptitude: ["Logical Reasoning", "Algorithmic Thinking", "Problem Solving", "Mathematical Intuition"],
    softSkills: ["Team Collaboration", "Technical Communication", "Agile Mindset"],
    salary: { avg: "₹9.5 LPA", range: "₹5.5 - ₹18 LPA", top: "₹30 LPA" },
    companies: ["Google", "Microsoft", "Amazon", "NVIDIA", "Adobe", "TCS"],
    techTopics: [
      "Introduction to Artificial Intelligence & Neural Networks",
      "Advanced Python Programming, NumPy, & Pandas Foundations",
      "Supervised Machine Learning: Regression & Decision Trees",
      "Unsupervised Machine Learning: Clustering & Dimensionality Reduction",
      "Deep Learning Foundations: Multi-Layer Perceptrons & Backpropagation",
      "Convolutional Neural Networks (CNNs) for Computer Vision",
      "Recurrent Neural Networks (RNNs) & Transformers for NLP",
      "Model Optimization, Pruning, & Hyperparameter Tuning",
      "MLOps Foundations: Git, DVC, & MLflow Integration",
      "Deploying Models as APIs using FastAPI & Docker",
      "Cloud Deployment on AWS (SageMaker) & Google Cloud Platform",
      "Model Monitoring, Drift Detection, & Continuous Retraining"
    ],
    softTopics: [
      "Technical Communication & Explaining AI Models",
      "Agile Project Management for ML Lifecycle",
      "Ethical AI Governance, Privacy, & Bias Mitigation",
      "Resume Optimization & Mock Interview Simulations"
    ]
  },
  "Full-Stack Developer": {
    aptitude: ["Systems Design", "Logical Reasoning", "Attention to Detail", "Debugging Skills"],
    softSkills: ["Client Communication", "Team Collaboration", "Time Management"],
    salary: { avg: "₹8.2 LPA", range: "₹4.0 - ₹16 LPA", top: "₹26 LPA" },
    companies: ["Microsoft", "Meta", "Zomato", "Razorpay", "Accenture", "TCS"],
    techTopics: [
      "HTML5, CSS3, & Modern Semantic Web Layouts",
      "Modern JavaScript ES6+ & Document Object Model (DOM) Control",
      "Advanced CSS Layouts (Grid, Flexbox, Custom Media Queries)",
      "React.js Foundations: State, Hooks, & Component Lifecycle",
      "State Management Patterns (Redux Toolkit, Context API)",
      "Backend Web Architectures: Node.js & Express.js Setup",
      "Relational Database Integration using PostgreSQL & SQL",
      "NoSQL Database Management using MongoDB & Mongoose",
      "RESTful API Development & Authentication via JWT",
      "Frontend-Backend System Integration & Axios Operations",
      "Continuous Integration & Deployment on Vercel/Render/Heroku",
      "Web Security Best Practices: CORS, CSRF, & Content Security Policy"
    ],
    softTopics: [
      "Collaborative Coding via GitHub Pull Requests",
      "Client Requirement Elicitation & Prototyping",
      "Agile Sprint Planning & Kanban Board Operations",
      "Technical Portfolio Building & Interview Prep"
    ]
  },
  "Cloud Engineer": {
    aptitude: ["Network Architecture", "Systems Thinking", "Security Auditing", "Logical Reasoning"],
    softSkills: ["Crisis Management", "Cross-Functional Collaboration", "Active Listening"],
    salary: { avg: "₹8.8 LPA", range: "₹4.8 - ₹17 LPA", top: "₹28 LPA" },
    companies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "IBM", "Infosys"],
    techTopics: [
      "Virtualization, Networking Fundamentals, & Subnetting",
      "AWS/Azure Compute Services (EC2, Virtual Machines)",
      "Cloud Storage Architectures (S3, Blob Storage, Disk volumes)",
      "Identity & Access Management (IAM) Policies & Cloud Security",
      "Cloud Database Systems (RDS, DynamoDB, Cosmos DB)",
      "Serverless Compute Architectures (AWS Lambda, Azure Functions)",
      "Infrastructure as Code (IaC) using Terraform Basics",
      "Virtual Private Cloud (VPC) Peering & Cloud VPNs",
      "Cloud Monitoring, Logging, & Alerting (CloudWatch)",
      "Load Balancing, Auto Scaling, & High Availability Patterns",
      "Cost Optimization, Budgets, & Resource Tagging Best Practices",
      "Multi-cloud architectures & Hybrid Infrastructure Setups"
    ],
    softTopics: [
      "Incident Response & Post-Mortem Documentation",
      "Inter-departmental Cloud Strategy Consultation",
      "Agile Incident Management & Ticket Resolution",
      "Cloud Certificate Strategy & Portfolio Preparation"
    ]
  },
  "DevOps Engineer": {
    aptitude: ["Automation Mindset", "Debugging Capabilities", "Systems Integration", "Attention to Detail"],
    softSkills: ["Empathy", "Collaboration", "Persuasive Communication"],
    salary: { avg: "₹9.0 LPA", range: "₹5.0 - ₹18 LPA", top: "₹29 LPA" },
    companies: ["Atlassian", "Red Hat", "HashiCorp", "TCS", "Wipro", "Cognizant"],
    techTopics: [
      "Linux command line, Shell Scripting, & Process Management",
      "Git Version Control, Branching Models, & Conflict Resolution",
      "Containerization Foundations: Dockerfiles, Images, & Networking",
      "CI/CD Pipeline Architecture: GitHub Actions / Jenkins Setup",
      "Infrastructure Provisioning: Advanced Terraform Templates",
      "Configuration Management using Ansible Playbooks",
      "Container Orchestration: Kubernetes Cluster Architecture",
      "Kubernetes Deployment Manifests, Services, & Ingress Control",
      "Monitoring & Metrics using Prometheus & Grafana Panels",
      "Centralized Log Analytics using ELK / EFK Stack",
      "Continuous Security (DevSecOps) & Vulnerability Scanning",
      "Zero-Downtime Deployments: Blue-Green & Canary Patterns"
    ],
    softTopics: [
      "DevOps Culture, Blameless Post-Mortems, & Shared Ownership",
      "Communication protocols for Site Reliability incidents",
      "Agile Sprint cycles & Automation Backlog Grooming",
      "DevOps Interview Preparation & Portfolio Showcases"
    ]
  },
  "Chemical Process Engineer": {
    aptitude: ["Numerical Aptitude", "Analytical Reasoning", "Systems Thinking", "Attention to Detail"],
    softSkills: ["Problem-solving & troubleshooting", "Teamwork in lab/plant", "Risk awareness & safety"],
    salary: { avg: "₹6.72 LPA", range: "₹3.88 - ₹10.5 LPA", top: "₹17.5 LPA" },
    companies: ["Reliance Industries", "IOCL", "ONGC", "GAIL", "Dr. Reddy's", "Tata Chemicals"],
    techTopics: [
      "Process design & simulation basics (ASPEN Plus / HYSYS)",
      "Thermodynamics, Mass Transfer, & Heat Transfer Operations",
      "Chemical safety, HAZOP study, & Risk Matrix Calculations",
      "Plant operations knowledge, Piping, & Instrumentation Diagrams (P&IDs)",
      "Process optimization & Mass Balance Calculations",
      "Fluid Dynamics, Pump sizing, & Control Valves selection",
      "Chemical Reactor Design & Reaction Kinetics",
      "Distillation Column operation & Process Control loops",
      "Effluent Treatment, Environmental compliance, & Waste management",
      "Quality Assurance standards (ISO 9001) & Lab testing protocols",
      "Equipment commissioning & Maintenance schedules",
      "Operational Cost estimation & Plant Scale-up calculations"
    ],
    softTopics: [
      "Incident report writing & Root Cause Analysis",
      "Shift handover communication & Safety Toolbox Talks",
      "Inter-departmental coordination (Ops, Safety, Maintenance)",
      "Plant Audit simulations & Compliance preparation"
    ]
  }
};

// Default timeline generator for undefined roles to prevent crashes
function getFallbackRoleDetails(roleName) {
  return {
    aptitude: ["Logical Reasoning", "Analytical Thinking", "Attention to Detail"],
    softSkills: ["Professional Communication", "Collaboration", "Growth Mindset"],
    salary: { avg: "₹6.0 LPA", range: "₹3.5 - ₹10 LPA", top: "₹15 LPA" },
    companies: ["Industry Leaders", "Consulting Firms", "Startups"],
    techTopics: [
      `${roleName} core concepts and fundamental knowledge`,
      "Practical tools and workflow setup",
      "Intermediate techniques and frameworks",
      "Core operational modules and methodologies",
      "Case studies and real-world system analysis",
      "Advanced integrations and pipeline systems",
      "Data analysis, metrics, and KPI dashboards",
      "System design and optimization techniques",
      "Problem-solving and testing methodologies",
      "Standard operating procedures and compliance",
      "Scalability, performance tuning, and scaling operations",
      "Comprehensive project construction and review"
    ],
    softTopics: [
      "Professional presentation and reporting",
      "Stakeholder management and negotiations",
      "Ethical standards and operational guidelines",
      "Final interview preparation and portfolio construction"
    ]
  };
}

// Language Library Timelines (Page 5)
const LANGUAGES_LIBRARY_DATA = [
  {
    name: "JavaScript",
    desc: "Master modern ECMAScript, asynchronous program flows, and browser/Node.js runtimes.",
    icon: "devicon-javascript-plain colored",
    steps: `Week 1: Foundations of JavaScript
Understand Variables, Data Types, Closures, and Scope.

Week 2: Control Flow & Objects
Arrays, Objects, Loops, and ES6+ features (Destructuring, Spread/Rest).

Week 3: Asynchronous Programming
Callbacks, Promises, Async/Await, and Event Loop Mechanics.

Week 4: DOM Manipulation & Web APIs
Selecting elements, handling events, storage (localStorage, sessionStorage).

Week 5: Object-Oriented JS & Prototypes
Prototypes, Classes, inheritance, and the 'this' keyword behavior.

Week 6: Functional Programming Concepts
Map, Filter, Reduce, Currying, and Pure Functions.

Week 7: Node.js Basics
Introduction to NPM, modules, file system operations, and Node CLI.

Week 8: REST APIs with Express
Routing, middleware, request/response cycle, and status codes.

Week 9: Testing JS Code
Unit testing with Jest, mocking, and assertion structures.

Week 10: Performance Optimization
Debouncing, throttling, memory leak detection, and DOM reflow minimization.

Week 11: Security Standards
Preventing XSS, CSRF, and injection attacks in frontend & backend.

Week 12: Consolidation & Review
Project construction, bundling with Vite, and hosting on Vercel.`
  },
  {
    name: "Python",
    desc: "Achieve fluency in Python, script automation, data tooling, and backend API structures.",
    icon: "devicon-python-plain colored",
    steps: `Week 1: Basic Python Structures
Variables, loops, conditionals, list comprehensions, and functions.

Week 2: Advanced Data Containers
Dictionaries, Sets, Tuples, collections module, and generator functions.

Week 3: Object-Oriented Python
Classes, inheritance, dunder methods, and decorators.

Week 4: File Handling & Serialization
Reading/Writing files, working with JSON, CSV, and pickle formats.

Week 5: Error and Exception Management
Try-except blocks, raising errors, custom exceptions, and logging.

Week 6: Data Science Libraries
Introduction to NumPy arrays, Pandas DataFrames, and basic plotting.

Week 7: Database Access in Python
SQLite connection, ORM concepts using SQLAlchemy.

Week 8: Web Frameworks: FastAPI
Creating server routes, Pydantic data schemas, and API documentation.

Week 9: Testing and Linting
Writing unit tests with pytest, mock tests, and PEP 8 guidelines.

Week 10: Concurrency and Threading
Multiprocessing, threading, and asyncio basics.

Week 11: Package Management
virtualenvs, pip, requirements.txt, and setup.py creation.

Week 12: Consolidation & Review
Deploying a FastAPI app to Render/Docker, and review of memory allocation.`
  },
  {
    name: "Java",
    desc: "Deep-dive into Object-Oriented design, JVM, concurrency, and Enterprise Spring Boot.",
    icon: "devicon-java-plain colored",
    steps: `Week 1: Java Core Language
Syntax, main function, JVM architecture (JRE vs JDK), compilation.

Week 2: Object-Oriented Java
Classes, Objects, Interfaces, Encapsulation, Polymorphism, Abstraction.

Week 3: Collections Framework
List, Set, Map interfaces, ArrayList vs LinkedList, HashMap operations.

Week 4: Exceptions & File IO
Checked/Unchecked exceptions, Try-with-resources, FileReader/FileWriter.

Week 5: Functional Interfaces & Streams
Lambda expressions, functional interfaces, Stream API operations (Map, Filter).

Week 6: Java Generics & Reflection
Generic classes, type erasure, reflection API, annotations.

Week 7: Multithreading & Concurrency
Thread class, Runnable, synchronization, Executors framework, locks.

Week 8: Spring Boot Core
Spring Container, Dependency Injection, IoC, Bean Lifecycle.

Week 9: Spring Data JPA
Database integration, JPA Entities, repositories, transactions.

Week 10: Build Tools & Deployment
Maven/Gradle setups, dependency management, building JAR/WAR files.

Week 11: JUnit & Mockito
Writing unit tests, Mocking services, integration testing.

Week 12: Consolidation & Review
Building an enterprise REST service, JAR deployment, and JVM garbage collection.`
  },
  {
    name: "C++",
    desc: "Unleash raw hardware efficiency, memory management, pointers, and object blueprints.",
    icon: "devicon-cplusplus-plain colored",
    steps: `Week 1: Basic Structure & Syntax
Compilers, variables, output/input streams, standard namespace.

Week 2: Pointers and Memory Addresses
Pointer arithmetic, references, stack vs heap allocation, new/delete.

Week 3: Object-Oriented C++
Classes, member functions, constructors/destructors, virtual functions.

Week 4: Template Metaprogramming
Writing generic functions, template classes, Standard Template Library (STL).

Week 5: STL Containers & Iterators
Vectors, Lists, Maps, Stacks, Queues, and iterator methods.

Week 6: Exception Handling & RAII
Resource Acquisition Is Initialization design pattern, try-catch, smart pointers.

Week 7: Smart Pointers
std::unique_ptr, std::shared_ptr, and std::weak_ptr.

Week 8: C++ Concurrency
std::thread, mutexes, locks, futures, and promises.

Week 9: Build Systems (CMake)
Creating CMakeLists.txt, linking libraries, multi-file compilations.

Week 10: Modern C++ Standards
Move semantics, rvalue references, lambda expressions (C++11/14/17/20).

Week 11: Memory Profiling & Debugging
Using GDB and Valgrind to locate segmentation faults and memory leaks.

Week 12: Consolidation & Review
Building a custom command line compiler/parser, memory optimization review.`
  },
  {
    name: "Go",
    desc: "Develop scalable microservices with built-in concurrency, channels, and simple build formats.",
    icon: "devicon-go-original-wordmark colored",
    steps: `Week 1: Go Syntax & Core Basics
Variables, types, control structures, functions, and arrays.

Week 2: Slices, Maps, and Structs
Working with slices, slice capacity, maps, structs, and methods.

Week 3: Pointers & Interfaces
Pointer variables, interface declaration, and implicit implementation.

Week 4: Goroutines & Concurrency
Go keyword, scheduling, and concurrency mechanisms.

Week 5: Channels & Synchronization
Buffered vs Unbuffered channels, select statements, sync.Mutex, sync.WaitGroup.

Week 6: Error Management in Go
Panic, recover, custom error variables, wrapping errors.

Week 7: Go Modules & Packages
Creating modules, importing packages, module files (go.mod).

Week 8: REST APIs with Go standard library
Net/http package, handlers, routing, and JSON decoding/encoding.

Week 9: Testing & Benchmarking
Writing _test.go files, testing.T suite, and performance benchmarks.

Week 10: DB Drivers & SQL
Connecting to databases, executing queries, handling transactions.

Week 11: Deployment & Docker
Creating scratch Docker images for compiled Go binaries.

Week 12: Consolidation & Review
Building a high-throughput microservice, testing concurrency, and profiling.`
  },
  {
    name: "Rust",
    desc: "Engineer systems with compile-time memory safety, ownership rules, and strong concurrency primitives.",
    icon: "devicon-rust-plain colored",
    steps: `Week 1: Rust Language Setup & Cargo
Cargo commands, variables, mutability, types, and functions.

Week 2: Ownership & Borrowing
The borrow checker, references, lifetimes, and slices.

Week 3: Structs & Enums
Defining structures, Enums, Option, Result, match pattern.

Week 4: Error Handling
Panic vs Result, propagating errors with ?, custom error types.

Week 5: Traits & Generics
Implementing Traits, generic types, trait bounds.

Week 6: Memory Management (Smart Pointers)
Box, Rc, Arc, RefCell, and smart pointer mechanics.

Week 7: Concurrency in Rust
Threads, Send & Sync traits, mutexes, and channels.

Week 8: Asynchronous Rust (Tokio)
Async-await runtime, futures, event-driven programming.

Week 9: Testing and Documentation
Unit tests, integration tests, cargo test suite, rustdoc comments.

Week 10: Cargo ecosystem & crates
Publishing crates, linking external dependencies, cargo workspaces.

Week 11: Unsafe Rust & FFI
Unsafe blocks, raw pointers, linking C code.

Week 12: Consolidation & Review
Building a memory-safe network daemon, compiling, static binaries.`
  }
];

// Helper to load current system data (resolves local storage to support edits)
function getSystemData() {
  let tracks = localStorage.getItem("cgp_tracks");
  let roles = localStorage.getItem("cgp_roles");
  let details = localStorage.getItem("cgp_details");
  let languages = localStorage.getItem("cgp_languages");

  if (!tracks) {
    localStorage.setItem("cgp_tracks", JSON.stringify(INITIAL_TRACKS));
    tracks = JSON.stringify(INITIAL_TRACKS);
  }
  if (!roles) {
    localStorage.setItem("cgp_roles", JSON.stringify(INITIAL_ROLES));
    roles = JSON.stringify(INITIAL_ROLES);
  }
  if (!details) {
    localStorage.setItem("cgp_details", JSON.stringify(INITIAL_ROLE_DETAILS));
    details = JSON.stringify(INITIAL_ROLE_DETAILS);
  }
  if (!languages) {
    localStorage.setItem("cgp_languages", JSON.stringify(LANGUAGES_LIBRARY_DATA));
    languages = JSON.stringify(LANGUAGES_LIBRARY_DATA);
  }

  return {
    tracks: JSON.parse(tracks),
    roles: JSON.parse(roles),
    details: JSON.parse(details),
    languages: JSON.parse(languages)
  };
}

function saveSystemData(data) {
  localStorage.setItem("cgp_tracks", JSON.stringify(data.tracks));
  localStorage.setItem("cgp_roles", JSON.stringify(data.roles));
  localStorage.setItem("cgp_details", JSON.stringify(data.details));
  localStorage.setItem("cgp_languages", JSON.stringify(data.languages));
}
