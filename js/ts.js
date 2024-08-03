function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.classList.toggle('hidden');
}

function loadContent(subcategory) {
    const content = {
        'subcat1': '<h2>Subcategoria 1</h2><p>Conteúdo da Subcategoria 1.</p>',
        'subcat2': '<h2>Subcategoria 2</h2><p>Conteúdo da Subcategoria 2.</p>',
        'subcat3': '<h2>Subcategoria 3</h2><p>Conteúdo da Subcategoria 3.</p>',
        'subcat4': '<h2>Subcategoria 4</h2><p>Conteúdo da Subcategoria 4.</p>',
        // Adicione mais conteúdos de subcategorias aqui
    };
    
    document.getElementById('content').innerHTML = content[subcategory] || '<p>Conteúdo não encontrado.</p>';
}

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
}
