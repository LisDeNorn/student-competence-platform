// =====================
// Вкладки Soft / Hard (страница skills.html)
// =====================
const softTab = document.getElementById("softTab");
const hardTab = document.getElementById("hardTab");
const softBlock = document.getElementById("softSkillsBlock");
const hardBlock = document.getElementById("hardSkillsBlock");

if (softTab && hardTab && softBlock && hardBlock) {
    softTab.onclick = () => {
        softTab.classList.add("active");
        hardTab.classList.remove("active");
        softBlock.style.display = "block";
        hardBlock.style.display = "none";
    };

    hardTab.onclick = () => {
        hardTab.classList.add("active");
        softTab.classList.remove("active");
        softBlock.style.display = "none";
        hardBlock.style.display = "block";
    };
}

// =====================
// Графики (skills.html, через Chart.js)
// =====================
if (typeof Chart !== "undefined") {
    const radarCtx = document.getElementById("radarChart");
    if (radarCtx) {
        new Chart(radarCtx, {
            type: "radar",
            data: {
                labels: [
                    "Аналитическое мышление",
                    "Вовлечённость",
                    "Коммуникация и взаимодействие",
                    "Лидерство",
                    "Мотивация развития",
                    "Навыки переговоров"
                ],
                datasets: [{
                    data: [4, 3.5, 3, 3, 4.2, 2.8],
                    backgroundColor: "rgba(30,112,201,0.25)",
                    borderColor: "#1e70c9",
                    borderWidth: 2,
                    pointBackgroundColor: "#1e70c9"
                }]
            },
            options: {
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 5,
                        ticks: { display: false },
                        grid: { color: "#d1d5db" },
                        angleLines: { color: "#d1d5db" }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    const lineCtx = document.getElementById("lineChart");
    if (lineCtx) {
        new Chart(lineCtx, {
            type: "line",
            data: {
                labels: ["1 курс", "2 курс", "3 курс", "4 курс"],
                datasets: [{
                    data: [3.4, 3.0, 3.1, 3.3],
                    borderColor: "#1e70c9",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.3,
                    pointBackgroundColor: "#1e70c9"
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 5,
                        grid: { color: "#e5e7eb" }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

// =====================
// Модалка календаря (events.html)
// =====================
const openCalendar = document.getElementById("openCalendar");
const closeCalendar = document.getElementById("closeCalendar");
const cancelCalendar = document.getElementById("cancelCalendar");
const calendarModal = document.getElementById("calendarModal");

if (openCalendar && calendarModal) {
    openCalendar.onclick = () => calendarModal.classList.add("active");
}
if (closeCalendar && calendarModal) {
    closeCalendar.onclick = () => calendarModal.classList.remove("active");
}
if (cancelCalendar && calendarModal) {
    cancelCalendar.onclick = () => calendarModal.classList.remove("active");
}

// =====================
// Модалки "Добавить образование" / "Добавить опыт" (profile.html)
// =====================
const eduModal = document.getElementById("modalEducation");
const expModal = document.getElementById("modalExperience");
const eduBtn = document.getElementById("openEducation");
const expBtn = document.getElementById("openExperience");
const closeButtons = document.querySelectorAll(".modal-close");

// открыть модалку образования
if (eduBtn && eduModal) {
    eduBtn.onclick = () => {
        eduModal.style.display = "flex";
    };
}

// открыть модалку опыта
if (expBtn && expModal) {
    expBtn.onclick = () => {
        expModal.style.display = "flex";
    };
}

// закрыть модалки по кнопке "Отмена"
closeButtons.forEach(btn => {
    btn.onclick = () => {
        if (eduModal) eduModal.style.display = "none";
        if (expModal) expModal.style.display = "none";
        if (calendarModal) calendarModal.classList.remove("active");
    };
});

// закрывать по клику на тёмный фон
document.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

