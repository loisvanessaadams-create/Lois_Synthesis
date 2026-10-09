const books = [
    {
        id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "Fiction",
        audience: "Adult",
        rating: 4.5,
        isbn: "9781501161933",
        ghanaian: false,
        description: "An aging Hollywood icon finally tells the truth about her glamorous and complicated life."
    },
    {
        id: 2,
        title: "Atmosphere",
        author: "Taylor Jenkins Reid",
        genre: "Fiction",
        audience: "Adult",
        rating: 4.3,
        isbn: "9780593653165",
        ghanaian: false,
        description: "A story of ambition, love, and women reaching for the stars in the world of space exploration."
    },
    {
        id: 3,
        title: "Wonder",
        author: "R. J. Palacio",
        genre: "Fiction",
        audience: "Children",
        rating: 4.4,
        isbn: "9780375869020",
        ghanaian: false,
        description: "A boy with a facial difference enters school for the first time and teaches those around him about kindness."
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        genre: "Fantasy",
        audience: "Children",
        rating: 4.5,
        isbn: "9780590353427",
        ghanaian: false,
        description: "Harry discovers that he is a wizard and begins a remarkable journey into a magical world."
    },
    {
        id: 5,
        title: "Funny Story",
        author: "Emily Henry",
        genre: "Romance",
        audience: "Adult",
        rating: 4.1,
        isbn: "9780593441190",
        ghanaian: false,
        description: "Two people with broken hearts become unlikely housemates and find their lives taking an unexpected turn."
    },
    {
        id: 6,
        title: "The Wedding People",
        author: "Alison Espach",
        genre: "Fiction",
        audience: "Adult",
        rating: 3.9,
        isbn: "",
        ghanaian: false,
        description: "An unexpected encounter at a seaside hotel leads to an unusual connection and a fresh perspective on life."
    },
    {
        id: 7,
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        genre: "Mystery",
        audience: "Young Adult",
        rating: 4.2,
        isbn: "9781984896391",
        ghanaian: false,
        description: "A student investigates a closed murder case for a school project and uncovers secrets nobody expected."
    },
    {
        id: 8,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Adventure",
        audience: "Young Adult",
        rating: 4.3,
        isbn: "9780439023481",
        ghanaian: false,
        description: "Katniss Everdeen volunteers for a dangerous competition where survival changes everything."
    },
    {
        id: 9,
        title: "Matilda",
        author: "Roald Dahl",
        genre: "Fantasy",
        audience: "Children",
        rating: 4.3,
        isbn: "9780142410370",
        ghanaian: false,
        description: "A clever little girl discovers her own extraordinary abilities while dealing with unfair adults."
    },
    {
        id: 10,
        title: "Charlotte's Web",
        author: "E. B. White",
        genre: "Fiction",
        audience: "Children",
        rating: 4.2,
        isbn: "9780064400558",
        ghanaian: false,
        description: "A pig named Wilbur and a thoughtful spider named Charlotte form a friendship that changes their lives."
    },
    {
        id: 11,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        genre: "Adventure",
        audience: "Children",
        rating: 4.3,
        isbn: "9780399226908",
        ghanaian: false,
        description: "Follow a hungry caterpillar as it eats its way through different foods and grows into something beautiful."
    },
    {
        id: 12,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Adventure",
        audience: "Children",
        rating: 4.1,
        isbn: "9780810993136",
        ghanaian: false,
        description: "Greg Heffley records the funny challenges and awkward moments of growing up in middle school."
    },
    {
        id: 13,
        title: "The Cat in the Hat",
        author: "Dr. Seuss",
        genre: "Adventure",
        audience: "Children",
        rating: 4.2,
        isbn: "9780394800011",
        ghanaian: false,
        description: "A rainy day becomes an unforgettable adventure when a mischievous cat arrives."
    },
    {
        id: 14,
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        genre: "Fantasy",
        audience: "Children",
        rating: 4.0,
        isbn: "9780141321073",
        ghanaian: false,
        description: "Alice follows a rabbit into a strange world filled with curious characters and surprising adventures."
    },
    {
        id: 15,
        title: "Middle School: The Worst Years of My Life",
        author: "James Patterson and Chris Tebbetts",
        genre: "Adventure",
        audience: "Children",
        rating: 4.1,
        isbn: "9780316101691",
        ghanaian: false,
        description: "Rafe enters middle school with a plan to challenge the rules and make school life more interesting."
    },
    {
        id: 16,
        title: "Changes: A Love Story",
        author: "Ama Ata Aidoo",
        genre: "Romance",
        audience: "Adult",
        rating: 4.0,
        isbn: "",
        ghanaian: true,
        description: "A celebrated Ghanaian novel exploring love, marriage, independence, and the changing expectations placed on women."
    },
    {
        id: 17,
        title: "The Marriage of Anansewa",
        author: "Efua Sutherland",
        genre: "Adventure",
        audience: "Young Adult",
        rating: 4.0,
        isbn: "",
        ghanaian: true,
        description: "A Ghanaian play that draws on Ananse storytelling to explore family, marriage, cleverness, and social expectations."
    },
    {
        id: 18,
        title: "Anowa",
        author: "Ama Ata Aidoo",
        genre: "Fiction",
        audience: "Young Adult",
        rating: 4.0,
        isbn: "",
        ghanaian: true,
        description: "A powerful Ghanaian play exploring tradition, personal choice, marriage, and the consequences of ambition."
    }
];

const $ = (selector) => document.querySelector(selector);

function getFavorites() {
    try {
        const saved = JSON.parse(localStorage.getItem("readingRoomFavorites") || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

function saveFavorites(favorites) {
    localStorage.setItem("readingRoomFavorites", JSON.stringify(favorites));
}

function coverURL(book) {
    if (!book.isbn) return "";
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
}

function createBookCard(book) {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(book.id);
    const cover = coverURL(book);

    return `
        <article class="book-card">
            <div class="cover-wrap">
                ${
                    cover
                        ? `<img class="book-cover"
                                src="${cover}"
                                alt="Cover of ${book.title}"
                                loading="lazy"
                                onerror="this.remove(); this.parentElement.insertAdjacentHTML('beforeend', '<div class=&quot;cover-fallback&quot;>📖<br>Cover unavailable</div>')">`
                        : `<div class="cover-fallback">📖<br>${book.ghanaian ? "Ghanaian Literature" : "A good story awaits"}</div>`
                }
                <button class="favorite-button"
                    data-favorite="${book.id}"
                    aria-label="${isFavorite ? "Remove from" : "Add to"} favourites"
                    title="${isFavorite ? "Remove from favourites" : "Add to favourites"}">
                    ${isFavorite ? "♥" : "♡"}
                </button>
            </div>

            <div class="book-meta">
                <span class="book-tag">${book.genre}</span>
                ${book.ghanaian ? '<span class="book-tag">Ghanaian</span>' : ""}
            </div>

            <h3>${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-rating">★ ${book.rating.toFixed(1)} <span>(sample rating)</span></p>

            <button class="details-button" data-details="${book.id}">
                View Details
            </button>
        </article>
    `;
}

function renderBooks(container, list) {
    if (!container) return;

    container.innerHTML = list.length
        ? list.map(createBookCard).join("")
        : '<p class="empty-message">No books to display just yet.</p>';
}

function renderFavorites() {
    const grid = $("#favorites-grid");
    const emptyMessage = $("#favorites-empty");

    if (!grid) return;

    const favorites = getFavorites();
    const favoriteBooks = books.filter(book => favorites.includes(book.id));

    renderBooks(grid, favoriteBooks);

    if (emptyMessage) {
        emptyMessage.classList.toggle("hidden", favoriteBooks.length > 0);
    }
}

function toggleFavorite(id) {
    const favorites = getFavorites();
    const updated = favorites.includes(id)
        ? favorites.filter(favoriteId => favoriteId !== id)
        : [...favorites, id];

    saveFavorites(updated);
    refreshPageBooks();
}

function refreshPageBooks() {
    renderBooks($("#featured-books"), books.slice(0, 4));
    renderFavorites();
    renderChildrenBooks();
    renderGhanaBooks();
    filterLibrary();
}

function filterLibrary() {
    const grid = $("#book-grid");
    if (!grid) return;

    const searchInput = $("#search-input");
    const genreFilter = $("#genre-filter");
    const sortSelect = $("#sort-select");

    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedGenre = genreFilter ? genreFilter.value : "all";
    const sortBy = sortSelect ? sortSelect.value : "title";

    let filtered = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        const matchesGenre =
            selectedGenre === "all" ||
            book.genre.toLowerCase() === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    if (sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderBooks(grid, filtered);

    const resultsCount = $("#results-count");
    if (resultsCount) {
        resultsCount.textContent =
            `${filtered.length} book${filtered.length === 1 ? "" : "s"} found`;
    }

    const noResults = $("#no-results");
    if (noResults) {
        noResults.classList.toggle("hidden", filtered.length > 0);
    }
}

function renderChildrenBooks() {
    const container = $("#children-books");
    if (!container) return;

    const childrenBooks = books.filter(book => book.audience === "Children");
    renderBooks(container, childrenBooks);
}

function renderGhanaBooks() {
    const container = $("#ghana-books");
    if (!container) return;

    const ghanaBooks = books.filter(book => book.ghanaian);
    renderBooks(container, ghanaBooks);
}

function showBookDetails(id) {
    const book = books.find(item => item.id === id);
    const modal = $("#book-modal");
    const content = $("#modal-content");

    if (!book || !modal || !content) return;

    const cover = coverURL(book);

    content.innerHTML = `
        ${
            cover
                ? `<img class="modal-cover" src="${cover}" alt="Cover of ${book.title}"
                    onerror="this.remove()">`
                : '<div class="cover-fallback">📖<br>Ghanaian Literature</div>'
        }

        <h2 class="modal-title">${book.title}</h2>
        <p class="modal-author">by ${book.author}</p>

        <div class="book-meta">
            <span class="book-tag">${book.genre}</span>
            <span class="book-tag">${book.audience}</span>
            ${book.ghanaian ? '<span class="book-tag">Ghanaian Literature</span>' : ""}
        </div>

        <p class="book-rating">★ ${book.rating.toFixed(1)} (sample rating)</p>
        <p class="modal-description">${book.description}</p>

        <button class="btn btn-primary modal-save" data-favorite="${book.id}">
            ${getFavorites().includes(book.id) ? "♥ Remove from Favourites" : "♡ Add to Favourites"}
        </button>
    `;

    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        modal.setAttribute("open", "");
    }
}

function setupDarkMode() {
    const themeButton = $("#theme-toggle");
    if (!themeButton) return;

    const savedTheme = localStorage.getItem("readingRoomTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButton();

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const theme = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

        localStorage.setItem("readingRoomTheme", theme);
        updateThemeButton();
    });

    function updateThemeButton() {
        themeButton.textContent =
            document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        themeButton.setAttribute(
            "aria-label",
            document.body.classList.contains("dark-mode")
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }
}

function setupEvents() {
    document.addEventListener("click", event => {
        const favoriteButton = event.target.closest("[data-favorite]");
        const detailsButton = event.target.closest("[data-details]");

        if (favoriteButton) {
            const id = Number(favoriteButton.dataset.favorite);
            toggleFavorite(id);

            // Keep the details modal open and refresh its favourite button.
            const modal = $("#book-modal");
            if (modal && modal.open) {
                showBookDetails(id);
            }
            return;
        }

        if (detailsButton) {
            showBookDetails(Number(detailsButton.dataset.details));
        }
    });

    const searchInput = $("#search-input");
    const genreFilter = $("#genre-filter");
    const sortSelect = $("#sort-select");

    if (searchInput) searchInput.addEventListener("input", filterLibrary);
    if (genreFilter) genreFilter.addEventListener("change", filterLibrary);
    if (sortSelect) sortSelect.addEventListener("change", filterLibrary);

    const modal = $("#book-modal");
    const closeButton = $("#close-modal");

    if (closeButton && modal) {
        closeButton.addEventListener("click", () => modal.close());
    }

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) modal.close();
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupDarkMode();
    setupEvents();
    refreshPageBooks();
});