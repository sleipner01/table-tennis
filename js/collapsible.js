// Script to animate collapsibles dropdown

document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        const collapsibleContent = button.nextElementSibling;

        button.classList.toggle('collapsible-active');

        if(button.classList.contains('collapsible-active')) {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
        }
        else {
            collapsibleContent.style.maxHeight = 0;
        }
    })
});