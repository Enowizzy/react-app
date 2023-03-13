const News = () => {
    let news_lists$ = [
        { id: 1, name: "React", tech: "jsx" },
        { id: 2, name: "Angular", tech: "typescript" },
        { id: 3, name: "VueJs", tech: "html" },
    ];
    return (
        <div>
            <h2>News Page</h2>
            {
                news_lists$.map((news_list$) => (
                    <div key={news_list$.id}>
                        <h3>ID is: {news_list$.id}</h3>
                        <h3>Name is: {news_list$.name}</h3>
                        <h3>Technology: {news_list$.tech}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default News;