import { useState } from "react";
import styles from "../ChefClaude.module.css";

function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    const submitHandler = (e) => {
        e.preventDefault();

        // Retrieve input value
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");

        if (newIngredient) {
            // Update state with new ingredient
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        }

        // Clear the input field
        e.currentTarget.reset();
    };

    const ingredientsListItem = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>;
    });

    return (
        <main>
            <form onSubmit={submitHandler} className={styles.addIngredientForm}>
                <input
                    type="text"
                    placeholder="Oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button type="submit">Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItem}
            </ul>
        </main>
    );
}

export default Main;
