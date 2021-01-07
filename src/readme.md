## Pupdate

<b style="font-size: 20px;"><i>Tracking the health of your pets!</i></b>

### Application Overview

Pupdate is a health tracking application for Pet Parents to keep track of their pet's basic information, veterinarians, vet records, and any health symptoms they may experience from day to day. Pet owners need a place to track this information, rather than just relying on their memory or loose paper records they may receive from their vet.

I built this appilication in two weeks intially, using React Hooks and CSS for styling. My goals were to incorporate full CRUD functionality, gain a deeper understanding of React Hooks, props, state, while incorporating a functional user interface without bootstrapped components.

### Features

<p>
- Users can add their veterinarian information and have it displayed for easy access
- Users can add vet records for each pet tracking visit reason, treatments, and vaccinations
- Users can track day to day symptoms their pet may experience, ie: allergies, tummy aches, anxiety
- Users can search the symptoms that have been added to see if they are occuring with regular frequency
</p>

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Running This Application

#### About authentication....

This application uses mock authentication which is purely for demonstration purposes. Therefore the login an registration code written here is completely insecure and would never be implemented in a professional application.

#### Back to the task at hand

1. Clone this repository and change to the directory in teh terminal

```sh
git clone git@github.com:jaynaleitze/Pupdate.git
cd Pupdate
```

2. Access the data

```sh
cd pupdate/src/api
json-server -p 8088 -w database.json
```

3. Launch the client

```sh
    npm install
    npm start
```

#### Demo User Credentials

<p>
Username: <i>demo</i>
<br>
Password: <i>demo</i>
</p>

#### Created by Jayna Leitze
