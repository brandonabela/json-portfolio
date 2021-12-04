# JSON Portfolio Website

A ReactJs and Bootstrap 5 framework website that dynamically creates a multi-page portfolio site from several JSON files with a central customisation functionality and deployment pipeline.

<a href="http://brandonabela.github.io/json-portfolio" target="_blank">DEMO</a>

## Features

- Responsive ReactJS website by reading information from multiple JSON files
- Automatically deploy website on each commit that has occurred to the project
- Adapts to different screen sizes, from phones to desktops
- Ability to showcase projects that were defined in JSON files
- Ability to define slide-shows, links and videos for projects
- All sections are defined through the use of a JSON file
- Support personal biography, social media links, education, work, projects and contact sections

## Instructions

### Preview Website:

1. In terminal input ```npm install``` to install the website packages
2. In terminal input ```npm start``` to launch the website in a local environment
3. In terminal press ```CTRL + C``` to terminate the website process

### Deploy Website:

1. Fork Repository with ```github-username.github.io``` as your repository name
2. In ```package.json``` change ```"name": "json-portfolio"``` to ```"name": "github-username"```
3. In ```package-lock.json``` change ```"name": "json-portfolio"``` to ```"name": "github-username"``` for both the ```root``` and ```packages```
4. In ```package-lock.json``` change ```"homepage": "."``` to ```"homepage": "https://github-username.github.io/"```
5. In ```public/index.html``` change ```<title> JSON Portfolio </title>``` to ```<title> Your Name | Portfolio </title>```
6. In ```public/index.html``` change ```<meta name="description" content="..." />``` to ```<meta name="description" content="Website Description" />```
7. Modify the JSON files to reflect your details and upload any necessary images
8. Commit the files on the forked repository
9. In Github access the ```repository settings > pages > sources``` and select ```gh-pages``` with ```/ (root)``` folder and then click ```save```

## Template Instructions

This section covers every JSON file that is used by the website to generate the portfolio website. The number of entries in ```educations.json```, ```experiences.json```, ```skills.json``` and ```projects.json``` can be adjusted as long as the same structure is kept.

### Social Links - ```socials.json```

The ```socials.json``` file consists of a predefined list of social media links where the icon is retrieved from <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a>. The icon is only shown when the URL link is populated, otherwise it is not shown.

| **Property** |  **Description**  |
| :----------: | :---------------: |
|     name     | Social media name |
|     link     | Social media link |

### Profile - ```profile.json```

The ```profile.json``` file is used to populate the about page and certain details are also shared to other pages. The biography description is used to provide an introduction to the portfolio with the support of links through the use of square brackets, which supports the **education**, **work**, **skills**, **portfolio** and **contact**. A profile picture is required and be in the following location **```public/images/ProfilePicture.png```**.

The contact page makes use of Formspree ID, which requires a <a href="https://formspree.io/login" target="_blank">Formspree</a> account and creating a new form (**New Form**). The form id is found in the URL which has the following structure **```https://formspree.io/forms/########/```** where the **#** values represent the form ID.

| **Property** |    **Description**     | **Required** |
| :----------: | :--------------------: | :----------: |
|     name     |       Full name        |      ✔️       |
|    email     |     Email Address      |      ✔️       |
|   heading    | Biography Description  |      ✔️       |
|    skills    |   Skills Description   |      ✔️       |
|   projects   |  Projects Description  |      ✔️       |
|  experience  | Experience Description |      ✔️       |
|   notFound   | Not Found Description  |      ✔️       |
| formspreeId  |      Formspree ID      |      ✔️       |

### Education - ```educations.json```

| **Property** |   **Description**    | **Required** |
| :----------: | :------------------: | :----------: |
|    start     |      Start Date      |      ✔️       |
|     end      |       End Date       |      ✔️       |
|    course    |   Attended Course    |      ✔️       |
|  institute   |   Institution Name   |      ✔️       |
|   location   | Institution Location |      ✔️       |
| description  |  Course Description  |      ❌       |
|   bullets    |  Course Highlights   |      ❌       |
| technologies |  Technologies Used   |      ❌       |

### Experience - ```experiences.json```

| **Property** |    **Description**     | **Required** |
| :----------: | :--------------------: | :----------: |
|    start     |       Start Date       |      ✔️       |
|     end      |        End Date        |      ✔️       |
|     role     |       Role Title       |      ✔️       |
|   company    |    Employed Company    |      ✔️       |
|   location   |  Institution Location  |      ✔️       |
| description  | Employment Description |      ❌       |
|   bullets    | Employment Highlights  |      ❌       |
| technologies |   Technologies Used    |      ❌       |

### Skills - ```skills.json```

| **Property** |  **Description**   | **Required** |
| :----------: | :----------------: | :----------: |
|    title     |  Skill Group Name  |      ✔️       |
|     icon     |  Skill Group Icon  |      ✔️       |
|   overview   | Show in About Page |      ✔️       |
| technologies |    Technologies    |      ✔️       |

### Projects - ```projects.json```

Any project images should be stored in **```public/images/projects/```** where the filename convention of these images is ```imageHeading##.png```. The ```imageHeading``` must be unique for every project and ```##``` represent the index starting from 1 padded with zeros such as; **01**, **02**, **03**, **etc**.

| **Property** |      **Description**      | **Required** |
| :----------: | :-----------------------: | :----------: |
|    start     |        Start Date         |      ✔️       |
|     end      |         End Date          |      ✔️       |
|     name     |       Project Name        |      ✔️       |
| description  |    Project Description    |      ❌       |
| technologies |       Technologies        |      ✔️       |
|   buttons    |       Project Links       |      ❌       |
|    videos    |      You Tube Links       |      ❌       |
|    images    |     Amount of Images      |      ✔️       |
| imageHeading | Project Image Suffix Name |      ✔️       |
|   overview   |    Show in About Page     |      ✔️       |

## Customisation

The website customisation is primarily driven by two primary stylesheets;

* ```styles/Scheme.scss``` is used for changing colours and padding of content and section
* ```styles/Typography.scss``` is used for setting font sizes of text headings and paragraphs

# Contributions

Please report any issues or submit pull requests with code changes. I love it when my work helps someone.  So, if you're utilizing my project or have been inspired to develop something of your own, please let me know! My social media are featured in my <a href="https://brandonabela.github.io/" target="_blank">portfolio</a>.
