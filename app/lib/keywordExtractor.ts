export const extractKeywords = (
  text: string
) => {
  const keywords = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "REST APIs",
    "Git",
    "Next.js",
    "Python",
    "SQL",
    "Docker",
    "AWS",
    "Firebase",
    "Redux",
  ];

  const foundKeywords =
    keywords.filter((keyword) =>
      text
        .toLowerCase()
        .includes(
          keyword.toLowerCase()
        )
    );

  const missingKeywords =
    keywords.filter(
      (keyword) =>
        !text
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
    );

  const density = Math.min(
    100,
    Math.round(
      (foundKeywords.length /
        keywords.length) *
        100
    )
  );

  return {
    foundKeywords,
    missingKeywords,
    density,
  };
};