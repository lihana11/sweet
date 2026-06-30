const ui = document.getElementById('ui');
const totalLayers = 100; 

for (let i = 1; i <= totalLayers; i++) {
    const layer = document.createElement('div');
    layer.className = 'love_horizontal';
    layer.style.setProperty('--i', i);
    
    const t = (i / totalLayers) * Math.PI * 2;
    
    const x = 16 * Math.pow(Math.sin(t), 3) * 13;
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 13;
    
    layer.style.left = `calc(50% + ${x}px)`;
    layer.style.top = `calc(50% + ${y}px)`;
    
    // CHANGED: The 3D heart will now be made entirely out of this phrase!
    layer.innerHTML = `<span class="love_word">You're so sweet</span>`;
    ui.appendChild(layer);
}