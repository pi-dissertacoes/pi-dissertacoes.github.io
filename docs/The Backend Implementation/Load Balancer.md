# Load Balancer
<br/>
<p align="center">
    ![architecture diagram](../../static/img/nginx.png)
</p>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Load Balancer](#load-balancer)
  - [Table of Contents](#table-of-contents)
  - [NGINX](#nginx)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---


## NGINX

 For the **load balancer**, we chose to use a simple [**NGINX**](https://nginx.org/en/) configuration, that allows us to tune how the **distribution of work** is made between the **API instances** (round-robin, response time, etc) and does not introduce a large processing **overhead** into our system.

 Since the system is **user-based**, the backend must provide the responses in a **timely manner**, so any overhead introduced must be reduced to a minimum.

 NGINX also allows us to automatically **intercept and filter large files** as soon as the requests carrying them are received in the backend, preventing these files from taking up too much processing power to analyze.

So with NGINX we can:
* **Balance the processing load** more efficiently across our API Instances;
* **Prevent large files** from having to be processed, discarding them as soon as possible;
* **Reduce the overhead** introduced into the system by other large load balancers.