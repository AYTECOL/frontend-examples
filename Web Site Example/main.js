document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    // URL de la API (puedes reemplazar esta URL con la de tu API)
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    // Función para crear una card
    const createCard = (post) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Suponemos que cada post tiene un id, title y body
        card.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        
        return card;
    };

    // Función para obtener datos de la API y renderizar las cards
    const fetchData = async () => {
        try {
            const response = await fetch(apiURL, {
                method: "GET",
            });
            const data = await response.json();

            data.forEach(post => {
                const card = createCard(post);
                grid.appendChild(card);
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    // Llamar a la función para obtener los datos y renderizar las cards
    fetchData();
});
