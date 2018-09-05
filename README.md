# IoT - Milestone 1: Getting Started
## Desciption
This is the first Milestone assigment in the course "E18 - Building the Internet of Things with P2P and Cloud Computing"

## How to run the code
An automatic build pipeline has been setup, which builds the image on a raspberry Pi and push it to Docker Hub.
The image of this repo is pushed to: https://hub.docker.com/r/raniot/gettingstarted/

#### Requirements:
- A raspberry pi with docker installed
- The raspberry pi should be wired as shown below.

**Obs: There is a change to the wiring from the image!!!**

The wiring is setup using the text in the image, so the components are getting the correct voltage.

![alt text](https://github.com/Banders2/IoT-m1/blob/master/img/RaspberryGPIOSetup.png "Raspberry GPIO Setup")

#### To run the image run: 
- docker run -p 3000:3000 raniot/gettingstarted:22
- Access http://localhost:3000

## Milestone Description
### Milestone 1: Getting Started
The purpose of this milestone is to get started with the Raspberry Pi, as well as your Docker and Node.js skills, if you are a little rusty.

You should wire your components as shown on one of the last slides from the Friday lecture.

Write a Node.js server that through a Web page reports on the state of the sensors on your RPi.

Your system should ideally consist of a single Docker image that can be started on a (sensor connected) RPi, printing the URL that can visited to inspect the state of the sensors.

You should deliver either a zip-file, or, better, a file consisting of the necessary git command to clone your repository.

There should be a README.md file in the root with instructions.

Deadline: 23:59 9/Sept/2018