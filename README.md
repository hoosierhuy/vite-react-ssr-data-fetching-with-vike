# Vite + React Server Side Rendered + Vike + TypeScript

Vite/React SSR/Vike is another option to NextJS and Remix. In this repository, I show you how to create a Vite/React SSR/Vike project with TypeScript from scratch, and fetch data and dynamically use that data for SEO. The source and inspiration for this project come from [Vike](https://vike.dev/) starter guide and documentation.

## Branches for this application

The `main` branch for this is the completed version of the project. The `project-start` branch is a vanilla client side React/Vite application that uses TanStack Query to fetch data. The premise for this project is that you started with a client side Vite/React application and you want to convert it to a Vite/React SSR application using Vike.

The creators of Vike recommends using the CLI tool [Bati](https://batijs.dev/) to spin up a new Vite/React/Vike project, however, in order to help you understand how Vike works behind the scenes, I manually set up this Vite/React/Vike project to fetch data on the **server** side, and I will teach you how to use that data to help with SEO.
