export default class Lanches {
    constructor() {
        this.lanches = [
            {
                id: 1,
                title: 'X-burguer gamer',
                photo: 'lanche1.jpeg',
                description: 'Pão c/gergilim, 2 hambúrgueres de carne (fraldinha130g) Picles, tomate, Bacon, mostarda c/mel, creme cheese, molho barbecue, queijo cheddar, cebola caramelizada e molho de pimenta.',
                price: 'R$ 45,00'
            },
            {   
                id: 2,
                title: 'Street Fighter Chicken',
                photo: 'lanche2.jpeg',
                description: 'Pão tradicional, peito de frango 150g empanado, mostarda c/mel, queijo prato, creme cheese',
                price: 'R$ 25,00'
            },
            {
                id: 3,
                title: 'X-Ronkey Kong',
                photo: 'lanche3.jpeg',
                description: 'Pão brioche, 01 hambúrguer de carne de 50g, queijo mussarela e maionese',
                price: 'R$ 11,90'
            },
            {
                id: 4,
                title: 'X Bacon',
                photo: 'lanche4.jpeg',
                description: 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese',
                price: 'R$ 100,00'
            },
            {
                id: 5,
                title: 'X Tudo',
                photo: 'lanche5.jpeg',
                description: 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese',
                price: 'R$ 100,00'
            }
        ];
    }
    get lista() {
        return this.lanches;
    }
}