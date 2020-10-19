const API_KEY = "bd9aba9c-ee14-4106-800f-fd5b82d9c6eb";
const API_ENDPOINT = `https://api.thecatapi.com/v1`;

const api = {
    fetchCats: async () => {
        const res = await
            fetch(`${API_ENDPOINT}/images/search?limit=12&page=10&currentPage=1&order=Desc`);
        console.log('hi');
        return await res.json()
    },

    fetchMoreCat: async (data, state) => {
        const newState = () => {
            if (state.onCategory === true) {
                return `category_ids=${data.category.id}`
            } else if (state.onBreed === true) {
                return `breed_id=${data.breed.id}`
            } else if (state.onNone === true) {
                return ''
            }
        }
        const res = await
            fetch(`${API_ENDPOINT}/images/search?${newState()}&limit=12&page=${data.page}&currentPage=${data.page}&order=Desc`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            });
        return await res.json();
    },

    fetchInitialBreeds: async () => {
        const res = await
            fetch(`${API_ENDPOINT}/breeds/`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            });
        return await res.json();
    },

    fetchInitialCategories: async () => {
        const res = await
            fetch(`${API_ENDPOINT}/categories/`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            })
        return await res.json();
    },

    fetchCategory: async (category) => {
        const res = await
            fetch(`${API_ENDPOINT}/images/search?category_ids=${category.id}&limit=12&page=10`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            });
        return await res.json();
    },

    fetchBreed: async (breed) => {
        const res = await
            fetch(`${API_ENDPOINT}/images/search?breed_id=${breed.id}&limit=12&page=10`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            });
        return await res.json();
    }

};

export { api };

