/* ==========================================================================
   KPK Study Hub - Complete Master Application Logic
   ========================================================================== */

const classesData = [
    { id: 1, name: "Class 1", category: "primary", booksCount: 5, notesCount: 5 },
    { id: 2, name: "Class 2", category: "primary", booksCount: 5, notesCount: 5 },
    { id: 3, name: "Class 3", category: "primary", booksCount: 5, notesCount: 5 },
    { id: 4, name: "Class 4", category: "primary", booksCount: 5, notesCount: 5 },
    { id: 5, name: "Class 5", category: "primary", booksCount: 5, notesCount: 5 },
    { id: 6, name: "Class 6", category: "middle", booksCount: 6, notesCount: 6 },
    { id: 7, name: "Class 7", category: "middle", booksCount: 6, notesCount: 6 },
    { id: 8, name: "Class 8", category: "middle", booksCount: 6, notesCount: 6 },
    { id: 9, name: "Class 9", category: "matric", booksCount: 7, notesCount: 7 },
    { id: 10, name: "Class 10", category: "matric", booksCount: 7, notesCount: 7 },
    { id: 11, name: "1st Year", category: "intermediate", booksCount: 6, notesCount: 6 },
    { id: 12, name: "2nd Year", category: "intermediate", booksCount: 6, notesCount: 6 }
];

const subjectsData = {
    "Class 9 Books": [
        { name: "Mathematics (Class 9)", desc: "KPK Board Textbook PDF", fileId: "1WZXaUTy30V38h8B6ozxqt5rPbWwx8VfJ" },
        { name: "Physics (Class 9)", desc: "KPK Board Textbook PDF", fileId: "1WZXaUTy30V38h8B6ozxqt5rPbWwx8VfJ" }
    ],
    "Class 9 Notes": [
        { name: "Math Solved Notes (Class 9)", desc: "Chapter wise guides", fileId: "1WZXaUTy30V38h8B6ozxqt5rPbWwx8VfJ" }
    ],
    "Class 10 Books": [
        { name: "Mathematics (Class 10)", desc: "KPK Board Textbook PDF", fileId: "1WbQkHwi7hUS7RTi9zt8mf8V3QEDgMMfd" }
    ],
    "1st Year Books": [
        { name: "Mathematics (1st Year)", desc: "KPK Board Textbook PDF", fileId: "1Y9kMFSmB3A0oUGC2JQnjF7Jd9SnbD-GC" }
    ],
    "2nd Year Books": [
        { name: "Mathematics (2nd Year)", desc: "KPK Board Textbook PDF", fileId: "1WfPiLMfuh9DyIa7rhIKj-1M1LA8CCbFl" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let splash = document.getElementById('splashScreen');
        let mainApp = document.getElementById('mainApp');
        if (splash) splash.classList.add('hidden');
        if (mainApp) mainApp.classList.remove('hidden');
    }, 1000);

    let savedTheme = localStorage.getItem('appTheme');
    let icon = document.getElementById('themeIcon');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode-active');
        if (icon) icon.className = 'fa-solid fa-eye-slash';
    }

    renderHomeCards();
});

function renderHomeCards() {
    let grid = document.getElementById('cardGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    classesData.forEach(cls => {
        grid.innerHTML += `
            <div class="card" onclick="openSubjects('${cls.name} Books', '${cls.category}')">
                <span class="card-badge">${cls.category.toUpperCase()}</span>
                <i class="fa-solid fa-book card-icon"></i>
                <div class="card-body">
                    <h4>${cls.name} Books</h4>
                    <p>KPK Board Textbooks</p>
                </div>
            </div>
        `;
        grid.innerHTML += `
            <div class="card" onclick="openSubjects('${cls.name} Notes', 'notes')">
                <span class="card-badge notes-badge">Notes</span>
                <i class="fa-solid fa-file-pen card-icon" style="color: #059669;"></i>
                <div class="card-body">
                    <h4>${cls.name} Notes</h4>
                    <p>Solved Exercises</p>
                </div>
            </div>
        `;
    });
}

function showPastPapersCategory() {
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('downloadsView').classList.add('hidden');
    document.getElementById('subjectsView').classList.add('hidden');
    document.getElementById('pastPapersView').classList.remove('hidden');
}

function showDownloadsView() {
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('pastPapersView').classList.add('hidden');
    document.getElementById('subjectsView').classList.add('hidden');
    document.getElementById('downloadsView').classList.remove('hidden');
    renderDownloadsList();
}

function goBackToHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('pastPapersView').classList.add('hidden');
    document.getElementById('subjectsView').classList.add('hidden');
    document.getElementById('downloadsView').classList.add('hidden');
}

function openSubjects(title, category) {
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('pastPapersView').classList.add('hidden');
    document.getElementById('downloadsView').classList.add('hidden');
    document.getElementById('subjectsView').classList.remove('hidden');
    
    let titleEl = document.getElementById('selectedCategoryTitle');
    if (titleEl) titleEl.innerText = title;
    
    let subGrid = document.getElementById('subjectGrid');
    subGrid.innerHTML = '';
    
    let list = subjectsData[title];

    if (!list || list.length === 0) {
        subGrid.innerHTML = `
            <div class="subject-card" style="justify-content: center; text-align: center; padding: 30px;">
                <div class="subject-body">
                    <h4>Coming Soon</h4>
                    <p>Official PDFs for ${title} will be uploaded soon!</p>
                </div>
            </div>
        `;
        return;
    }

    list.forEach(item => {
        subGrid.innerHTML += `
            <div class="subject-card" onclick="downloadPDF('${item.name}', 'https://drive.google.com/uc?export=download&id=${item.fileId}')">
                <i class="fa-solid fa-file-pdf subject-icon"></i>
                <div class="subject-body">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <span class="subject-badge">Download</span>
            </div>
        `;
    });
}

function downloadPDF(fileName, fileUrl) {
    let downloads = JSON.parse(localStorage.getItem('kpkDownloads')) || [];
    let dateStr = new Date().toLocaleDateString();
    
    if (!downloads.some(d => d.name === fileName)) {
        downloads.push({ name: fileName, url: fileUrl, date: dateStr });
        localStorage.setItem('kpkDownloads', JSON.stringify(downloads));
    }

    window.open(fileUrl, '_blank');
}

function renderDownloadsList() {
    let listContainer = document.getElementById('downloadsList');
    if (!listContainer) return;
    
    let downloads = JSON.parse(localStorage.getItem('kpkDownloads')) || [];
    
    if (downloads.length === 0) {
        listContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px;">No downloaded PDFs yet.</p>`;
        return;
    }

    listContainer.innerHTML = '';
    downloads.forEach((item, index) => {
        listContainer.innerHTML += `
            <div class="download-item">
                <div class="download-info">
                    <i class="fa-solid fa-file-pdf"></i>
                    <div>
                        <h4>${item.name}</h4>
                        <p>Downloaded on ${item.date}</p>
                    </div>
                </div>
                <div class="download-actions">
                    <button class="download-action-btn btn-open" onclick="window.open('${item.url}', '_blank')">Open</button>
                    <button class="download-action-btn btn-delete" onclick="deleteDownload(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function deleteDownload(index) {
    let downloads = JSON.parse(localStorage.getItem('kpkDownloads')) || [];
    downloads.splice(index, 1);
    localStorage.setItem('kpkDownloads', JSON.stringify(downloads));
    renderDownloadsList();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode-active');
    let icon = document.getElementById('themeIcon');
    
    if (document.body.classList.contains('dark-mode-active')) {
        if (icon) icon.className = 'fa-solid fa-eye-slash';
        localStorage.setItem('appTheme', 'dark');
    } else {
        if (icon) icon.className = 'fa-solid fa-eye';
        localStorage.setItem('appTheme', 'light');
    }
}

// Menu Functions
function openWhatsAppDeveloper() {
    let phone = "923489573662";
    let message = "Hello Faizan Ahmad, I am using KPK Study Hub app and want to connect with you.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function openShareModal() {
    showCustomPopup("Share KPK Study Hub", "Help your friends and class fellows by sharing this ultimate study app:\n\nKPK Study Hub - Textbooks, Notes & Past Papers!");
}

function openRateModal() {
    let modalHTML = `
        <div class="custom-modal" id="popupModal">
            <div class="modal-box">
                <h3>Rate Our App</h3>
                <p>Tap a star to rate KPK Study Hub:</p>
                <div class="star-rating-container">
                    <i class="fa-solid fa-star star-icon" onclick="rateStar(1)"></i>
                    <i class="fa-solid fa-star star-icon" onclick="rateStar(2)"></i>
                    <i class="fa-solid fa-star star-icon" onclick="rateStar(3)"></i>
                    <i class="fa-solid fa-star star-icon" onclick="rateStar(4)"></i>
                    <i class="fa-solid fa-star star-icon" onclick="rateStar(5)"></i>
                </div>
                <button class="modal-close-btn" onclick="closeModal()">Submit Rating</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function rateStar(rating) {
    let stars = document.querySelectorAll('.star-icon');
    stars.forEach((star, idx) => {
        if (idx < rating) {
            star.classList.add('selected-star');
        } else {
            star.classList.remove('selected-star');
        }
    });
}

function openMoreAppsModal() {
    showCustomPopup("More Apps", "Explore more educational Android applications developed by Faizan Ahmad coming soon on the Play Store!");
}

function openFeedbackModal() {
    let email = "Faizanaahmad091@gmail.com";
    window.location.href = `mailto:${email}?subject=KPK Study Hub Feedback&body=Assalam-o-Alaikum Faizan,`;
}

function openPrivacyModal() {
    showCustomPopup("Privacy Policy", "KPK Study Hub respects your privacy. This application does not collect personal data. All textbook downloads are securely fetched from official Google Drive storage links.");
}

function openDisclaimerModal() {
    showCustomPopup("Disclaimer", "All textbooks, notes, and past papers provided in this app are sourced from public educational boards of KPK for student assistance and non-commercial educational purposes.");
}

function showCustomPopup(title, message) {
    let modalHTML = `
        <div class="custom-modal" id="popupModal">
            <div class="modal-box">
                <h3>${title}</h3>
                <p>${message}</p>
                <button class="modal-close-btn" onclick="closeModal()">OK</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeModal() {
    let modal = document.getElementById('popupModal');
    if (modal) modal.remove();
}

function filterCards() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('#cardGrid .card');
    
    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}