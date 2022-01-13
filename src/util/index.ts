type QuerySelectorType = (query: string) => HTMLElement | null;
type BinaryFnType = (x: number, y: number) => number;

const $: QuerySelectorType = query => document.querySelector(query);
const add: BinaryFnType = (x, y) => x + y;

export { $, add };
