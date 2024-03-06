# Docker And Kubernetes
<br/>
<p align="center">
    ![architecture diagram](../../static/img/databases_nobg.png)
</p>

<p align="center">
  The database technologies utilized
</p>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Docker And Kubernetes](#docker-and-kubernetes)
  - [Table of Contents](#table-of-contents)
  - [Docker Compose](#docker-compose)
    - [Docker Containers](#docker-containers)
    - [Docker Networks](#docker-networks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Docker Compose

 Docker Compose was used as the primary container orchestrator.

 Docker Compose allows us to define all the necessary deployment parameters, such as ports, volumes and image versions.

 It also allows us to manage, launch and stop all the containers at once.

### Docker Containers

 For the docarization of our application, the following containers were defined:
  - Application (frontend)
  - Api Instance (multiple can be created at once)
  - Load Balancer
  - MongoDB
  - MariaDB
  - 
### Docker Networks

 Another advantage of docker compose is the ability to create multiple seperate networks between containers.

 In our application the following were created:
  - frontend_network (App <-> Frontend Server)
  - backend_network (API Instances <-> Databases)
  - request_network (Load Balancer <-> API Instances)