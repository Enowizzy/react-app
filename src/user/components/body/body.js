const Body = (contact$) => {
    return (
        <div class="col-md-8">
            <h2>1. External Stylesheet</h2>
            <p>You can create a new CSS file in your project directory and add your CSS inside it. You can then import it in your component, class or React JS page.
                The following code is used to import an external CSS stylesheet.</p>

            <h2>2. Inline CSS</h2>
            <p>Probably the most common and quickest out of all 3 is inline CSS. However it has many disadvantages and it is generally discouraged to use unless it is a very small application.
                Basically, we create an object that contains different references which are then called using the style{ } attribute.</p>

            <h2>3. Styled Components</h2>

            <p>Probably the most powerful and useful in my opinion is Styled Components. Styled Components lets you write actual CSS in your JavaScript. The main advantage is that you can add conditional code and use variables and functions within the CSS!.

                You can install Styled Components using the following command:
                npm install --save styled-components
                Next, you need to import it in you component. Then you can create a new variable that will contain the CSS. The same variable name with open and close brackets will render or create an HTML element with the previously added styles on it.</p>
        </div>
    );
}

export default Body;