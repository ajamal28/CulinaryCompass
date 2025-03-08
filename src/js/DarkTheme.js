class DarkTheme {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.storedTheme = localStorage.getItem('theme') || 'light';

        document.documentElement.setAttribute('data-bs-theme', this.storedTheme);
        this.updateThemeIcon(this.storedTheme);

        this.themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    updateThemeIcon(theme) {
        this.themeToggle.innerHTML = theme === 'light' 
            ? '<i class="bi bi-moon-stars"></i>'
            : '<i class="bi bi-sun-fill"></i>';
    }
}

export default DarkTheme;