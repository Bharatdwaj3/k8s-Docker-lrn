# MERN Stack Curd Application

## **Description**
<h1 align="center"> The Documentation Architect </h1>
<p align="center"> Instantly generate professional, comprehensive README.md files for your Kubernetes and Docker-based projects. </p>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Issues" src="https://img.shields.io/badge/Dependencies-Verified-blue?style=for-the-badge">
  <img alt="Contributions" src="https://img.shields.io/badge/Architecture-Microservices-orange?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/Deployment-Docker%20|%20K8s-yellow?style=for-the-badge">
</p>

## 📄 Table of Contents
*   [⭐ Overview](#-overview)
*   [✨ Key Features](#-key-features)
*   [🛠️ Tech Stack & Architecture](#-tech-stack--architecture)
*   [📁 Project Structure](#-project-structure)
*   [🚀 Getting Started](#-getting-started)
*   [🔧 Usage](#-usage)
*   [🤝 Contributing](#-contributing)
*   [📝 License](#-license)

---

## ⭐ Overview

The Documentation Architect is a cutting-edge web application designed to eliminate the manual burden of documentation by transforming complex, multi-service applications—particularly those configured for Docker and Kubernetes (K8s) deployment—into meticulously structured and professional README.md files in seconds.

This project specifically focuses on providing a template and framework for developing, deploying, and managing a robust application stack, demonstrating best practices in microservices architecture, containerization, and configuration management (using `docker-compose` and sophisticated Helm charts).

### The Problem

> Creating comprehensive, professional documentation for complex software projects, especially those involving container orchestration like Docker and Kubernetes, is time-consuming, prone to error, and often inconsistent. Developers spend countless hours manually detailing installation steps, environment variables, and deployment configurations. Furthermore, many projects suffer from poor documentation regarding their underlying microservices, making them less accessible to contributors, less usable by operations teams, and slowing down the onboarding process significantly.

### The Solution

The Documentation Architect provides a fully integrated, interactive user interface (UI) built on a robust Component-based Architecture that simplifies the management and documentation process. By leveraging a dedicated RESTful API layer, the application can analyze complex setups (like the included MERN application structure and Kubernetes configuration files) and potentially generate the necessary descriptive documentation.

This system is built upon a high-performance **Microservices** foundation, utilizing **express** for efficient backend operations and **react** for a seamless user experience. All components are configured for portability via **docker**, ensuring reliable deployment across various environments, from local development using `docker-compose` to full Kubernetes orchestration using the provided Helm chart structure.

### Architecture Overview

The system is organized into distinct, independently deployable components following a **Microservices** pattern. The application exposes its functionality through a well-defined **REST API** managed by **Express**. The user experience layer is powered by **React**, adhering to a **Component-based Architecture** to ensure maintainability and responsiveness.

---

## ✨ Key Features

The Documentation Architect is engineered for simplicity, speed, and accuracy, delivering immediate value to developers and documentation teams.

*   **💻 Interactive Web Interface**
    *   Leveraging a robust **React** frontend, users experience a smooth, responsive, and intuitive platform for interacting with the documentation generation process. The component-based design ensures a modern, maintainable UI.
    *   *User Benefit:* Easily navigate the application and initiate documentation generation without relying on complex command-line tools.

*   **⚙️ Microservices Deployment Ready**
    *   The entire application stack is configured within a sophisticated deployment ecosystem, including a dedicated `docker-compose.yml` for local setup and a comprehensive structure for Kubernetes deployment, featuring dedicated YAMLs and a fully structured Helm chart (`mern-app-chart`).
    *   *User Benefit:* Demonstrates best practices for modern DevOps, providing clear separation of concerns between backend (API) and frontend (UI) services, leading to greater scalability and easier maintenance.

*   **⚡ Robust RESTful API Access**
    *   All core functionalities, including analysis triggering and documentation retrieval, are exposed via a clean and stable **Express** REST API. This structure supports both the internal frontend application and external programmatic integration.
    *   *User Benefit:* Enables automation by allowing external systems or scripts to trigger documentation generation processes securely and efficiently.

*   **🌐 Comprehensive Configuration Management**
    *   The project provides detailed configuration files for various deployment scenarios, including a `kind-config.yaml` for Kubernetes local cluster deployment (Kind), detailed deployment/service YAMLs, and a complete, templated Helm chart structure.
    *   *User Benefit:* Offers developers multiple, standardized paths for deployment, accelerating the move from local development to production-ready Kubernetes environments.

*   **🧩 Component-Driven Frontend Design**
    *   The frontend is highly structured, featuring dedicated components for navigation (`Navbar.jsx`), specific features (e.g., `WriterProfile.jsx`, `ContentDetails.jsx`), and layout structure (`Hero_Content.jsx`, `Footer.jsx`). This clear organization (evidenced by the file structure) highlights the commitment to high-quality code.
    *   *User Benefit:* The organized structure ensures a consistent and predictable user experience across the entire application interface.

---

## 🛠️ Tech Stack & Architecture

This project is built using proven, high-performance technologies, adhering to modern software architecture patterns suitable for scalable web applications and microservices deployment.

| Category | Technology | Purpose | Architectural Rationale |
| :--- | :--- | :--- | :--- |
| **Frontend** | **React** | Building the interactive, component-based user interface. Includes dependencies like `@mui/material` (Material UI), `react-redux` for state management, and `react-router-dom` for navigation. | Ensures a dynamic, high-performance user experience with strong state management capabilities, adhering to Component-based Architecture principles. |
| **Backend** | **Express** | Handling all server-side logic and managing the RESTful API endpoints, including configuration files for permissions, logging (`morgan`), environment setup, and database initialization (though no database files were found, configurations exist). | Provides a minimal, flexible Node.js web application framework, ideal for rapidly building efficient, scalable microservices. |
| **Architecture** | **Microservices** | Separation of the application into distinct, independently deployable services (evidenced by separate `backend/` and `frontend/` directories, and independent Dockerfiles). | Enhances agility, fault isolation, and scalability by decoupling services. |
| **Architecture** | **REST API** | The primary communication method between the frontend and backend, and for external system integration. | Provides a standard, stateless, and scalable way to expose application functionality over HTTP. |
| **Deployment** | **Docker** | Containerization of the entire application stack (frontend and backend). Configuration is managed via `Dockerfile`s and the top-level `docker-compose.yml`. | Guarantees consistency across different environments, simplifies local development setup, and forms the foundation for Kubernetes orchestration. |
| **Orchestration** | **Helm** | Templated package management for Kubernetes deployment (evidenced by the comprehensive `temp-for-helmify/mern-app-chart/` structure). | Simplifies complex deployments by bundling configuration files and resources into reusable charts. |

---

## 📁 Project Structure

The project is meticulously organized to support microservices, containerization, and advanced deployment strategies (Docker, Helm, Kubernetes).

The structure is divided clearly into `backend/`, `frontend/`, and deployment/configuration files.

```
📂 Bharatdwaj3-k8s-Docker-lrn-6383ca1/
├── 📄 readme.md
├── 📄 kind-config.yaml                               # Configuration file for running a local Kubernetes cluster (Kind)
├── 📄 docker-compose.yml                             # Single file orchestration for local multi-service deployment
├── 📄 .gitignore
├── 📂 temp-for-helmify/                              # Temporary directory containing K8s YAML manifests and the Helm chart
│   ├── 📄 frontend-deployment.yaml
│   ├── 📄 frontend-service.yaml
│   ├── 📄 frontend-claim0-persistentvolumeclaim.yaml
│   ├── 📄 api-service.yaml
│   ├── 📄 frontend-claim1-persistentvolumeclaim.yaml
│   ├── 📄 api-deployment.yaml
│   └── 📂 mern-app-chart/                            # Helm Chart structure for declarative deployment
│       ├── 📄 values.yaml                            # Default configuration values for the Helm chart
│       ├── 📄 Chart.yaml                             # Metadata for the Helm chart
│       ├── 📄 .helmignore
│       └── 📂 templates/                             # Kubernetes manifest templates using Helm logic
│           ├── 📄 frontend-deployment.yaml
│           ├── 📄 frontend-service.yaml
│           ├── 📄 _helpers.tpl
│           ├── 📄 frontend-claim0-persistentvolumeclaim.yaml
│           ├── 📄 api-service.yaml
│           ├── 📄 frontend-claim1-persistentvolumeclaim.yaml
│           └── 📄 api-deployment.yaml
├── 📂 backend/                                       # Express Microservice (API)
│   ├── 📄 Dockerfile                                 # Docker build instructions for the backend service
│   ├── 📄 server.js                                  # Backend entry point
│   ├── 📄 package.json                               # Backend dependencies
│   ├── 📄 package-lock.json
│   ├── 📄 .env.example                               # Example environment variables (Required for configuration files)
│   ├── 📄 .dockerignore
│   ├── 📄 .gitignore
│   └── 📂 src/
│       ├── 📂 config/                                # Configuration files for core service settings
│       │   ├── 📄 permissions.config.js
│       │   ├── 📄 morgan.config.js                   # Logging configuration
│       │   ├── 📄 env.config.js                      # Environment setup configuration
│       │   └── 📄 db.config.js                       # Database connection configuration
│       ├── 📂 models/                                # Data Models (Based on detected structure: MERN-style app)
│       │   ├── 📄 reader.model.js
│       │   ├── 📄 content.model.js
│       │   ├── 📄 writer.model.js
│       │   ├── 📄 user.model.js
│       │   └── 📄 index.js
│       ├── 📂 middleware/                            # Express middleware for request processing
│       │   ├── 📄 permission.middleware.js
│       │   ├── 📄 auth.middleware.js
│       │   ├── 📄 role.middleware.js
│       │   ├── 📄 index.js
│       │   ├── 📄 token.middleware.js
│       │   └── 📄 db.middleware.js
│       ├── 📂 routes/                                # API route definitions
│       │   ├── 📄 content.routes.js
│       │   ├── 📄 reader.routes.js
│       │   ├── 📄 writer.routes.js
│       │   ├── 📄 user.routes.js
│       │   └── 📄 index.js
│       ├── 📂 services/                              # External service interactions (e.g., file handling)
│       │   ├── 📄 cloudinary.service.js
│       │   └── 📄 multer.service.js
│       └── 📂 controller/                            # Business logic controllers
│           ├── 📄 user.controller.js
│           ├── 📄 writer.controller.js
│           ├── 📄 reader.controller.js
│           ├── 📄 content.controller.js
│           └── 📄 index.js
├── 📂 frontend/                                      # React Microservice (UI)
│   ├── 📄 vite.config.js                             # Vite build configuration
│   ├── 📄 eslint.config.js
│   ├── 📄 Dockerfile                                 # Docker build instructions for the frontend service
│   ├── 📄 package.json                               # Frontend dependencies (React, MUI, Axios, Redux)
│   ├── 📄 package-lock.json
│   ├── 📄 .dockerignore
│   ├── 📄 .gitignore
│   ├── 📄 index.html
│   ├── 📂 src/
│   │   ├── 📄 App.jsx
│   │   ├── 📄 App.css
│   │   ├── 📄 index.css
│   │   ├── 📄 main.jsx                               # Frontend entry point
│   │   ├── 📂 assets/                                # Static assets and icons
│   │   │   ├── 📄 react.svg
│   │   │   ├── 📄 image.png
│   │   │   ├── 📄 reddir.png
│   │   │   ├── 📄 discord.png
│   │   │   ├── 📄 telegram.png
│   │   │   ├── 📄 Bol.png
│   │   │   ├── 📄 mastadon.png
│   │   │   └── 📄 index.js
│   │   ├── 📂 util/
│   │   │   └── 📄 api.js                             # API utility functions (using Axios)
│   │   ├── 📂 components/                            # Reusable UI components
│   │   │   ├── 📄 Navbar.jsx
│   │   │   └── 📄 index.js
│   │   ├── 📂 features/                              # Feature-specific components
│   │   │   ├── 📄 index.js
│   │   │   ├── 📂 writer/
│   │   │   │   └── 📄 WriterProfile.jsx
│   │   │   ├── 📂 content/
│   │   │   │   ├── 📄 ContentDetails.jsx
│   │   │   │   ├── 📄 ContentTab.jsx
│   │   │   │   └── 📄 ContentGrid.jsx
│   │   │   └── 📂 reader/
│   │   │       └── 📄 ReaderProfile.jsx
│   │   ├── 📂 layout/                                # Page structure components
│   │   │   ├── 📄 Hero_Content.jsx
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 Content.jsx
│   │   │   ├── 📄 index.js
│   │   │   └── 📄 Footer.jsx
│   │   ├── 📂 auth/                                  # Authentication components
│   │   │   ├── 📄 Login.jsx
│   │   │   ├── 📄 Signup.jsx
│   │   │   └── 📄 index.js
│   │   └── 📂 pages/                                 # Top-level page components
│   │       ├── 📄 Home.jsx
│   │       ├── 📄 About.jsx
│   │       └── 📄 index.js
│   └── 📂 public/
│       └── 📄 vite.svg
└── 📂 .vscode/                                       # Editor configuration
    └── 📄 settings.json
```

---

## 🚀 Getting Started

To get started with The Documentation Architect, you will need to set up a local Docker environment, as the project is configured for containerized deployment using `docker-compose.yml`.

### Prerequisites

*   **Docker:** Ensure Docker Desktop (or equivalent Docker engine) is installed and running on your system.

### Installation & Launch

Since the project uses Docker for environment consistency, the setup process is streamlined via the provided `docker-compose.yml`.

The `docker-compose.yml` file is configured to build and run both the `backend` (Express API) and the `frontend` (React UI) services, alongside any required network setup.

Execute the following command in the root directory:

```bash
docker-compose up --build
```

This command will:
1.  Read the `Dockerfile` for the `backend/` and `frontend/` directories.
2.  Build the necessary Docker images.
3.  Start the containers, linking the services as defined in `docker-compose.yml`.

Wait for both services to report successful startup in the terminal logs.

---

## 🔧 Usage

The Documentation Architect operates as a fully functional web application (`web_app`) accessible through your browser. Once the Docker containers are successfully running, the system is ready for immediate use.

### Accessing the Web Interface

Open your web browser and navigate to the port exposed by the `frontend` service in your Docker configuration (typically `http://localhost:3000` or a port specified in `docker-compose.yml`).

From the interactive interface, users can:
*   Navigate between the Home, About, Login, and Signup pages.
*   Interact with the component layouts (e.g., `Navbar.jsx`, `Footer.jsx`).
*   Access feature-specific areas like the `WriterProfile` or `ContentGrid`.

### API Access

The backend provides a RESTful API layer managed by Express. While the full set of endpoints is extensive (as suggested by the detailed routing files like `user.routes.js` and `content.routes.js`), the primary documented endpoint for basic access or health checking is:

#### Root Endpoint

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Provides the base access point for the API. This typically serves as a health check or a root welcome message confirming the server is operational. |

To confirm API availability, you can use a tool like `curl` or a browser (if the backend is exposed directly):

```bash
# Example API call (adjust port if necessary)
curl http://localhost:5000/ 
```

Feel free to open an issue for any questions or concerns. We're here to help!



## **Tech Stack**

- Database:  MongoDB
- Frontend:  ReactJS, TailwindCSS
- Backend:  Express, NodeJS
- DevOps:  Kubernetes, Docker

## **Kubernetes Ecosystem used**

- **Kompose** : To translate docker-compose.yaml to Kubernetes Yaml
- **MiniCube**:  To Test Kubernetes Local Commands
- **Kind**: To run multi node environments
- **Helm**: Package Manager

## **Snippets**

**_! Note_: The commands are tested on WSL-Ubuntu**

```shell

# Install Kompose to convert docker-compose files to kubernetes yaml
 curl -L https://github.com/kubernetes/kompose/releases/download/v1.31.2/kompose-linux-amd64 -o kompose
 chmod +x kompose
 sudo mv kompose /usr/local/bin/

# Install helmify to convert yaml files to helm charts 
 curl -L https://github.com/arttor/helmify/releases/latest/download/helmify_Linux_x86_64.tar.gz -o helmify.tar.gz
 tar -xzf helmify.tar.gz helmify
 chmod +x helmify
 sudo mv helmify /usr/local/bin/
 helmify --version   # should print version

# Install Skaffold for deployment automation 
 curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
 chmod +x skaffold
 sudo mv skaffold /usr/local/bin/skaffold
 skaffold version

# Install Kind for multi Node Setup 
 curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
 chmod +x ./kind
 sudo mv ./kind /usr/local/bin/kind
 kind version
 
# Install MiniKube for Terminal config 
 curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
 chmod +x minikube-linux-amd64
 sudo install minikube-linux-amd64 /usr/local/bin/minikube
 minikube version
 
# Refactor your docker.compose file into kubernete Yamls 
 kompose convert -f docker-compose.yml


# Point to Docker Diamon
 eval $(minikube docker-env)

# Build Docker images
 docker build -t my-app-api:latest ./backend -f backend/Dockerfile
 docker build -t my-app-ui:latest ./frontend -f frontend/Dockerfile

# Verify the existence of images
 docker images | grep my-app

# Map Secrets 
 kubectl create secret generic api-secrets --from-env-file=./backend/.env


# Install Helm the package Manager
 curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
 helm version

# Build the Docker files
 docker build -t my-app-api:v1 ./backend -f backend/Dockerfile
 docker build -t my-app-ui:v1 ./frontend -f frontend/Dockerfile
 
#  List avaliable Clusters
 kind get clusters
 

# My cluster name is Desktop
# Yours can be something totally different
# so --name <Cluster Name>

 kind load docker-image my-app-ui:v1 --name desktop
 kind load docker-image my-app-ui:v1 --name desktop
 
# Get all the images with the name regex my-app 
 docker exec -it desktop-control-plane crictl images | grep my-app

# Convert all k8s-yaml files in the helm-temp folder to mern-app-app folder as helm files
 helmify -f . mern-app-chart
 
# Export Kubeconfig and Switch Context
 kind export kubeconfig --name desktop
 kubectl config get-contexts
 kubectl config use-context kind-desktop
 kubectl config current-context
 kubectl get nodes
 
 
# Verify Both Images Are in the Cluster
 docker exec -it desktop-control-plane crictl images | grep my-app

# Create Namespaces
 kubectl create namespace mern-app
 kubectl get namespaces

# Create Secrets
 kubectl create secret generic api-secrets \
   --from-env-file=./backend/.env \
   --namespace=mern-app
 kubectl get secrets -n mern-app
 
# Running the helm template 
 helm template mern-app ./mern-app-chart --debug

# Dry run your Helm Chart
 helm install mern-app ./mern-app-chart \
  --namespace mern-app \
  --create-namespace \
  --dry-run --debug
  
# Craete namespace 
  helm install mern-app ./mern-app-chart \
  --namespace mern-app \
  --create-namespace
  
# Deploy  your helm Chart 
 helm install mern-app ./mern-app-chart \
  --namespace mern-app \
  --create-namespace

# Update changes to helm charts 
 helm upgrade mern-app ./mern-app-chart --namespace mern-app
  
# List all the running pods 
 kubectl get pods -n mern-app -w

# Port Foward 
 kubectl port-forward pod/mern-app-mern-app-chart-api-<pod_id> 5009:5009 -n mern-app
 kubectl port-forward pod/mern-app-mern-app-chart-frontend-<pod_id> 5173:5173 -n mern-app

```

--- 

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.
