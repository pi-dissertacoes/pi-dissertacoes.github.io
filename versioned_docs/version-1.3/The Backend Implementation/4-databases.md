# Databases
<br/>
<p align="center">
    ![architecture diagram](../../../static/img/databases_nobg.png)
</p>

<p align="center">
  The database technologies utilized
</p>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Databases](#databases)
  - [Table of Contents](#table-of-contents)
  - [Databases](#databases-1)
    - [Main Database](#main-database)
    - [File Storage](#file-storage)
    - [Configuration Database](#configuration-database)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Databases

For better **separation, maintainability, scalability and performance**, the persistence of data was divided into **three separate databases**.

This allows the better utilization of each database's **core strengths** as they are needed in the multitude of tasks that the **API Instances** are required to perform.

---

### Main Database

  <p align="center">
      ![architecture diagram](../../../static/img/mongodb.png)
  </p>

 The **models** mentioned previously as well as most of the data processed are **saved in the Main Database**.

 Due to the **volatile** and **highly customizable** nature of these models, a database that could easily be adapted to new model formats was necessary.

 This means that the typical SQL databases are **not adequate** for our type of data structures, so a **[NoSQL](https://en.wikipedia.org/wiki/NoSQL) database was chosen instead**.

 Most NoSQL databases are much more recent than the SQL databases we are used to, and since all the components in this project must have certified **long term support**, the **[MongoDB](https://www.mongodb.com/) database was chosen**.

 MongoDB allows the **models to be changed without affecting the compatibility of old data models**, meaning that changes made to the database will still always allow for old data to be processed along with new data.

 Another key feature that drove our decision is the ability to easily convert a **mongoDB document into a JSON object** that could easily be natively worked on inside our python codebase, **without the need for complicated operations** such as joins, aggregations, etc... 

---

### File Storage 

  <p align="center">
      ![architecture diagram](../../../static/img/cloud_storage.png)
  </p>

 **Storing large files** (ex: PDF files from dissertations or dissertation logos) would take a lot of **I/O throughput** away from the rest of the Main Database as well as use a lot of the machine's available **storage space**.

 This means that another way of storing large singular files had to be chosen.

 For this, we used a **cloud storage system** that is included inside the machine's filesystem, which is then linked inside the necessary **docker volumes**.

 This allows the asynchronous storage and retrieval of files **without impacting the Main Database's** throughput capacity or performance.

---

### Configuration Database 

  <p align="center">
      ![architecture diagram](../../../static/img/mariadb.png)
  </p>

 Since **there can be a lot of API Instances running at any given time**, changes made to the configuration must be made in such a way that all the instances must pick up the new changes as soon as they use them. 

 So for **configurations and "magic numbers"**, we had to implement a place where all the instances could reach and get the necessary values.

 To do this, we chose to add a **[MariaDB](https://mariadb.org/) implementation** so that we did not have to worry about **concurrency** between all the instances and the data changes, as well as allowing all the configuration data to be **stored in the same, easy to edit file**.