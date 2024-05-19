# Introduction

Hi :)

This react project presents a simulation of a crypto swap platform similar to of uniswap, cowswap and 1inch.  The tech stack includes Antd, redux, emotion.

Naturally there's room for improvement all round :). This project isn't complete :(

No testing has been included due to the time limitation.

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