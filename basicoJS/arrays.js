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
];

for(let i=0; i<alunos.length;i++){
    console.log(alunos[i]);
};

console.log('___________________________');

alunos.push({
    nome: 'davi',
    idade: 10,
    nota: 9
});

for(let i=0; i<alunos.length;i++){
    console.log(alunos[i]);
};


