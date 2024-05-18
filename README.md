- Add redux or context api
- Get design looking more amazing
- Add a little more metamask content
- Some calculation translation
- Add some more context sign / confirmation

# Introduction

Hi :)

This react project utilises AntD UI for the 'UI' and axios for consuming APIs. The project attempts at delivering reasonably comprehensive test coverage in the feature domain area.

Naturally there's room for improvement all round :). This project isn't complete :(

## Requirements:

- 

# Starting up project

## Install

Install the project dependencies

```
yarn
```

## Create an .env file

Create an .env file in the root of the project.  Copy the contents from .env.defaults into the .env file or use the below configurations

```
VITE_BASEURL=http://localhost:3000/results
NOTIFICATION_DURATION=10
```

## Start the React app

Start the React app

```
yarn dev
```

## View the App

Providing both vite and json-server have started successfully, go to your favourite browser and open the following URL: http://localhost:5173/

# Folder Architecture

This is a small project but still has enough components to utilise a domain folder structure. By abstracting out reuseable components, I have focused on 2 key component domains common and Swaps. The folder structure will be similar to the following:
```
components
|  +-- Swaps
|     +-- components
|         +-- SwapSearch
|             +-- SwapSearch.tsx
|             +-- SwapSearch.styles.ts
|             +-- useSwapSearch.ts
|     +-- Swaps.tsx
|     +-- useSwaps.ts
|     +-- Swaps.utils.ts
|     +-- Swaps.styles.ts
|  +-- common (project reusable zone)
|     +-- components
|     +-- hooks
|     +-- styles
|     +-- utils
+-- styles
App.tsx
```