class RecipeApp{
    static apiBase = 'https://api.spoonacular.com/recipes';
    static apiKey = process.env.API_KEY;

    constructor(){
        this.ingredients = [];
        this.init();
    }

    init(){
        this.container = document.getElementById('dv4');
        this.setupEventListeners();
        this.createLoadingSpinner();
    }

    createLoadingSpinner(){
        this.loadingSpinner = document.createElement('div');
        this.loadingSpinner.className = "Loading-spinner";
        this.loadingSpinner.style.display = "none";
        document.body.appendChild(this.loadingSpinner);
    }

    setupEventListeners(){
        document.addEventListener('click', async (event) => {
            if(event.target.closest('.recipe-link')){
                const recipeId = event.target.closest('.recipe-link').dataset.id;
                await this.displayRecipeDetails(recipeId);
            }
        });

        document.getElementById('input1').addEventListener('keypress', (e) => {
            if(e.key === 'Enter') this.addIngredient();
        });

    }

    addIngredient(){
        const input = document.getElementById('input1');
        const ingredient = input.value.trim();
        
        if (ingredient){
            this.ingredients.push(ingredient);
            input.value = '';
            this.displayIngredients();  
        }
    }

    removeIngredient(index){
        this.ingredients.splice(index, 1);
        this.displayIngredients();
    }

    displayIngredients(){
        
    }

    async searchRecipes(){
        
    }







}