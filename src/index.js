import './style.css';

const citaty = [
    "<strong>Debugging</strong> /de·bugh·ing/ <em>(verb)</em><br>The Classic Mystery Game where you are the detective, the victim, and the murderer.",
    "A user interface is like a joke. If you have to explain it, it's not that good.",
    "To replace programmers with robots, clients will have to accurately describe what they want. We're safe.",
    "I have a joke on programming but it only works on my computer.",
    "99 little bugs in the code, 99 bugs in the code. Take one down, patch it around.<br>127 little bugs in the code.",
    "When I wrote this code, only God & I understood what it did.<br>Now Only God knows.",
    "<strong>Programmer</strong> <em>(noun)<em><br>A machine that turns coffee into code.",
    "Real programmers count from 0.",
]

const randomIndex = Math.floor(Math.random() * citaty.length)
document.querySelector("blockquote").innerHTML = citaty[randomIndex]