# API Instances
<br/>
<p align="center">
    ![architecture diagram](../../static/img/python_fastapi.png)
</p>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [API Instances](#api-instances)
  - [Table of Contents](#table-of-contents)
  - [Why Python and FastAPI](#why-python-and-fastapi)
  - [The FastAPI implementation](#the-fastapi-implementation)
    - [Endpoints](#endpoints)
    - [Models](#models)
    - [Repositories](#repositories)
    - [Utils](#utils)
    - [Templates](#templates)
    - [Tests](#tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Why Python and FastAPI

 For the API itself, we chose to use [**FastAPI**](https://fastapi.tiangolo.com/).
 
 This choice was heavily influenced by the fact that **all the code must be extremely well documented** and easy to change in the future.

 FastAPI also provides **more functionality** than some of its more "barebones" competitors (for example, **flask**), while **omitting most of the less used features** of more complex alternatives (for example, **django**).

 The option of creating a **Spring-based API** or choosing a programming language **other than Python** is not possible, as the code itself **must be able to be maintained** by people who may not have the specific knowledge to quickly apply the changes that might be needed in the future.

 **Future proofing** also had a large impact on our decision, as all the components of this project must be able to have perhaps even **decades of support**, since if just one of the components used is discontinued, the whole action flow will be disrupted, causing **problems in the whole pipeline**.

 Therefore, **Python** and **FastAPI** were chosen because of their **featuresets**, easy **maintainability**, relatively **proven** future, and good **performance**.

---

## The FastAPI implementation

<p align="center">
    ![architecture diagram](../../static/img/fastapi.png)
</p>

 The final API codebase was divided into **multiple subsections**:

---

### Endpoints
 
 The endpoints consist of all the **accessible functions of the API**, along with their parameters and responses.

 All the endpoint's documentation can be found on the **Swagger documentation** on the API itself, at [**localhost:8080/docs**](localhost:8080/docs) (the application must be on in order for this page to work).

 The endpoints consist of **CRUD** and **other functions** that operate on the **models** and **local files** that have been inserted into the backend.

---

### Models

 The models are the **Python/Database** representation of the **real-life objects** that we are working with, providing a simpler and more clear approach to **data manipulation**.

 There are multiple models, for example:
  - **User** Model;
  - **Dissertation** Model;
  - **Notification** Model;
  - etc.

 Using the [**pydantic**](https://pydantic.dev/) library, all the models automatically apply **data consistency checks**, valid value checks, **default values**, etc for all the parameters and variables stored inside a given model object, allowing for a much **easier and cleaner code** implementation. 

---

### Repositories

 For **interacting with the main database**, a set of repository actions was implemented that allow the **abstraction** of the database components in the rest of the application.

 These repositories apply the necessary database operations to the main Database given a set of predefined parameters, and respond with the semi-processed outcome of the database.

 These are essential to **ensure that the database is not overloaded** with bad requests from other functions, that the database threads are used **efficiently** and that access to the database is **easy to alter**.

---

### Utils

 The utils are a set of functions that provide **extended functionality** to other parts of the API.

 These functions include:
  - **Authenticating** users;
  - Creating and sending **email notifications**;
  - Getting the **configurations** from the Configuration Database;
  - Managing **local files** from the Filesystem;
  - etc.

---

### Templates

 These templates are used by [**Jinja**](https://jinja.palletsprojects.com/en/3.1.x/) and the API to **generate simple HTML code**.

 The generated file can then be sent to an **email notification** or used to **list all the data collected** throughout the year (useful for collecting information from the previous year for backups).

---

### Tests

 The test portion is still to be implemented.