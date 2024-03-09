# Use Cases

## Actors

- __Student__
    - Makes use of the system as a potential user of the services provided by that system;
- __Teacher__
    - Makes use of the system as a potential user of the services provided by that system;
- __Admin__
    - Responsible for ensuring that the system is properly working, and intermediate contact between the other actors.

## Use Case UML Diagrams

### Student

1. Show interest - Select a dissertation and register as interested in the system;

2. See dissertations - View all dissertation proposals in the form of a list;

3. Confirm dissertation interest - After acceptance of the teacher, confirm the interest in the dissertation;

<p align="center">
    ![Student Use Case diagram](../../static/img/requirements/Use_cases_PI.png)
</p>

### Teacher

1. Add dissertation proposal - Add a dissertation proposal, composed of a file and metadata ( title, description, etc... );

2. Show interested students in a dissertation - Be able to see the students that showed interest in a dissertation I proposed to choose a student to work with;

3. Accept student for a dissertation - Finalize the proccess by confirming a student to work in a dissertation;

<p align="center">
    ![Teacher Use Case diagram](../../static/img/requirements/Use_cases_PI_-_Page_1.png)
</p>

### Admin

1. Accept dissertation proposal - Check all the dissertations that have not been accepted yet by system administrators and accept or deny them;

2. Manage dissertation season - Be able to open and close the dissertation season, so that no more dissertations can be added for the respective academic year;

<p align="center">
    ![Admin Use Case diagram](../../static/img/requirements/Use_cases_PI_-_Page_2.png)
</p>


## User stories

### Student

1. As a student  
I want to know more about some dissertations that i am interested  
so that i can select one;

2. As a student  
I want to know more about internship offers by DETI  
so that i can select an internship;

3. As a student  
I want to check the status of the dissertations im interested in  
so that i can check if the teacher has accepted me as the student for it;

### Teacher

1. As a teacher  
I want to be able to add the dissertations proposal's that I'am going to guide in that year, (could be or not co-supervised)  
so that student's can then read and show interest on them;

2. As a teacher
I want to confirm the "marriage" between me and the student that confirmed interest on my proposal  
so that the next steps can be taken;

### Admin

1. As an admin  
I want to see if there are any unapproved dissertations proposed by supervisors  
so they could be seen by all student's, after my approval;

2. As an admin  
I want to be able to add institute/companies logo's to the System DB  
so that those images can be used by proponents when adding a new dissertation;

3. As an admin  
I want to be able to introduce/change features in the system  
so that the system can be improved and updated;