export default class Lanches {
    constructor() {
        this.lanches = [
            {
                id: 1,
                title: 'X-burguer gamer',
                photo: 'lanche1',
                description: 'Pão c/gergilim, 2 hambúrgueres de carne (fraldinha130g) Picles, tomate, Bacon, mostarda c/mel, creme cheese, molho barbecue, queijo cheddar, cebola caramelizada e molho de pimenta.',
                price: 'R$ 45,00'
            },
            {   
                id: 2,
                title: 'Street Fighter Chicken',
                photo: 'lanche2',
                description: 'Pão tradicional, peito de frango 150g empanado, mostarda c/mel, queijo prato, creme cheese',
                price: 'R$ 25,00'
            },
            {
                id: 3,
                title: 'X-Donkey Kong',
                photo: 'lanche3',
                description: 'Pão brioche, 01 hambúrguer de carne de 50g, queijo mussarela e maionese',
                price: 'R$ 11,90'
            },
            {
                id: 4,
                title: 'X Pac Man',
                photo: 'lanche4',
                description: 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese',
                price: 'R$ 100,00'
            },
            {
                id: 5,
                title: 'Super Mario Burguer',
                photo: 'lanche5',
                description: 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese',
                price: 'R$ 100,00'
            }
        ];
    }
    get lista() {
        return this.lanches;
    }
}