import { $, add } from '@/util';

const $target = $('#root');

const template = `
    <h1> 1 + 2 = ${add(1, 2)}</h1>
`;

$target.innerHTML = template;
