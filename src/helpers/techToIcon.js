const techToIconClassMap = {
    "python": "devicon-python-plain",
    "javascript": "devicon-javascript-plain",
    "github": "devicon-github-original",
    "linkedin": "devicon-linkedin-plain",
    "react": "devicon-react-original",
    "django": "devicon-django-plain",
    "flask": "devicon-flask-original",
    "mongodb": "devicon-mongodb-plain",
    "express": "devicon-express-original",
    "node": "devicon-nodejs-plain",
    "docker": "devicon-docker-plain",
    "c++": "devicon-cplusplus-plain",
    "c": "devicon-c-plain",
    "arduino": "devicon-arduino-plain",
    "postgresql": "devicon-postgresql-plain",
    "firebase": "devicon-firebase-plain",
    "html": "devicon-html5-plain",
    "git": "devicon-git-plain",
    "php": "devicon-php-plain",
    "zend": "devicon-zend-plain",
    "jquery": "devicon-jquery-plain",
    "mysql": "devicon-mysql-plain",
    "google cloud platform": "devicon-googlecloud-plain",
    "java": "devicon-java-plain"
};

/**
 * @param tech case insensitive
 * @returns corresponding icon class for tech. See https://fontawesome.com/ or https://devicon.dev/
 */
export function techToIconClass(tech) {
    const techLower = tech.toLowerCase();

    if (techLower in techToIconClassMap) {
        return techToIconClassMap[techLower];
    }

    return "";
}