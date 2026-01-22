# MERN Stack Curd Application

## **Description**

This project is a full-stack MERN CRUD application designed primarily as a hands-on learning platform for DevOps practices. While the application implements standard create, read, update, and delete functionality, the real focus is on understanding how modern web applications are containerized, orchestrated, and deployed. The codebase is intentionally kept practical and approachable, making it suitable for experimenting with Docker and progressively integrating Kubernetes to manage multi-service environments. The project emphasizes infrastructure, deployment workflows, and real-world system behavior rather than UI complexity, serving as a solid foundation for DevOps-oriented learning and experimentatio

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
