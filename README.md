# Personal Website

## About

I was responsible of:

- design and layout of webpage
- meritorical content (including e.g. photo postproduction)
- programming content

 *Jazz Questionnaire* is concentrated on React's main concepts like **Hooks, Forms, Components(and comunication between them), Props, JSX and others.** My page is bilingual - I used i18next library to manage between Polish and English. I took care about SEO - Google Chrome Lighthouse show **SEO of this webpage on 100%.**

Technologies I used in project:
- HTML
- CSS
- JavaScript
- React
- RWD
- BEM methodology

## Requirements

To run this webpage I reccomand using:
- VS Code

## How to run project
### Option 1
#### Install node_modules
In VS Code terminal install project dependancies by running: 
```bash
npm install
```

#### Run React
- write in terminal:
```bash
npm start
```
Local host will open in your browser.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Option 2
#### Run Docker

To run the application, use Docker. Follow the steps below to pull the image and run the container:

##### Step 1: Pull the Docker Image
```bash
docker pull piskydev/personal_website
```
##### Step 2: Run the Container
```bash
docker run -p 3000:3000 piskydev/personal_website
```
