// THE READING ROOM — BOOK COLLECTION

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
        image : "Funny Story.jpg",
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
    },
    
    {
        id: 19,
        title: "Percy Jackson and the Lightning Thief",
        author: "Rick Riordan",
        genre: "Fantasy",
        audience: "Young Adult",
        rating: 4.3,
        isbn: "0786838655",
        ghanaian: false,
        description: "Percy discovers that Greek mythology is real and begins a dangerous quest to prevent a war among the gods."
    },
    {
        id: 20,
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        genre: "Fantasy",
        audience: "Young Adult",
        rating: 4.4,
        isbn: "9780547928227",
        ghanaian: false,
        description: "Bilbo Baggins leaves his comfortable home and joins a company of dwarves on an unexpected adventure."
    },
    {
        id: 21,
        title: "The Lion, the Witch and the Wardrobe",
        author: "C. S. Lewis",
        genre: "Fantasy",
        audience: "Children",
        rating: 4.3,
        isbn: "9780064471046",
        ghanaian: false,
        description: "Four children enter the magical land of Narnia, where they face an evil witch and discover the power of courage."
    },
    {
        id: 22,
        title: "The Westing Game",
        author: "Ellen Raskin",
        genre: "Mystery",
        audience: "Young Adult",
        rating: 4.2,
        isbn: "9780142401200",
        ghanaian: false,
        description: "Sixteen heirs compete to solve a puzzling mystery and uncover the secrets behind a millionaire's unusual will."
    },
    {
        id: 23,
        title: "One of Us Is Lying",
        author: "Karen M. McManus",
        genre: "Mystery",
        audience: "Young Adult",
        rating: 4.1,
        isbn: "9781524714680",
        ghanaian: false,
        description: "Five students enter detention, but only four leave alive. The survivors become suspects in a complicated mystery."
    },
    {
        id: 24,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "Mystery",
        audience: "Adult",
        rating: 4.2,
        isbn: "9781984880987",
        ghanaian: false,
        description: "Four retirement-community friends who enjoy solving cold cases find themselves investigating a real murder."
    },
    {
        id: 25,
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Romance",
        audience: "Young Adult",
        rating: 4.2,
        isbn: "9780142424179",
        ghanaian: false,
        description: "Hazel and Augustus form a powerful connection as they navigate love, illness, friendship, and the meaning of life."
    },
    {
        id: 26,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        audience: "Adult",
        rating: 4.3,
        isbn: "9780141439518",
        ghanaian: false,
        description: "Elizabeth Bennet and Mr. Darcy challenge their first impressions while navigating love, family, and social expectations."
    },
    {
        id: 27,
        title: "The Hate U Give",
        author: "Angie Thomas",
        genre: "Contemporary",
        audience: "Young Adult",
        rating: 4.3,
        isbn: "9780062498533",
        ghanaian: false,
        description: "A teenager finds her voice after witnessing the shooting of her childhood friend and faces difficult choices about speaking out."
    },
    {
        id: 28,
        title: "Akata Witch",
        author: "Nnedi Okorafor",
        genre: "Fantasy",
        audience: "Young Adult",
        rating: 4.2,
        isbn: "9780142420911",
        ghanaian: false,
        description: "Sunny discovers hidden magical abilities and joins other young people to learn about her powers and face a dangerous threat."
    },
    {
        id: 29,
        title: "The Dilemma of a Ghost",
        author: "Ama Ata Aidoo",
        genre: "Drama",
        audience: "Young Adult",
        rating: 4.0,
        isbn: "",
        ghanaian: true,
        description: "A Ghanaian play exploring cultural identity, family expectations, and the tensions that can arise between different traditions."
    },
    {
        id: 30,
        title: "Faceless",
        author: "Amma Darko",
        genre: "Fiction",
        audience: "Adult",
        rating: 4.0,
        isbn: "",
        ghanaian: true,
        description: "A Ghanaian novel examining street children, social inequality, and the challenges faced by vulnerable young people."
    }

];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

const $ = (selector) => document.querySelector(selector);

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[character]));
}

function getFavorites() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("readingRoomFavorites") || "[]"
        );

        return Array.isArray(saved) ? saved.map(Number) : [];
    } catch {
        return [];
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem(
            "readingRoomFavorites",
            JSON.stringify(favorites)
        );
    } catch (error) {
        console.warn("Could not save favourites.", error);
    }
}

function coverURL(book) {
    if(book.image) return book.image;
    if (!book.isbn) return "";

    return `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(book.isbn)}-L.jpg`;
}

function retailerLinks(book) {
    const query = encodeURIComponent(`${book.title} ${book.author}`);
    const amazonQuery = encodeURIComponent(book.isbn || `${book.title} ${book.author}`);

    return `
        <div class="retailer-links">
            <a href="https://www.goodreads.com/search?q=${query}"
               target="_blank" rel="noopener noreferrer">
                Find on Goodreads ↗
            </a>
            <a href="https://www.amazon.com/s?k=${amazonQuery}"
               target="_blank" rel="noopener noreferrer">
                Find on Amazon ↗
            </a>
        </div>
    `;
}

// ==========================================
// BOOK CARDS
// ==========================================

function createBookCard(book) {
    const isFavorite = getFavorites().includes(book.id);
    const cover = coverURL(book);

    const coverMarkup = cover
        ? `
            <img class="book-cover"
                 src="${cover}"
                 alt="Cover of ${escapeHTML(book.title)}"
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.hidden=false">

            <div class="cover-fallback" hidden>
                📖<br>
                ${book.ghanaian ? "Ghanaian Literature" : "A good story awaits"}
            </div>
        `
        : `
            <div class="cover-fallback">
                📖<br>
                ${book.ghanaian ? "Ghanaian Literature" : "A good story awaits"}
            </div>
        `;

    return `
        <article class="book-card">
            <div class="cover-wrap">
                ${coverMarkup}

                <button class="favorite-button"
                        type="button"
                        data-favorite="${book.id}"
                        aria-label="${isFavorite ? "Remove from" : "Add to"} favourites"
                        aria-pressed="${isFavorite}">
                    ${isFavorite ? "♥" : "♡"}
                </button>
            </div>

            <div class="book-meta">
                <span class="book-tag">${escapeHTML(book.genre)}</span>
                <span class="book-tag">${escapeHTML(book.audience)}</span>
                ${book.ghanaian ? '<span class="book-tag">Ghanaian</span>' : ""}
            </div>

            <h3>${escapeHTML(book.title)}</h3>
            <p class="book-author">by ${escapeHTML(book.author)}</p>
            <p class="book-rating">
                ★ ${Number(book.rating).toFixed(1)}
                <span>(sample rating)</span>
            </p>

            <button class="details-button"
                    type="button"
                    data-details="${book.id}">
                View Details
            </button>
        </article>
    `;
}

function renderBooks(container, list) {
    if (!container) return;

    container.innerHTML = list.length
        ? list.map(createBookCard).join("")
        : '<p class="empty-message">No books found. Try changing your search or filters.</p>';
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

// ==========================================
// LIBRARY FILTERS AND SORTING
// ==========================================


function filterLibrary() {
    const grid = $("#book-grid");
    if (!grid) return;

    const searchTerm = ($("#search-input")?.value || "")
        .trim()
        .toLowerCase();

    const selectedGenre =
        ($("#genre-filter")?.value || "all").toLowerCase();

    const selectedAudience =
        ($("#audience-filter")?.value || "all").toLowerCase();

    const sortBy = $("#sort-select")?.value || "title";
    const favoritesOnly =
        $("#show-favorites")?.dataset.active === "true";

    const favoriteIds = getFavorites();

    let filtered = books.filter(book => {
        const searchableText = [
            book.title,
            book.author,
            book.description
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        let matchesGenre = true;

        if (selectedGenre !== "all" && selectedGenre !== "any") {
            if (selectedGenre === "ghanaian literature") {
                matchesGenre = book.ghanaian;
            } else if (selectedGenre === "children's") {
                matchesGenre = book.audience === "Children";
            } else if (selectedGenre === "folktale") {
                matchesGenre =
                    book.title.toLowerCase().includes("ananse") ||
                    book.description.toLowerCase().includes("ananse") ||
                    book.description.toLowerCase().includes("folktale");
            } else {
                matchesGenre =
                    book.genre.toLowerCase() === selectedGenre;
            }
        }

        let matchesAudience = true;

        if (selectedAudience !== "all" &&
            selectedAudience !== "any") {
            if (selectedAudience === "teen") {
                matchesAudience = book.audience === "Young Adult";
            } else {
                matchesAudience =
                    book.audience.toLowerCase() === selectedAudience;
            }
        }

        const matchesFavorites =
            !favoritesOnly || favoriteIds.includes(book.id);

        return matchesSearch &&
            matchesGenre &&
            matchesAudience &&
            matchesFavorites;
    });

    if (sortBy === "author") {
        filtered.sort((a, b) =>
            a.author.localeCompare(b.author)
        );
    } else if (sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    renderBooks(grid, filtered);

    const count = $("#results-count");
    if (count) {
        count.textContent =
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

    renderBooks(
        container,
        books.filter(book => book.audience === "Children")
    );
}

function renderGhanaBooks() {
    const container = $("#ghana-books");
    if (!container) return;

    renderBooks(
        container,
        books.filter(book => book.ghanaian)
    );
}

function refreshPageBooks() {
    renderBooks($("#featured-books"), books.slice(0, 4));
    renderFavorites();
    renderChildrenBooks();
    renderGhanaBooks();
    filterLibrary();
}

// ==========================================
// BOOK DETAILS MODAL
// ==========================================

function showBookDetails(id) {
    const book = books.find(item => item.id === Number(id));
    const modal = $("#book-modal");
    const content = $("#modal-content");

    if (!book || !modal || !content) return;

    const cover = coverURL(book);

    content.innerHTML = `
        ${
            cover
                ? `<img class="modal-cover"
                        src="${cover}"
                        alt="Cover of ${escapeHTML(book.title)}"
                        onerror="this.style.display='none'">`
                : `<div class="cover-fallback">
                       📖<br>${book.ghanaian
                           ? "Ghanaian Literature"
                           : "A good story awaits"}
                   </div>`
        }

        <h2 class="modal-title">${escapeHTML(book.title)}</h2>
        <p class="modal-author">by ${escapeHTML(book.author)}</p>

        <div class="book-meta">
            <span class="book-tag">${escapeHTML(book.genre)}</span>
            <span class="book-tag">${escapeHTML(book.audience)}</span>
            ${book.ghanaian
                ? '<span class="book-tag">Ghanaian Literature</span>'
                : ""}
        </div>

        <p class="book-rating">
            ★ ${Number(book.rating).toFixed(1)} (sample rating)
        </p>

        <p class="modal-description">
            ${escapeHTML(book.description)}
        </p>

        ${retailerLinks(book)}

        <button class="btn btn-primary modal-save"
                type="button"
                data-favorite="${book.id}">
            ${getFavorites().includes(book.id)
                ? "♥ Remove from Favourites"
                : "♡ Add to Favourites"}
        </button>
    `;

    if (typeof modal.showModal === "function") {
        if (!modal.open) modal.showModal();
    } else {
        modal.setAttribute("open", "");
    }
}

// ==========================================
// DARK MODE
// ==========================================

function setupDarkMode() {
    const themeButton = $("#theme-toggle");
    if (!themeButton) return;

    try {
        if (localStorage.getItem("readingRoomTheme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
        console.warn("Could not load saved theme.", error);
    }

    function updateThemeButton() {
        const darkMode = document.body.classList.contains("dark-mode");

        themeButton.textContent = darkMode ? "☀️" : "🌙";
        themeButton.setAttribute(
            "aria-label",
            darkMode ? "Switch to light mode" : "Switch to dark mode"
        );
        themeButton.setAttribute("aria-pressed", String(darkMode));
    }

    updateThemeButton();

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const theme = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

        try {
            localStorage.setItem("readingRoomTheme", theme);
        } catch (error) {
            console.warn("Could not save theme.", error);
        }

        updateThemeButton();
    });
}

// ==========================================
// RECOMMENDATION QUIZ
// ==========================================


function setupRecommendationQuiz() {
    const form = $("#recommendation-form");
    const results = $("#recommendation-results");

    if (!form || !results) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const audience = $("#quiz-audience")?.value || "any";
        const mood = $("#quiz-mood")?.value || "any";
        const genre = $("#quiz-genre")?.value || "any";

        // Match the quiz audience choices to the book data.
        const audienceMatch = book => {
            if (audience === "any") return true;
            if (audience === "teen") {
                return book.audience === "Young Adult";
            }

            return book.audience.toLowerCase() ===
                audience.toLowerCase();
        };

        // Match normal genres and the special Ghanaian categories.
        const genreMatch = book => {
            if (genre === "any") return true;

            if (genre.toLowerCase() === "ghanaian literature") {
                return book.ghanaian;
            }

            if (genre.toLowerCase() === "folktale") {
                return book.title.toLowerCase().includes("ananse") ||
                    book.description.toLowerCase().includes("ananse") ||
                    book.description.toLowerCase().includes("folktale");
            }

            if (genre.toLowerCase() === "children's") {
                return book.audience === "Children";
            }

            return book.genre.toLowerCase() === genre.toLowerCase();
        };

        let matches = books.filter(book =>
            audienceMatch(book) && genreMatch(book)
);

// If audience and genre conflict, prioritise the audience.
        if (matches.length === 0) {
            matches = books.filter(audienceMatch);
}

// If the audience has no matches, use the selected genre.
        if (matches.length === 0) {
            matches = books.filter(genreMatch);
}
        // Choose one book from the matching results.
        const recommendation =
            matches[Math.floor(Math.random() * matches.length)];

        results.innerHTML = `
            <h3>Your next read 📚</h3>
            ${createBookCard(recommendation)}
        `;
    });
}

function setupSurpriseButton() {
    const button = $("#surprise-button");
    if (!button) return;

    button.addEventListener("click", () => {
        const book = books[Math.floor(Math.random() * books.length)];

        showBookDetails(book.id);
    });
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEvents() {
    document.addEventListener("click", event => {
        const favoriteButton = event.target.closest("[data-favorite]");
        const detailsButton = event.target.closest("[data-details]");

        if (favoriteButton) {
            const id = Number(favoriteButton.dataset.favorite);
            toggleFavorite(id);

            const modal = $("#book-modal");
            if (modal?.open) {
                showBookDetails(id);
            }

            return;
        }

        if (detailsButton) {
            showBookDetails(Number(detailsButton.dataset.details));
        }
    });

    $("#search-input")?.addEventListener("input", filterLibrary);
    $("#genre-filter")?.addEventListener("change", filterLibrary);
    $("#audience-filter")?.addEventListener("change", filterLibrary);
    $("#sort-select")?.addEventListener("change", filterLibrary);

    $("#show-favorites")?.addEventListener("click", event => {
        const button = event.currentTarget;
        const active = button.dataset.active === "true";

        button.dataset.active = String(!active);
        button.setAttribute("aria-pressed", String(!active));
        button.textContent = !active
            ? "♥ Showing Favourites"
            : "♡ Show Favourites";

        filterLibrary();
    });

    $("#clear-filters")?.addEventListener("click", () => {
        const search = $("#search-input");
        const genre = $("#genre-filter");
        const audience = $("#audience-filter");
        const sort = $("#sort-select");
        const favorites = $("#show-favorites");

        if (search) search.value = "";
        if (genre) genre.value = "all";
        if (audience) audience.value = "all";
        if (sort) sort.value = "title";

        if (favorites) {
            favorites.dataset.active = "false";
            favorites.setAttribute("aria-pressed", "false");
            favorites.textContent = "♡ Show Favourites";
        }

        filterLibrary();
    });

    const modal = $("#book-modal");
    const closeButton = $("#close-modal");

    if (closeButton && modal) {
        closeButton.addEventListener("click", () => {
            if (typeof modal.close === "function") {
                modal.close();
            } else {
                modal.removeAttribute("open");
            }
        });
    }

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal &&
                typeof modal.close === "function") {
                modal.close();
            }
        });
    }
}

// START THE WEBSITE


document.addEventListener("DOMContentLoaded", () => {
    setupDarkMode();
    setupEvents();
    setupRecommendationQuiz();
    setupSurpriseButton();
    refreshPageBooks();
});