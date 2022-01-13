const $ = (query: string, base: HTMLDocument = document) => base.querySelector(query);
const add = (x: number, y: number) => x + y;

export { $, add };
