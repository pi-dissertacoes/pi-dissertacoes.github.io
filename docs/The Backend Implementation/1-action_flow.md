# Action Flow
<br/>
<p align="center">
    ![architecture diagram](../../static/img/backend.png)
</p>

<p align="center">
  The Backend technologies and their connections.
</p>

---

## Table of Contents

- [Action Flow](#)
  - [Table of Contents](#table-of-contents)
  - [General Flow Description](#general-flow-description)


---

## General Flow Description

The **backend** is composed of multiple services and technologies that manage **three internal functions**:
    - **Load Balancing**
    - **Data Manipulation**
    - **Data Persistance**

 The **data** is provided in the form of **HTTP requests** created by the **frontend** of the application.

 These requests are first intercepted by the **load balancer**, which will distribute all the incoming requests to a set of **API instances**.

 These instances will perform the necessary **data processing** and analysis and will provide the response back to the load balancer, which will promptly **foward the response** back to the initial **requester**.

 To **persist** and save the **data**, the API instances are connected to a set of **three main databases**.
 Each database has a **distinct function**, that being for saving the **data models** (main database), saving the **provided files** (cloud storage) and finally saving the **configurations** of the instances and "magic numbers" (configuration database)