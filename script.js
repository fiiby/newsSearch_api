

const blogContainer = document.getElementById('blog-container');

async function fetchRandomNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }catch (error) {
        console.error('Error in fetching news', error);
        return [];
    }
}
function displayBlogs(articles){

}
async () => {
    try {
        const articles = awite fetchRandomNews();
       displayBlogs(articles);
    }catch (error) {
        console.error('Error in fetching news', error);
    }
};
