export const getPostList = async (queryString) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const path = '/v1/post';

    console.log(`getPostList ${API_URL}${path}`)
    try {
        let input = `${API_URL}${path}`;
        if (queryString !== undefined) input += `?search=${queryString}`;
        const response = await fetch(input, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            credentials: 'include',
        });
        console.log(response);
        if (!response.ok) throw new Error('bad server condition');
        return response.json();
    } catch (e) {
        console.error('getUserInfo Error: ', e.message);
        return false;
    }
}
