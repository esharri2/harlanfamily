const sections = {
  association: "Association",
  people: "People",
  history: "History",
  news: "News and Events",
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
    key: "/documents",
    title: "Documents",
    section: sections.history,
    description: "",
  },
  {
    key: "/geneology",
    title: "Geneology Data",
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
    key: "/names",
    title: "Names Upon the Land",
    section: sections.history,
    description: "",
  },
  {
    key: "/newsletter",
    title: "Newsletter",
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
    section: sections.news,
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
