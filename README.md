# Frontend Technical Test

# Summary

- [Frontend Technical Test](#frontend-technical-test)
- [Summary](#summary)
- [Description](#description)
- [Installation](#installation)
  - [Run API server](#run-api-server)
  - [Run app as dev](#run-app-as-dev)
  - [Build the app and run it up](#build-the-app-and-run-it-up)
- [Exercise](#exercise)
  - [Bonus 1](#bonus-1)
  - [Bonus 2](#bonus-2)

# Description

Frontend technical test carried out for Leboncoin.
Original Github repository : [leboncoin/frontend-technical-test](https://github.com/leboncoin/frontend-technical-test)

# Installation

1. Clone this repository by running `git clone https://github.com/Souallet/frontend-technical-test.git`
2. `cd frontend-technical-test`
3. Install dependencies `npm install`

## Run API server

Run API Server `npm run start-server`

## Run app as dev

1. Create `.env.development.local`
2. Add to it the `NEXT_PUBLIC_API_BASEURL=http://localhost:3005`
3. Run Next dev server `npm run dev`
4. Access [http://localhost:3000](http://localhost:3000)

## Build the app and run it up

1. Create `.env..local`
2. Add to it the `NEXT_PUBLIC_API_BASEURL=` and specify you API base URL
3. Run Next dev server `npm run start`

# Exercise

- :white_check_mark: Display a list of all the conversations
- :white_check_mark: Allow the user to select a conversation
  - :white_check_mark: Inside the conversation, there is a list of all the messages between these two users.
  - :white_check_mark: As a user, you can type and send new messages in this conversation

## Bonus 1

:small_orange_diamond: We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2

:x: Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.
