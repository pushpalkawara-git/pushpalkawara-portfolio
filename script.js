// ========== TYPING ANIMATION ==========
const roles = ["Data Analyst", "Business Analyst", "Product Analyst", "MIS Analyst", "Growth Analyst", "Reporting Analyst"];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById("role-typing");

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
        return;
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// ========== UTILITIES ==========
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
function downloadResume() {
    window.location.href = 'assets/MY-INFO/PK_Resume_11Apr.pdf';
}

// ========== SECTION FADE ON SCROLL ==========
const sections = document.querySelectorAll('.section-fade');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.08 });
sections.forEach(s => observer.observe(s));

// ========== MOBILE HAMBURGER MENU ==========
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('open');
        // Toggle icon between bars and X
        hamburgerBtn.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            mobileMenu.classList.remove('open');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ========== PROJECT MODALS ==========
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    const projects = {
        1: {
            title: "Ather EV Sales & Operations Dashboard",
            content: `
                <div>
                    <div class="iframe-container mb-6">
                        <iframe title="Ather_EV_Business"
                            src="https://app.powerbi.com/view?r=eyJrIjoiNzY2MDg1YjMtOGE0MS00MGZjLWFhZWItZWQ1OTVkZTkxMzM4IiwidCI6ImQwOGNmOGE5LTQ1ZWEtNDFlYS1iMGM4LTgxYzVlN2FmYWYxYyJ9&pageName=77f9997f20e1863cbb0e"
                            frameborder="0" allowFullScreen="true">
                        </iframe>
                    </div>
                    <div class="grid md:grid-cols-2 gap-5 mb-6">
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700 mb-1">📊 The Business Problem</h4>
                            <p class="text-sm text-gray-700">The EV company lacked a centralized view of sales, customer behavior, and delivery performance. Decisions were based on scattered Excel files, making it impossible to spot regional trends or understand financing impact.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700 mb-1">💡 Approach</h4>
                            <p class="text-sm text-gray-700">Built a star schema in Power BI with Python-generated data simulating 52,000+ customers and 60+ showrooms (2024–2025). Wrote DAX measures for revenue, profit, delivery time, and ratings.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl md:col-span-2">
                            <h4 class="font-bold text-indigo-700 mb-2">🔍 Key Insights</h4>
                            <ul class="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                <li><strong>40% festive sales spike</strong> (Oct–Nov) — align inventory and marketing.</li>
                                <li><strong>22% YoY growth in Tier-2 cities</strong> (Nagpur, Nashik, Aurangabad) — expansion priority.</li>
                                <li><strong>65% of purchases via EMI/Loan</strong> — financing partnerships critical.</li>
                                <li><strong>18% higher ratings</strong> when delivery ≤5 days — operational KPI set.</li>
                                <li><strong>30% of orders</strong> from new 2025 models within 6 months — promote new launches.</li>
                                <li><strong>12% higher AOV</strong> with accessories — introduce bundles.</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl md:col-span-2">
                            <h4 class="font-bold text-indigo-700 mb-2">✅ Business Recommendations</h4>
                            <ul class="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                <li>Ramp up inventory & campaigns before festive season.</li>
                                <li>Expand showrooms in high-growth Tier-2 cities.</li>
                                <li>Strengthen bank/NBFC partnerships for EMI offers.</li>
                                <li>Optimize logistics for ≤5-day delivery target.</li>
                                <li>Allocate ad spend to newly launched models.</li>
                                <li>Bundle accessories at checkout to lift AOV.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-indigo-50 p-4 rounded-xl mb-5">
                        <h4 class="font-bold text-gray-800 mb-1">🧠 Data Generation & Limitations</h4>
                        <p class="text-sm text-gray-600">Dataset synthetically generated with Python using realistic business logic (seasonality, product mix, financing). Not real Ather Energy data; external factors not modeled.</p>
                    </div>
                    <div class="flex flex-wrap justify-between items-center gap-3">
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Power BI</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">DAX</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Power Query</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Python</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">SQL Server</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Star Schema</span>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <a href="assets/Ather_EV_POWER-BI/Ather_EV_Presentation.pdf" target="_blank"
                               class="bg-gray-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition inline-flex items-center gap-1">
                                <i class="fas fa-file-pdf"></i> View Presentation
                            </a>
                            <a href="https://app.powerbi.com/view?r=eyJrIjoiNzY2MDg1YjMtOGE0MS00MGZjLWFhZWItZWQ1OTVkZTkxMzM4IiwidCI6ImQwOGNmOGE5LTQ1ZWEtNDFlYS1iMGM4LTgxYzVlN2FmYWYxYyJ9&pageName=77f9997f20e1863cbb0e" target="_blank"
                               class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition inline-flex items-center gap-1">
                                <i class="fas fa-external-link-alt"></i> Open Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        2: {
            title: "Supply Chain Performance & Operations Dashboard",
            content: `
                <div>
                    <div class="iframe-container mb-6">
                        <iframe src="supply-chain-dashboard.html" title="Supply Chain Dashboard" frameborder="0" allowFullScreen="true"></iframe>
                    </div>
                    <div class="grid md:grid-cols-2 gap-5 mb-6">
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700 mb-1">📊 Business Challenge</h4>
                            <p class="text-sm text-gray-700">Operations team spent half a workday every week manually pulling Excel reports. No real-time view of supplier performance, warehouse fulfillment, or shipping efficiency.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700 mb-1">💡 Solution</h4>
                            <p class="text-sm text-gray-700">Built a live HTML/JavaScript dashboard connected to Google Sheets (500+ monthly orders). 5 analytical pages, 6 global filters, date range picker, CSV upload, and one-click report generation.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl md:col-span-2">
                            <h4 class="font-bold text-indigo-700 mb-2">🔍 Key Insights</h4>
                            <ul class="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                <li><strong>Reporting time cut from half a workday/week to near zero</strong> — 15–20 hours/month saved.</li>
                                <li><strong>Supplier with 12% return rate</strong> (avg 5%) flagged for quality audit.</li>
                                <li><strong>Two warehouses below 70% fulfillment</strong> (target 85%) — staffing/equipment issues.</li>
                                <li><strong>Air freight: 95% on-time vs Sea: 68%</strong> — route high-value items via Air.</li>
                                <li><strong>Electronics returns at 9%</strong> (vs Apparel 3%) — packaging review initiated.</li>
                                <li><strong>On-time delivery drops from 82% to 71% in Nov–Dec</strong> — holiday logistics planning.</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl md:col-span-2">
                            <h4 class="font-bold text-indigo-700 mb-2">✅ Business Impact</h4>
                            <ul class="text-sm text-gray-700 list-disc pl-4 space-y-1">
                                <li>Dashboard adopted for weekly ops meetings; manual Excel retired.</li>
                                <li>Quality audit triggered for underperforming supplier.</li>
                                <li>Warehouse process improvements scheduled.</li>
                                <li>Shipping policy updated: Air for Electronics/urgent, Sea for bulk.</li>
                                <li>Holiday staffing plan implemented.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-indigo-50 p-4 rounded-xl mb-5">
                        <h4 class="font-bold text-gray-800 mb-2">📌 Live Data Source & Documents</h4>
                        <p class="text-sm text-gray-600 mb-3">Dashboard fetches real-time data from Google Sheets. You can also upload a CSV directly.</p>
                        <div class="flex flex-wrap gap-3">
                            <a href="https://docs.google.com/spreadsheets/d/1t8surCotYHPBL9o9sDB8Qn9zGiwsooyTXRh-CD3o0nk/edit?usp=sharing" target="_blank"
                               class="bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition inline-flex items-center gap-1 border border-gray-200">
                                <i class="fas fa-table"></i> View Raw Data (Google Sheets)
                            </a>
                            <a href="assets/SupplyChainHTMLBI/SupplyChain_Presentation.pdf" target="_blank"
                               class="bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition inline-flex items-center gap-1 border border-gray-200">
                                <i class="fas fa-file-pdf"></i> View Presentation (PDF)
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-between items-center gap-3">
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Chart.js</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Google Sheets API</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">HTML/CSS</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">SQL Server</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Flatpickr</span>
                        </div>
                        <a href="supply-chain-dashboard.html" target="_blank"
                           class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition inline-flex items-center gap-1">
                            <i class="fas fa-external-link-alt"></i> Open Live Dashboard
                        </a>
                    </div>
                </div>
            `
        }
    };

    title.textContent = projects[projectId].title;
    content.innerHTML = projects[projectId].content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ========== FREELANCE MODAL ==========
function openFreelanceModal() {
    document.getElementById('freelanceModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeFreelanceModal() {
    document.getElementById('freelanceModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
function submitFreelance(e) {
    e.preventDefault();
    alert("Thank you! I'll respond within 24 hours.");
    closeFreelanceModal();
    e.target.reset();
}

// Close modals on outside click
window.onclick = function (e) {
    if (e.target === document.getElementById('projectModal')) closeProjectModal();
    if (e.target === document.getElementById('freelanceModal')) closeFreelanceModal();
};

// ========== PROJECT CARD REVEAL ON SCROLL ==========
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, idx * 150);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

projectCards.forEach(card => cardObserver.observe(card));
