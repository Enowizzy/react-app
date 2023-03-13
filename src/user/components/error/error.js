const Error = () => {
    const handleClick = (name, age) => {
        console.log(name + age)
    }
    return (
        <div>
            <h1>404</h1>
            <p>page not found</p>
            <button type="button" onClick={() => handleClick('JideX', 24)}>click me</button>
        </div>
    );
}

export default Error;