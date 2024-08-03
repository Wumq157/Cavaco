function loadContent(subcategory) {
    const contentFiles = {
        'subcat1': '../texto/subcat1.txt',
        'subcat2': '../texto/subcat2.txt',
        'subcat3': '../texto/subcat3.txt',
        'subcat4': '../texto/subcat4.txt',
        // Adicione mais mapeamentos de subcategorias para arquivos aqui
    };

    const contentFilePath = contentFiles[subcategory];

    if (contentFilePath) {
        fetch(contentFilePath)
            .then(response => response.text())
            .then(text => {
                document.getElementById('content').innerHTML = parseContent(text);
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                document.getElementById('content').innerHTML = '<p>Conteúdo não encontrado.</p>';
            });
    } else {
        document.getElementById('content').innerHTML = '<p>Conteúdo não encontrado.</p>';
    }
}

function parseContent(text) {
    const lines = text.split('\n');
    let htmlContent = '';

    lines.forEach(line => {
        line = line.trim();  // Remove espaços em branco do início e fim

        if (line.startsWith('#')) {
            htmlContent += `<h2>${line.substring(1).trim()}</h2>`;
        } else if (line.includes(':')) {
            const parts = line.split(':');
            const linkText = parts[0].trim();
            const url = parts[1].trim();
            if (url) {
                htmlContent += `<p><a href="${url}" target="_blank">${linkText}</a></p>`;
            } else {
                htmlContent += `<p>${line}</p>`;
            }
        } else if (line) {
            htmlContent += `<p>${line}</p>`;
        }
    });

    return htmlContent;
}

function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.classList.toggle('hidden');
}

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');

    // Atualiza o ícone do botão de tema
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = theme === 'dark' ? '🌞' : '🌜';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('hidden');
    main.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '240px'; // Ajusta o margin-left conforme a visibilidade da barra lateral

    // Atualiza o ícone do botão de alternância da barra lateral
    const sidebarButton = document.querySelector('.sidebar-toggle');
    sidebarButton.textContent = sidebar.classList.contains('hidden') ? '☰' : '✖'; // ☰ para abrir, ✖ para fechar
}
