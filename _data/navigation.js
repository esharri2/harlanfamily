const sections = {
  association: "Association",
  people: "People",
  history: "Genealogy & History",
  news: "News & Events",
};

const pages = [
  {
    key: "/about",
    title: "About",
    section: sections.association,
    description: "",
  },
  {
    key: "/bylaws",
    title: "Bylaws",
    section: sections.association,
    description: "",
  },
  {
    key: "/board",
    title: "Board",
    section: sections.association,
    description: "",
  },
  {
    key: "/donate",
    title: "Donate",
    section: sections.association,
    description: "",
  },
  {
    key: "/cousins",
    title: "Cousins",
    section: sections.people,
    description: "",
  },
  {
    key: "/who",
    title: "Who's Who",
    section: sections.people,
    description: "",
  },
  {
    key: "/ninetyplus",
    title: "Ninety Plus Club",
    section: sections.people,
    description: "",
  },
  {
    key: "/messages",
    title: "Messages",
    section: sections.people,
    description: "",
  },
  {
    key: "/history",
    title: "A Brief History",
    section: sections.history,
    description: "",
  },
  {
    key: "/genealogy",
    title: "Genealogy by Alpheus Harlan",
    section: sections.history,
    description: "",
  },
  {
    key: "/documents",
    title: "Documents",
    section: sections.history,
    description: "",
  },
  {
    key: "/data",
    title: "Genealogy Data",
    section: sections.history,
    description: "",
  },
  {
    key: "/origins",
    title: "Name Origins",
    section: sections.history,
    description: "",
  },
  {
    key: "/places",
    title: "Names Upon the Land",
    section: sections.history,
    description: "",
  },
  {
    key: "/trek",
    title: "The Great Trek",
    section: sections.history,
    description: "",
  },
  {
    key: "/irish-interlude",
    title: "Irish Interlude",
    section: sections.history,
    description: "",
  },
  {
    key: "/news",
    title: "News & Updates",
    section: sections.news,
    description: "",
  },
  {
    key: "/record",
    title: "Newsletter, <i>The Harlan Record</i>",
    section: sections.news,
    description: "",
  },
  {
    key: "/reunions",
    title: "Reunions",
    section: sections.news,
    description: "",
  },
  {
    key: "/stories",
    title: "Stories",
    section: sections.history,
    description: "",
  },
  {
    key: "/sites",
    title: "Sites",
    section: sections.history,
    description: "",
  },
  {
    key: "/tours",
    title: "Tours",
    section: sections.news,
    description: "",
  },
];

module.exports = function () {
  const navData = Object.values(sections).map((name) => {
    return {
      name,
      pages: pages.filter((page) => page.section === name),
    };
  });
  return navData;
};
