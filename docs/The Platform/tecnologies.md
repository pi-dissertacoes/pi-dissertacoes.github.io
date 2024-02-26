# Tech Stack

In order to accomplish one of our goals - _make the platform easy to maintain and make it as durable as possible_ - we did an exhaustive research on the topic of **Tech Stack**.
To make it easier to visualize and make an informed decision, we elaborated these **tables** with essential information, such as the _date of the **last commit**_, _the **purpose** of the technology in our project_ and the _**companies** behind each technology_.  

## FrontEnd Tech Stack

This table contains all our proposals for the frontend tech stack.

> **Note for navigation:**
> While navigating thought the table, you might spot a ⚠️ near the technology name. It indicates that there is more than one technology that serves the same purpose in our proposal. We clarify our choice after the table.


| Technology                                  | Github                                             | Purpose in Project                                                                | Licence           | Community                                                                                                   | Date of creation | Last Commit | Owner/ Famous companies using                                                                                              |
| ------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| [React](https://react.dev)                     | https://github.com/facebook/react/releases         | Livraria de JavaScript                                                    | MIT Licence        | **218k** stars no github, **21.7m** weekly npm installs                                          | 2013      | 19 jan 2024 | Facebook                                                                                            |
| [vite](https://vitejs.dev)                     | https://github.com/vitejs/vite                     | Ferramenta de criação e setup do projeto em react                       | MIT Licence        | **62.6k** stars no Github, **9.4m** weekly npm installs                                          | 2019      | 19 jan 2024 | Vite -> sponsored by Astro, StackBlitz, NuxLabs, JetBrains, TailwindLABS,...                        |
| [daisyui](https://daisyui.com/)                | https://github.com/saadeghi/daisyui                | Livraria de componentes puramente css para tailwind                       | MIT Licence        | **28.4k** stars no github, **165.3k** projetos open source, **227.9k** weekly npm installs | 2021      | 15 jan 2024 | None                                                                                                |
| [tailwind](https://tailwindcss.com)            | https://github.com/tailwindlabs/tailwindcss        | Livraria de css                                                           | MIT Licence        | **75.5k** stars no github, **7.9m** weekly npm installs                                          | 2017      | 19 jan 2024 | TailwindLABS -> used to build GitHub Next, Microsoft .NET, OpenAI / ChatGPT and many more websites. |
| [axios](https://axios-http.com)                | https://github.com/axios/axios                     | Livraria de troca de promessas baseadas em HTTP para fazer pedidos à API | MIT Licence        | **103k** stars no github, **47.3m** weekly npm installs                                          | 2014      | 5 jan 2024  | AXIOS -> Sponsored by Lowdify, Proxidize, ...                                                       |
|[formik](https://formik.org) ⚠️                 | https://github.com/jaredpalmer/formik              | Livraria de criação e gestão de forms                                  | Apache Licence 2.0 | **33.2k** stars no github, **2.3m** weekly npm installs                                          | 2017      | 17 set 2023 | Formium -> Usada em empresasa como Walmart, NASA, Docker, Booking.com, ...                          |
| [react-hook-form](https://react-hook-form.com) ⚠️ | https://github.com/react-hook-form/react-hook-form | Livraria de criação e gestão de forms                                  | MIT Licence        | **38.4k** stars no github, **4.2m** weekly npm installs                                          | 2019      | 16 jan 2024 | Supported and Backed -> BEEKAI, Vercel                                                              |
|yup                                         | https://github.com/jquense/yup                     | Livraria de validação de forms, aliada ao Formik                        | MIT Licence        | **27,1k** stars on github, **5.1m** weekly npm installs                                          | 2014      | 9 jan 2024  | None -> Usado lado a lado com o Formik ou outras libs de forms em react                             |
|[zustand](https://zustand-demo.pmnd.rs) ⚠️      | https://github.com/pmndrs/zustand                  | Livraria para gestão de estado dentro da aplicação react               | MIT Licence        | **39.1k** stars no github, **2.9m** weekly npm installs                                          | 2019      | 31 dez 2023 | None -> Usado por empresas como Hotjar, RippleAI, ...                                               |
|[redux toolkit](https://redux-toolkit.js.org) ⚠️  | https://redux-toolkit.js.org                       | Livraria para gestão de estado dentro da aplicação react               | MIT Licence        | **10.2k** stars no github, **2.9m** weekly npm installs                                          | 2015      | 19 jan 2024 | ReduxTeam -> usada em bastantes empresas como Instagram, Amazon, ...                                |

_consulted on January 19, 2024_

## BackEnd Tech Stack

Tabela com as tecnolgias propostas para o backend do projeto.

Esta tabela serve para a escolha entre duas tecnologias para duas aplicações diferentes:

- Driver de mongoDB: pymongo ou motor;
- Livraria de implementação de SAML: pysaml2 ou python3-saml.

Notas:

- Motor é um wrapper de pymongo que utiliza um set de threads que pode ajudar a ultrapassar bottlenecks de I/O relacionados com o acesso à base de dados. Este aumento de performance apenas é aplicável a alguns casos, por isso alguns testes terão de ser realizados para analisar a sua relevância para este projeto;
- python3-saml é uma livraria mais focada na parte de comunicação com um Identity provider existente, enquanto pysaml2 é uma livraria mais completa (pode servir como Identity provicer) mas cujas funcionalidades extra não nos serão úteis para este projeto.

| Pref | Tecnologia                                                 | Github                                         | Propósito                                                                                                                                                           | Licença           | Comunidade                                                                       | Criação | Last Commit | Empresa |
| ---- | ---------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------- | --------- | ----------- | ------- |
|      | [pymongo](https://www.mongodb.com/docs/drivers/pymongo/)      | https://github.com/mongodb/mongo-python-driver | Driver síncrono de mongoDB para python                                                                                                                              | Apache Licence 2.0 | **4k** stars no github, **1.2k** forks, **145** contribuidores | 2019      | 23 jan 2024 | MongoDB |
| ✅   | [motor](https://motor.readthedocs.io/en/stable/)              | https://github.com/mongodb/motor               | Driver assíncrono (non-blocking) de mongoDB para python que usa o pymongo e um sistema de multi-threading                                                           | Apache Licence 2.0 | **2.3k** stars no Github, **217** forks, **46** contribuidores | 2019      | 16 jan 2024 | MongoDB |
|      | [pysaml2](https://idpy.org//)                                 | https://github.com/IdentityPython/pysaml2      | Implementação 100% python do Standard SAML Version 2 com capacidades de implementar ambos um Service provider e Identity provider (não necessitado neste projeto) | Apache Licence 2.0 | **534** stars no Github, **455** forks, **135** contribuidores | 2013      | 7 nov 2023  | None    |
| ✅   | [python3-saml](https://github.com/SAML-Toolkits/python3-saml) | https://github.com/SAML-Toolkits/python3-saml  | Livraria de implementação do SAML focada na simplicidade e eficiência, permite criar apenas um Service provider                                                   | MIT Licence        | **636** stars no Github, **337** forks, **65** contribuidores  | 2016      | 1 nov 2023  | None    |

_Consultado a 8 fev 2024_
