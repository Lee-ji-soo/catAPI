const API_KEY = "bd9aba9c-ee14-4106-800f-fd5b82d9c6eb";
const API_ENDPOINT = `https://api.thecatapi.com/v1/images`;

const api = {
    fetchCats: async () => {
        const res = await
            fetch(`${API_ENDPOINT}/search?limit=12&page=10&order=Desc`);
        return await res.json()
    },
    fetchSelect: async (data) => {
        const res = await
            fetch(`${API_ENDPOINT}/search?category_ids=${data.category.id}&limit=12&page=10`, {
                method: 'GET',
                headers: {
                    "x-api-key": API_KEY
                }
            });
        return await res.json()
    }
};

export { api };

