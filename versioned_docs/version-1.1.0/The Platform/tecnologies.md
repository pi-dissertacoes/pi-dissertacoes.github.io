# Tech Stack

In order to accomplish one of our goals - _make the platform easy to maintain and make it as durable as possible_ - we did an exhaustive research on the topic of **Tech Stack**.
To make it easier to visualize and make an informed decision, we elaborated these **tables** with essential information, such as the _date of the **last commit**_, _the **purpose** of the technology in our project_ and the _**companies** behind each technology_.  

## FrontEnd Tech Stack

This table contains all our proposals for the frontend tech stack.

> **Note for navigation:**
> While navigating thought the table, you might spot a ⚠️ near the technology name. It indicates that there is more than one technology that serves the same purpose in our proposal. We clarify our choice after the table.


| Technology                                  | Github                                             | Purpose in Project                                                                | License           | Community                                                                                                   | Date of creation | Last Commit | Owner/ Famous companies using                                                                                              |
| ------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| [React](https://react.dev) ✅                     | https://github.com/facebook/react/releases         | JavaScript library                                                    | MIT License        | **218k** stars in github, **21.7m** weekly npm installs                                          | 2013      | 19 jan 2024 | Facebook                                                                                            |
| [vite](https://vitejs.dev) ✅                     | https://github.com/vitejs/vite                     | Tool for creating and setting up React projects                       | MIT License        | **62.6k** stars in Github, **9.4m** weekly npm installs                                          | 2019      | 19 jan 2024 | Sponsored by Astro, StackBlitz, NuxLabs, JetBrains, TailwindLABS,...                        |
| [daisyui](https://daisyui.com/) ✅                | https://github.com/saadeghi/daisyui                | Pure CSS component library for Tailwind.                       | MIT License        | **28.4k** stars in github, **165.3k** open source projects, **227.9k** weekly npm installs | 2021      | 15 jan 2024 | None                                                                                                |
| [tailwind](https://tailwindcss.com) ✅            | https://github.com/tailwindlabs/tailwindcss        | CSS library                                                           | MIT License        | **75.5k** stars in github, **7.9m** weekly npm installs                                          | 2017      | 19 jan 2024 | TailwindLABS: used to build GitHub Next, Microsoft .NET, OpenAI / ChatGPT and many more websites. |
| [axios](https://axios-http.com) ✅                | https://github.com/axios/axios                     | Library for exchanging HTTP-based promises to make requests to the API. | MIT License        | **103k** stars in github, **47.3m** weekly npm installs                                          | 2014      | 5 jan 2024  | AXIOS; Sponsored by Lowdify, Proxidize, ...                                                       |
|[formik](https://formik.org) ⚠️                 | https://github.com/jaredpalmer/formik              | Library for creating and managing forms                                  | Apache License 2.0 | **33.2k** stars in github, **2.3m** weekly npm installs                                          | 2017      | 17 set 2023 | Formium; Used in companies such as Walmart, NASA, Docker, Bookingcom, ...                          |
| [react-hook-form](https://react-hook-form.com) ✅ | https://github.com/react-hook-form/react-hook-form | Library for creating and managing forms                                  | MIT License        | **38.4k** stars in github, **4.2m** weekly npm installs                                          | 2019      | 16 jan 2024 | Supported and Backed by BEEKAI, Vercel                                                              |
|yup ✅                                         | https://github.com/jquense/yup                     | Library for form validation                        | MIT License        | **27,1k** stars on github, **5.1m** weekly npm installs                                          | 2014      | 9 jan 2024  | None -> Used side by side with Formik or other React form libraries                             |
|[zustand](https://zustand-demo.pmnd.rs) ✅      | https://github.com/pmndrs/zustand                  | Library for state management within the React application               | MIT License        | **39.1k** stars in github, **2.9m** weekly npm installs                                          | 2019      | 31 dez 2023 | None: Used by companies like Hotjar, RippleAI, ...                                               |
|[redux toolkit](https://redux-toolkit.js.org) ⚠️  | https://redux-toolkit.js.org                       | Library for state management within the React application               | MIT License        | **10.2k** stars in github, **2.9m** weekly npm installs                                          | 2015      | 19 jan 2024 | ReduxTeam; Used by many companies like Instagram, Amazon, ...                                |
| [React Router Dom](https://reactrouter.com/en/main) ✅ | https://github.com/remix-run/react-router                       | Library for client side routing               | MIT License        | **51.7k** stars in github, **10.1m** weekly npm installs                                          | 2014      | 18 jan 2024 | Remix                                | 

_consulted on January 19, 2024_

Regarding the choice between the state management libraries we propose, **Redux** and **Zustand**, we decided to use zustand in our project for 2 main reasons:
- zustand provides less boilerplate code than redux, making our codebase more concise and more maintainable, which aligns with our goals;
- zustand minimal api feels more natural to react development, as it uses react hooks to create and manage stores *(while making the whole process faster)*

Regarding the forms management libraries, **react-hooks-form** and **formik**, we opted to use react-hooks-form, mainly because formik's last commit was more than 3 months old (at the time) and has more had more than 600 issues open on github. As one of our goals is to enhance DSD's maintainability and longevity, we decided to use a newer and more maintained react-hooks-form. 

## BackEnd Tech Stack

# Table with proposed backend technologies for the project.

This table serves for choosing between two technologies for two different applications:

- MongoDB driver: pymongo or motor;
- SAML implementation library: pysaml2 or python3-saml.

**Notes:**

- Motor is a pymongo wrapper that uses a set of threads which can help overcome I/O bottlenecks related to database access. This performance increase is only applicable to some cases, so some tests will need to be conducted to analyze its relevance for this project;
- python3-saml is a library more focused on communication with an existing Identity provider, while pysaml2 is a more comprehensive library (can serve as an Identity provider) but whose extra functionalities will not be useful for this project.


| Technology                                  | Github                                             | Purpose in Project                                                                | License           | Community                                                                                                   | Date of creation | Last Commit | Owner/ Famous companies using                                                                                              |
| ---------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------- | --------- | ----------- | ------- |
| [pymongo](https://www.mongodb.com/docs/drivers/pymongo/)      | https://github.com/mongodb/mongo-python-driver | Driver síncrono de mongoDB para python                                                                                                                              | Apache License 2.0 | **4k** stars in github, **1.2k** forks, **145** contribuidores | 2019      | 23 jan 2024 | MongoDB |
| [motor](https://motor.readthedocs.io/en/stable/) ✅              | https://github.com/mongodb/motor               | Driver assíncrono (non-blocking) de mongoDB para python que usa o pymongo e um sistema de multi-threading                                                           | Apache License 2.0 | **2.3k** stars in Github, **217** forks, **46** contribuidores | 2019      | 16 jan 2024 | MongoDB |
| [pysaml2](https://idpy.org//)                                 | https://github.com/IdentityPython/pysaml2      | Implementação 100% python do Standard SAML Version 2 com capacidades de implementar ambos um Service provider e Identity provider (não necessitado neste projeto) | Apache License 2.0 | **534** stars in Github, **455** forks, **135** contribuidores | 2013      | 7 nov 2023  | None    |
| [python3-saml](https://github.com/SAML-Toolkits/python3-saml) ✅ | https://github.com/SAML-Toolkits/python3-saml  | Livraria de implementação do SAML focada na simplicidade e eficiência, permite criar apenas um Service provider                                                   | MIT License        | **636** stars in Github, **337** forks, **65** contribuidores  | 2016      | 1 nov 2023  | None    |

_consulted on February 8, 2024_