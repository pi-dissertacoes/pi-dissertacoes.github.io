
## Functional

### Dissertation Management

- The system must allow teachers to upload/edit/delete dissertation proposals;
- The system must allow students to show interest in multiple dissertations and accept only one;
- The system must allow administrators to accept or deny dissertation proposals by teachers.
- The system must allow teachers to add dissertation proposals and accept students for them;

### User Management

- The system should allow students to check their dissertation status and manage their proposals;
- The system should allow teachers to manage their proposals, check interested students and accept them for their proposals;
- The system should allow administrators to manage the dissertation season and manage the system's users.

### User Authentication

- The system should provide a login mechanism using UA's idp through OAuth2;
- The system should restrict user access to certain features based on their role (e.g., student, teacher, administrator).
- The system must do various checks based on user attributes to ensure that only authorized users can access certain features.

### Search Functionality

- The search feature should allow users to search for dissertations based on various criteria, such as title, advisor, courses, areas, publication date;
- The system should provide advanced search options such as filters and sorting.


### Notification System

- The system will included a notification system to alert users about important events, such as new dissertations, acceptance of proposals, and changes in the status of a dissertation.

### Workflow Automation

- The system should automate approval workflows for dissertation proposals, ensuring that they are reviewed and approved by the appropriate parties before being published;
- Notifications should be sent to the relevant users when a proposal is submitted, approved, or rejected.


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
- Define and enforce access controls for log files to ensure that only authorized personnel can view and modify logs.

### Maintainability

- The system shall be designed with a modular architecture, facilitating independent updates and modifications to specific components without affecting the entire codebase;
- All code modules and functions shall be adequately documented, providing clear explanations of their purpose, inputs, outputs, and usage to aid developers during maintenance;
- System configuration settings should be stored in easily modifiable and well-organized database, reducing the need for code changes to configure updates;
- Implement logging for all significant system events, errors and warnings;
- Log entries should include timestamps to facilitate the analysis of events over time;
- Logs should be stored centrally to facilitate easy monitoring and analysis;

### Usability and User Interface

- Include in the user interface common elements, such as navigation menus and buttons, should maintain consistent placement and behavior throughout the application, reducing cognitive load for users;
- Minimize the loading of UI elements, aiming for swift responses to user interactions to enhance perceived performance and usability;
- Provide clear and concise error messages that help users understand issues and guide them toward corrective actions;
- Incorporate inline help and tooltips strategically to provide additional information or guidance without cluttering the interface.