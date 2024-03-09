
## Functional

### Actors:

#### Student: 

Makes use of the system as a potential user of the services provided by that system;

#### Teacher:

Makes use of the system as a potential user of the services provided by that system;

#### Admin:

Responsible for ensuring that the system is properly working, and intermediate contact between the other actors;

### User stories

#### Student: 

1. As a student  
I want to know more about some dissertations that i am interested  
so that i can select one;

2. As a student  
I want to know more about internship offers by DETI  
so that i can select an internship;

3. As a student  
I want to check the status of the dissertations im interested in  
so that i can check if the teacher has accepted me as the student for it;

#### Teacher:

1. As a teacher  
I want to be able to add the dissertations proposal's that I'am going to guide in that year, (could be or not co-supervised)  
so that student's can then read and show interest on them;

2. As a teacher
I want to confirm the "marriage" between me and the student that confirmed interest on my proposal  
so that the next steps can be taken;

#### Admin:

 1. As an admin  
 I want to see if there are any unapproved dissertations proposed by supervisors  
 so they could be seen by all student's, after my approval;

2. As an admin  
I want to be able to add institute/companies logo's to the System DB  
so that those images can be used by proponents when adding a new dissertation;

3. As an admin  
I want to be able to introduce/change features in the system  
so that the system can be improved and updated;

### Use Cases 

#### Student:

1. Show interest - Select a dissertation and register as interested in the system;

2. See dissertations - View all dissertation proposals in the form of a list;

3. Confirm dissertation interest - After acceptance of the teacher, confirm the interest in the dissertation;

<p align="center">
    ![Student Use Case diagram](../../static/img/requirements/Use_cases_PI.png)
</p>

#### Teacher:

1. Add dissertation proposal - Add a dissertation proposal, composed of a file and metadata ( title, description, etc... );

2. Show interested students in a dissertation - Be able to see the students that showed interest in a dissertation I proposed to choose a student to work with;

3. Accept student for a dissertation - Finalize the proccess by confirming a student to work in a dissertation;

<p align="center">
    ![Teacher Use Case diagram](../../static/img/requirements/Use_cases_PI_-_Page_1.png)
</p>

#### Admin:

1. Accept dissertation proposal - Check all the dissertations that have not been accepted yet by system administrators and accept or deny them;

2. Manage dissertation season - Be able to open and close the dissertation season, so that no more dissertations can be added for the respective academic year;

<p align="center">
    ![Admin Use Case diagram](../../static/img/requirements/Use_cases_PI_-_Page_2.png)
</p>

## Non-functional

### Performance

- The system should maintain consistent response times as the user base or data volume increases;
- The system should be able to handle an increasing number of transactions or requests per unit of time.

### Scalability

- The system should accomodate a growing volume of data without significant degradation in performance;
- The system should support horizontal scaling by distributing workloads accross multiple servers or nodes;
- The system should support vertical scaling by allowing the addition of more resources to a single server;
- Ensure that vertical scaling provides a proportional increase in performance.

### Availability and Fault Tolerance

- In the event of a server failure, the system should automatically redirect traffic to an available server in a short period of time, to minimize service disruption;
- The system shall achieve a minimum uptime of 99.99% over any consecutive 30-day period, excluding scheduled maintenance windows;
- The system should remain available and responsive in the event of component failures or increased load;
- There should be sufficient capacity to accommodate the failover of services without impacting performance.

### Load Balancing

- The system should distribute incoming requests evenly across multiple servers to ensure balanced resource utilization;
- Load balancers should scale seamlessly to handle increased network traffic.

### Data Partitioning and Integrity

- The system should be able to shard data effectively to distribute it accross multiple nodes.
- The system shall implement thorough input validation mechanisms to ensure that only valid and properly formatted data is accepted;

### Security

- Access permissions should be based on roles to ensure proper authorization (RBAC - Role-Based Access Control);
- All sensitive data transmitted over the network should be encrypted using secure protocols (e.g., TLS/SSL);
- Implement secure CORS policies to prevent unauthorized access from web applications.

### Logging and Monitoring

- Implement logging for all significant system events, errors and warnings;
- Log entries should incluse timestamps to facilitate the analysis of events over time;
- Logs should be stored centrally to facilitate easy monitoring and analysis;
- Define and enforce access controls for log files to ensure that only authorized personnel can view and modify logs.

### Usability and User Interface

- Include in the user interface common elements, such as navigation menus and buttons, should maintain consistent placement and behavior throughout the application, reducing cognitive load for users;
- Minimize the loading of UI elements, aiming for swift responses to user interactions to enhance perceived performance and usability;
- Provide clear and concise error messages that help users understand issues and guide them toward corrective actions;
- Incorporate inline help and tooltips strategically to provide additional information or guidance without cluttering the interface.