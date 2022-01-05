# Kate's Portfolio
My personal website. See it live at [https://katejh.github.io/portfolio](https://katejh.github.io/portfolio)!

This website was made with responsive design in mind.

## Built With
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [react-vertical-timeline](https://github.com/stephane-monnot/react-vertical-timeline)

## Setup

Feel free to use this project as a template (as long as credits are given)!

All you have to do is pull this repository and fill in `./public/resume.json` with your information (see the template below).

Replace `./public/resume.pdf` with your own resume.

Make sure to run `npm install` as well!

## Development

To make your own changes to the source code, run `npm start` and start coding!

## Deployment

To deploy this as your own site on GitHub pages, edit the `homepage` field in `package.json` with your own URL. I suggest using `https://your-username.github.io/your-repo-url` as just using `https://your-username.github.io/` causes strangeness due to the nature of React Router and GitHub Pages.

In your `.env` file, set the environment variable `REACT_APP_ROOT=/your-repo-url`.

Then run `npm run deploy` to see your website live! (You will have to do this every time you want to update your website)

## `resume.json` Template

```json
{
    "basic_info": {
        "name": "First Middle Last",
        "first-name": "First",
        "last-name": "Last",
        "socials": [
            {
                "type": "github",
                "url": "your (optional) github profile url here"
            },
            {
                "type": "linkedin",
                "url": "your (optional) linkedin profile url here"
            },
            {
                "type": "some other social media",
                "url": "your social media link here"
            }
        ],
        "description": "A brief description of who you are",
        "titles": ["developer", "tech enthusiast", "dog owner", "etc"],
        "email": "your email here"
    },
    "education": [
        {
            "school": "School Name",
            "degree": "your degree type e.g. Bachelor's, Master's, etc",
            "major": "your major here (optional)",
            "start_date": "start date (can be any format). It is up to you to put your educations in order",
            "end_date": "end date. Can leave blank if you are still attending this school",
            "gpa": "gpa on the 100% scale (optional)",
            "gpa_4_33_scale": "gpa on the 4.33 scale (optional)",
            "brief": "brief description of your degree. Can include awards, activities, clubs, etc (optional)"
        },
        {
            "school": "School University",
            "degree": "Bachelor's of Science",
            "major": "Computer Science",
            "start_date": "Sept 20XX",
            "end_date": "",
            "gpa": "80.3",
            "gpa_4_33_scale": "4.0",
            "brief": "Awards: Honour Roll, hackathon. Clubs: soccer, chess, competitive programming"
        }
    ],
    "skills": ["Python", "JavaScript", "Java", "C++", "etc"],
    "projects": [
        {
            "name": "Project Name",
            "brief": "brief description of your project",
            "body": "html formatted description of your project",
            "images": ["not functional yet"],
            "code_link": "link to your source code (optional)",
            "url": "link to a live demo of your project (optional)",
            "start_date": "start date of your project (can be any format, it is up to you to order your projects)",
            "end_date": "end date. Can leave blank if you are still working on this project",
            "technologies": ["tech used", "in your project"]
        },
        {
            "name": "Robot",
            "brief": "robot made for fun",
            "body": "<h1>Robot</h1><h3>subtitle</h3><p>description here</p>",
            "images": [],
            "code_link": "https://github.com/your-github/robot",
            "url": "https://robot-demo.xyz",
            "start_date": "May 2021",
            "end_date": "Aug 2021",
            "technologies": ["C++", "Arduino"]
        }
    ],
    "experience": {
        "summary": "A summary of your experience and what you're looking for",
        "jobs": [
            {
                "company": "Company Name",
                "title": "Your Job Title",
                "start_date": "start date of your job (can be any format, it is up to you to order your jobs)",
                "end_date": "end date of your job. Leave blank if this is your current job.",
                "technologies": ["tech", "used", "in", "your", "role"],
                "brief": "a brief description of what you do in this role",
                "description": "(optional) longer description of your job"
            },
            {
                "company": "Some Tech Company",
                "title": "Software Developer",
                "start_date": "Jan 20XX",
                "end_date": "Dec 20XX",
                "technologies": ["Java", "JavaScript", "React", "Git"],
                "brief": "Developed software",
                "description": "Developed software on XX team relating to XX product"
            }
        ]
    },
    "courses": [
        {
            "code": "course code here",
            "title": "name of the course",
            "brief": "brief description of the course"
        },
        {
            "code": "CPSC 221",
            "title": "Basic Algorithms and Data Structures",
            "brief": "Design and analysis of algorithms and data structures"
        }
    ]
}
```

To add more possible icons from FontAwesome, Devicon, or other custom icon classes, see `./src/helpers/techToIcon.js`.

## Special Thanks

Resources and inspiration that I used while making this project.

[Dorota1997's portfolio template](https://github.com/Dorota1997/react-frontend-dev-portfolio)

[mui-theme-creator](https://bareynol.github.io/mui-theme-creator/)

[Devicon](https://devicon.com)

[FontAwesome](https://fontawesome.com/)

## Author
[Kate Huang](https://github.com/katejh)