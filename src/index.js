import { $, add } from '@/util';

const $target = $('#root');

const template = `
    <h1> 1 + 2 = ${add(1, 2)}</h1>
`;

// 폴리필 트랜스파일링 테스트 용
const foo = async () => {
	const res = await Promise.resolve(1);
	console.log('res');
};

foo();

$target.innerHTML = template;
