/*
    - filter
    - find
    - findIndex
    - reduce
    - some
    - every
*/

const alunos = [
    {
        nome: 'alan',
        idade: 32,
        nota: 9
    },
    {
        nome: 'melanie',
        idade: 8,
        nota: 10
    },
    {
        nome: 'carla',
        idade: 33,
        nota: 8
    },
    {
        nome: 'davi',
        idade: 10,
        nota: 8
    },
];

const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18);
console.table(alunosFiltrados);
const alunoAlan = alunos.find(aluno => aluno.nome === 'alan');
console.log(alunoAlan);
const alunoIndex = alunos.findIndex((aluno) => aluno.nome === 'carla');
console.log('index carla = ',alunoIndex);


const somaIdades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
},0);
console.log('Soma as Idades: ',somaIdades);

const acimadeNove = alunos.some((alunos) => alunos.idade < 10)
const menorQueNoventa = alunos.every((alunos) => alunos.idade < 90)

console.log('acima de nove: ',acimadeNove);
console.log('Menor que noventa: ',menorQueNoventa);
