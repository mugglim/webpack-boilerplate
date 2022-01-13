import { $, add } from '@/util';

import miniSizeNewtuxtImage from '@/assets/newtux-4kb.png';
import largeSizenewtuxtImage from '@/assets/newtux-21kb.svg';

import '@/styles/index.scss';

const $target = $('#root') as HTMLElement;

const template: string = `
	<h1>Hello webpack-boilerplate</h1>
	<h2> 1 + 2 = ${add(1, 2)}</h2>

	<h3>4kb newtuxt(url-loader)</h3>
	<img src="${miniSizeNewtuxtImage}" width="120px" height="120px">

	<h3>21kb newtuxt(file-loader)</h3>
	<img src="${largeSizenewtuxtImage}" width="300opx" height="300px">

	<h3>4kb newtuxt by css background</h3>
	<div class="bg--newtuxt">1</div>
`;

// 폴리필 트랜스파일링 테스트 용
const foo = async () => {
	const res = await Promise.resolve(1);
	console.log('res');
};

foo();

$target.innerHTML = template;
