import React from "react";

function Article ({ title, date, preview, minutes }) {
    console.log("Article received props:", { title, date, preview });

    function displayReadingTime (minutes) {
        if (minutes < 30){
            const coffeeEmoji = Math.ceil(minutes/5);
            return "☕️".repeat(coffeeEmoji) + `${minutes} min read`;
        } else {
            const bentoEmoji = Math.ceil(minutes/10);
            return "🍱".repeat(bentoEmoji) + `${minutes} min read`;
        }
    }

    return (
        <article>
            <h3>{title || "Untitled"}</h3>
            <small>{date || "January 1, 1970"}</small>
            <p>{preview || "No preview available"}</p>
            <p>{displayReadingTime(minutes)}</p>
        </article>
    );
}
export default Article;








