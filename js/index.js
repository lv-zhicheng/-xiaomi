window.onload = function() {
    const input = document.querySelector('#input');
    input.addEventListener('focus', function() {
        if(this.value === '小米手机') {
            this.value = '';
        }
        this.style.color = '#333';
    });
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '小米手机';
        }
        this.style.color = '#999';
    });
    const site = document.querySelector('.site-category').querySelectorAll('a');
    const divs = document.querySelector('#site-category-content1');
    site.addEventListener('mouseover', function() {
        divs.style.display = 'block';
        alert('nhao');
    })
}