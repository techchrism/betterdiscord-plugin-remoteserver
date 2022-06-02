# RemoteServer BetterDiscord Plugin

A BetterDiscord plugin to run remotely-provided javascript code in the Discord process.
Starts a web server with a random password to listen for incoming requests.
Designed for use in scripting without writing a dedicated plugin.

## Installation

Download the [latest RemoteServer.plugin.js release](../../releases/latest/download/RemoteServer.plugin.js) and put it in your plugins directory.

## Dev Setup

 - Clone repository
 - Run `npm install`
 - Build with `npm run build`
 - Hardlink build plugin on Windows with `npm run link-windows`
