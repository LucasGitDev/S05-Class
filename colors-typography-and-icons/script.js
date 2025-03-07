document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Verifica se há uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeToggle.checked = savedTheme === 'dark';
        updateThemeIcon(savedTheme === 'dark');
    }

    themeToggle.addEventListener('change', () => {
        const isDark = themeToggle.checked;
        document.body.className = isDark ? 'dark' : 'light';
        
        // Salva a preferência
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Atualiza o ícone
        updateThemeIcon(isDark);
    });

    function updateThemeIcon(isDark) {
        themeIcon.textContent = isDark ? '🌙' : '☀️';
    }
});
