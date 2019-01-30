version: "3.3"

services:

# NodeJS App's Container
 app:
  build:
   context: ./
  ports:
    - 8080:8002
  volumes:
    - ./mongoExperiment:/code
  tty: true
  privileged: true
  hostname: node_app

# MongoDB container
 mongodb:
  build:
   context: ./MongoDB
  hostname: mongodb 
  tty: true
  privileged: true

  

   
