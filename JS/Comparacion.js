const modelos = {
    'iphone 12': '../Paginas/PaginasiPhone/iPhone12/iPhone12vista.html',
    'iphone 12 plus': '../Paginas/PaginasiPhone/iPhone12/iPhone12plusvista.html',
    'iphone 12 pro': '../Paginas/PaginasiPhone/iPhone12/iPhone12provista.html',
    'iphone 12 por max': '../Paginas/PaginasiPhone/iPhone12/iPhone12promaxvista.html',

    'iphone 13': '../Paginas/PaginasiPhone/iPhone13/iPhone13vista.html',
    'iphone 13 plus': '../Paginas/PaginasiPhone/iPhone13/iPhone13plusvista.html',
    'iphone 13 pro': '../Paginas/PaginasiPhone/iPhone13/iPhone13provista.html',
    'iphone 13 por max': '../Paginas/PaginasiPhone/iPhone13/iPhone13promaxvista.html',

    'iphone 14': '../Paginas/PaginasiPhone/iPhone14/iPhone14vista.html',
    'iphone 14 plus': '../Paginas/PaginasiPhone/iPhone14/iPhone14plusvista.html',
    'iphone 14 pro': '../Paginas/PaginasiPhone/iPhone14/iPhone14provista.html',
    'iphone 14 por max': '../Paginas/PaginasiPhone/iPhone14/iPhone14promaxvista.html',

    'iphone 15': '../Paginas/PaginasiPhone/iPhone15/iPhone15vista.html',
    'iphone 15 plus': '../Paginas/PaginasiPhone/iPhone15/iPhone15plusvista.html',
    'iphone 15 pro': '../Paginas/PaginasiPhone/iPhone15/iPhone15provista.html',
    'iphone 15 por max': '../Paginas/PaginasiPhone/iPhone15/iPhone15promaxvista.html',

    'iphone 16': '../Paginas/PaginasiPhone/iPhone16/iPhone16vista.html',
    'iphone 16 plus': '../Paginas/PaginasiPhone/iPhone16/iPhone16plusvista.html',
    'iphone 16 pro': '../Paginas/PaginasiPhone/iPhone16/iPhone16provista.html',
    'iphone 16 por max': '../Paginas/PaginasiPhone/iPhone16/iPhone16promaxvista.html',
};


function mostrarSugerencias(inputId, sugerenciasId) {
    const input = document.getElementById(inputId);
    const sugerenciasDiv = document.getElementById(sugerenciasId);
    const valor = input.value.toLowerCase();

    sugerenciasDiv.innerHTML = '';

    if (valor) {
        const coincidencias = Object.keys(modelos).filter(modelo => modelo.startsWith(valor));

        if (coincidencias.length > 0) {
            sugerenciasDiv.style.display = 'block';
            coincidencias.forEach(coincidencia => {
                const div = document.createElement('div');
                div.classList.add('sugerencia');
                div.textContent = coincidencia;
                div.onclick = () => {
                    input.value = coincidencia;
                    sugerenciasDiv.innerHTML = ''; 
                    sugerenciasDiv.style.display = 'none';
                };
                sugerenciasDiv.appendChild(div);
            });
        } else {
            sugerenciasDiv.style.display = 'none';
        }
    } else {
        sugerenciasDiv.style.display = 'none';
    }
}

function cargarModelo(inputId, cajaId) {
    const modelo = document.getElementById(inputId).value.toLowerCase();
    const iframe = document.getElementById(cajaId === 'caja1' ? 'iframe1' : 'iframe2');

    if (modelos[modelo]) {
        iframe.src = modelos[modelo];
    } else {
        iframe.src = '';
        document.getElementById(cajaId).innerHTML = '<p>Modelo no encontrado.</p>';
    }
}
const overlays = document.querySelectorAll('.overlay');
const tooltip = document.getElementById('tooltip');
const modelImg = document.getElementById('model-img');
const modelDesc = document.getElementById('model-desc');
const modelInfo = document.getElementById('model-info');

overlays.forEach(overlay => {
    overlay.addEventListener('mouseenter', (e) => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.textContent = e.target.getAttribute('data-info');
        
        const imgSrc = e.target.getAttribute('data-img');
        const desc = e.target.getAttribute('data-desc');
        modelImg.src = imgSrc;
        modelDesc.textContent = desc;
        
        modelInfo.style.visibility = 'visible';
        modelInfo.style.opacity = '1';
    });

    overlay.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    overlay.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        modelInfo.style.visibility = 'hidden';
        modelInfo.style.opacity = '0';
    });
});