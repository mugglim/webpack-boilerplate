import { $, add } from '@/util';
import '@/styles/index.scss';

const $target = $('#root');

const template = `
	<h1>Hello webpack-boilerplate</h1>
	<h2> 1 + 2 = ${add(1, 2)}</h2>
	<h3>mugglim</h3>
`;

// 폴리필 트랜스파일링 테스트 용
const foo = async () => {
	const res = await Promise.resolve(1);
	console.log('res');
};

foo();

$target.innerHTML = template;
