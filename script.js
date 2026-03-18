document.addEventListener('DOMContentLoaded', () => {
    // Select all hidden divs once
    const elements = document.querySelectorAll('.div2');
    const elements2 = document.querySelectorAll('.m1i');
    const elementss = document.querySelectorAll('.div3');
    const elementss2 = document.querySelectorAll('.m2i');
    /**
     * Hides all .div2 elements and shows only the IDs provided.
     * Use this by passing any number of IDs: showSpecific('id1', 'id2', 'id3')
     */
    window.showSpecific = function(...ids) {
        // 1. Hide all elements first
        elements.forEach(el => el.style.display = 'none');
        elements2.forEach(el => el.style.display = 'none');

        // 2. Loop through the IDs provided and show them if they exist
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'block';
            }
        });
    };

    window.showSpecific2 = function(...ids) {
        // 1. Hide all elements first
        elementss.forEach(el => el.style.display = 'none');
        elementss2.forEach(el => el.style.display = 'none');

        // 2. Loop through the IDs provided and show them if they exist
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'block';
            }
        });
    };
    // --- Initial Run ---
    // This sets the default view when the page first loads
    showSpecific('lort', 'lort2');
    showSpecific2('lortb', 'lortb2');
});