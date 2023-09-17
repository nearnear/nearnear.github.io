const searchInput = document.querySelector("#search-form input");

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = searchInput.value;
        if (searchTerm.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        }
    }
});
