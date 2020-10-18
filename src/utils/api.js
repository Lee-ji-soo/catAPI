const API_KEY = "bd9aba9c-ee14-4106-800f-fd5b82d9c6eb";

const API_ENDPOINT = `https://api.thecatapi.com/v1`;

const REQUEST_ERROR = {
    '500': { msg: '요청실패' },
    '400': { msg: '검색어를 입력하세요' }
};

const request = async url => {
    try {
        const res = await fetch(url)
        if (res.status === 200) {
            return await res.json()
        } else {
            throw REQUEST_ERROR[res.status]
        }
    } catch (err) {
        console.log(err.msg);
        return { data: null }
    }
};

const api = {
    fetchCats: () => {
        return request(`${API_ENDPOINT}/images/search?limit=12&page=10&order=Desc`)
    },
    fetchBreeds: (breed = 'Exotic Shorthair') => {
        return request(`${API_ENDPOINT}/breeds?attach_breed=${breed}}`)
    }
};

export { api };

