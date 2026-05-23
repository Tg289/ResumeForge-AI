export type SkillGraph = {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
};

const SKILL_MAP: Record<string, keyof SkillGraph> = {
  react: "frontend",
  "next.js": "frontend",
  typescript: "frontend",
  javascript: "frontend",
  tailwind: "frontend",

  node: "backend",
  express: "backend",
  api: "backend",

  mongodb: "database",
  postgres: "database",

  git: "tools",
  docker: "tools",
};

export function generateSkillGraph(text: string): SkillGraph {
  const lower = text.toLowerCase();

  const graph: SkillGraph = {
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  };

  Object.keys(SKILL_MAP).forEach((skill) => {
    if (lower.includes(skill)) {
      const category = SKILL_MAP[skill];
      graph[category].push(skill);
    }
  });

  return graph;
}

export function getSkillScore(graph: SkillGraph) {
  const total =
    graph.frontend.length +
    graph.backend.length +
    graph.database.length +
    graph.tools.length;

  return Math.min(100, total * 10);
}