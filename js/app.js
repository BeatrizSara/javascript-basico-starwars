// Tem um array de objetos com 8 itens.

const LIST = [
    {
        id: 1,
        name: 'Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },

    {
        id: 3,
        name: 'Princess Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        name: 'Han Solo',
        avatar: 'images/hansolo.png'
    },

    {
        id: 5,
        name: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    
    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        name: 'C3PO',
        avatar: 'images/c3po.png'
    }
];

const App = new Vue({
    el: '#app', // ele vai entender que essa div é a principal da aplicação.
    data: {
        title: 'Star Wars Lego',
        userName: 'Beatriz',
        characters: LIST,
        searchName: ''
    },

    methods: {
        like(userName){
            alert(`O personagem ${userName} recebeu um like!`);
        }
        
    } // Essa função vai receber o nome do personagem
}) 

//exemplo de uso do Vue.js