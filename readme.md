# MERN Stack Curd Application

## **Description**

This project is a full-stack MERN CRUD application designed primarily as a hands-on learning platform for DevOps practices. While the application implements standard create, read, update, and delete functionality, the real focus is on understanding how modern web applications are containerized, orchestrated, and deployed. The codebase is intentionally kept practical and approachable, making it suitable for experimenting with Docker and progressively integrating Kubernetes to manage multi-service environments. The project emphasizes infrastructure, deployment workflows, and real-world system behavior rather than UI complexity, serving as a solid foundation for DevOps-oriented learning and experimentatio


## **Tech Stack**: 
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

#Install Kmpose to conver
	curl -L https://github.com/kubernetes/kompose/releases/download/v1.31.2/kompose-linux-amd64 -o kompose
	chmod +x kompose
	sudo mv kompose /usr/local/bin/
	
# Refactor your docker.compose file into kubernete Yamls 
	kompose convert -f docker-compose.yml

#Install MiniKube for Terminal config 
	curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
	chmod +x minikube-linux-amd64
	sudo install minikube-linux-amd64 /usr/local/bin/minikube
	minikube version
	
# Point to Docker Diamon
	eval $(minikube docker-env)

# Build Docker images
	docker build -t my-app-api:latest ./backend -f backend/Dockerfile
	docker build -t my-app-ui:latest ./frontend -f frontend/Dockerfile
	

# Verify the existence of images
	docker images | grep my-app

# Map Secrets
	kubectl create secret generic api-secrets --from-env-file=./backend/.env 	
	

```