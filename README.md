## Synopsis

This is a NodeJS Express app that I use to control my home and my cabin, and to get relevant informaton for my home.
It integrates with the a Squeezebox server, Telldus Live API, Sanntid (public transport in Oslo, Norway) and Yr (the norwegian weather service).

## Code Example

To start the application you will need a Telldus Live account and the api keys ( https://api.telldus.com/ ). 
Create a file called .env in the src folder. Add these variables:
```
PUBLIC_KEY    = 'MY_PUBLIC_KEY'
PRIVATE_KEY   = 'MY_PRIVATE_KEY'
TOKEN         = 'MY_TOKEN'
TOKEN_SECRET  = 'MY_SECRET_TOKEN'
```

Install dotenv
```
npm install dotenv --save
```

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

In the src folder, run npm stat

## License

MIT
