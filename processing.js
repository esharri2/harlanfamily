const els = document.querySelectorAll(
  "body > table tr > td:nth-of-type(2) > *"
);

const stories = [];
let story = null;
let text = null;

els.forEach((el) => {
  console.log(el);
  if (el.tagName === "HR") {
    if (story) {
      story.text = text;
      stories.push(story);
    }
    story = {};
    text = "";
  }

  if (!story) {
    return;
  }

  if (!story.title) {
    story.title = el.innerText;
  } else {
    text += `<p>${el.innerText}</p>`;
  }
});

stories;
