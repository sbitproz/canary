# Introduction

Hi :)

This react project presents a simulation of a crypto swap platform similar to of uniswap, cowswap and 1inch.  The tech stack includes Antd, redux, emotion.

A Metamask modal has been added to give an idea of the Metamask step required during crypto swap process.

The project includes a light and dark theme and is branded as the Canary Protocol.

Naturally there's room for improvement all round :). This project isn't complete :(

No testing has been included due to the time limitation.

## Features:

- Light / Dark theme
- Swap workflow
- Uniflow conversion
- Swap button
- Canary protocol branding 
- Centralised state management

## Prototype Steps:

- Enter crpyto values
- Connect to wallet
- Metamask connect
- Confirm swap
- Sign swap order
- Metamask sign
- Make another swap

## Requirements:

# Starting up project

## Install

Install the project dependencies

```
yarn
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