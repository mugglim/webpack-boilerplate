const $ = (query, base = document) => base.querySelector(query);
const $$ = (query, base = document) => base.querySelectorAll(query);
const add = (x, y) => x + y;

export { $, $$, add };
