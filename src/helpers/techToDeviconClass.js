const techToDeviconClassMap = {
    "python": "",
    "javascript": "",
    "github": "",
    "linkedin": "",
    "react": "",
    "django": "",
    "flask": "",
    "mongodb": "",
    "express": "",
    "node": "",
    "docker": "",
    "c++": "",
    "c": "",
    "bluepill stm32": "",
    "arduino": "",
    "postgresql": "",
    "firebase": "",
    "html": "",
    "git": "",
    "ros": "",
    "php": "",
    "zend": "",
    "jquery": "",
    "mysql": "",
    "google cloud platform": ""
};

/**
 * @param tech case insensitive
 * @returns corresponding devicon class for tech. See https://devicon.dev/
 */
export function techToDeviconClass(tech) {
    const techLower = tech.toLowerCase();

    if (techLower in techToDeviconClassMap) {
        return techToDeviconClassMap[techLower];
    }

    return "";
}