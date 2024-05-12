export const getPost = async (postId) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const path = '/v1/post/' + postId ;

    console.log(`getPost ${API_URL}${path}`)
    try {
        const response = await fetch(`${API_URL}${path}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            credentials: 'include',
        });
        if (!response.ok) throw new Error('bad server condition');
        let message = response.json();
        console.log(message);
        return message;
    } catch (e) {
        console.error('getUserInfo Error: ', e.message);
        return false;
    }
}
