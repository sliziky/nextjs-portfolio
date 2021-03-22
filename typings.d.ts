declare module '*.md' {
  const attributes: { [key: string]: any | any[] | {}[] };
  const react: React.FC< { [key: string]: any | any[] | {}[] }>;
  export { attributes, react }
}