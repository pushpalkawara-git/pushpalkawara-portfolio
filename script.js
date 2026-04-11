// ========== TYPING ANIMATION ==========
const roles = ["Data Analyst", "Product Analyst", "MIS Analyst", "Marketing Analytics Expert", "Power BI Analyst"];
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
    window.location.href = 'assets/PK_Resume_11Apr.pdf'; 
    alert("Resume download started."); 
}

// ========== SECTION FADE ON SCROLL ==========
const sections = document.querySelectorAll('.section-fade');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
        if(e.isIntersecting) e.target.classList.add('visible'); 
    });
}, { threshold: 0.1 });
sections.forEach(s => observer.observe(s));

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
                    <!-- Embedded Power BI Dashboard -->
                    <div class="iframe-container mb-6">
                        <iframe title="Ather_EV_Business" 
                            src="https://app.powerbi.com/view?r=eyJrIjoiNzY2MDg1YjMtOGE0MS00MGZjLWFhZWItZWQ1OTVkZTkxMzM4IiwidCI6ImQwOGNmOGE5LTQ1ZWEtNDFlYS1iMGM4LTgxYzVlN2FmYWYxYyJ9&pageName=77f9997f20e1863cbb0e" 
                            frameborder="0" allowFullScreen="true">
                        </iframe>
                    </div>
                    
                    <!-- Project Details from PPT -->
                    <div class="grid md:grid-cols-2 gap-5 mb-6">
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">📊 Executive Summary</h4>
                            <p class="text-sm mt-1">Complete end-to-end analytics solution simulating real-world EV business decisions. Analyzes sales performance, customer behavior, product trends, and operational efficiency through structured data modeling and interactive dashboard.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">🎯 Business Problem</h4>
                            <p class="text-sm mt-1">Lack of centralized analytics to monitor regional sales, customer purchasing behavior, product performance, delivery gaps, and satisfaction impact.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">💡 Data Model & Preparation</h4>
                            <p class="text-sm mt-1">Star schema with Fact_Sales and 6 dimension tables (Customer, Product, City, Showroom, Payment, Date). Data generated via Python (52K+ customers, 60+ showrooms, Jan 2024–Dec 2025). Power Query cleaning + DAX date table.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">📈 Key KPIs (DAX)</h4>
                            <p class="text-sm mt-1">Total Sales Revenue, Total Orders, Avg Order Value, Total Profit, Profit Margin %, Avg Delivery Time, Customer Rating, Finance Contribution %.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">🔍 Key Business Insights</h4>
                            <ul class="text-sm mt-1 list-disc pl-4 space-y-1">
                                <li>Strong seasonal demand (festive spikes, monsoon dips)</li>
                                <li>Loan/EMI dominant (high price sensitivity)</li>
                                <li>New models gaining rapid adoption</li>
                                <li>Faster delivery → higher satisfaction</li>
                                <li>Tier-2 cities consistent growth</li>
                                <li>Discounts & accessory bundling influence final value</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl">
                            <h4 class="font-bold text-indigo-700">✅ Business Recommendations</h4>
                            <ul class="text-sm mt-1 list-disc pl-4 space-y-1">
                                <li>Align inventory & marketing with seasonal spikes</li>
                                <li>Optimize delivery < 5 days</li>
                                <li>Strengthen financing partnerships</li>
                                <li>Promote newly launched models</li>
                                <li>Expand in high-growth Tier-2 cities</li>
                                <li>Targeted pricing & bundling strategies</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Data Generation & Limitations -->
                    <div class="bg-indigo-50 p-4 rounded-xl mb-5">
                        <h4 class="font-bold">🧠 Data Generation Logic</h4>
                        <p class="text-sm">Python simulation based on research: seasonal variation, product mix evolution, financing dependency, delivery → satisfaction link, multi‑component pricing.</p>
                        <p class="text-sm mt-2"><strong>Limitations:</strong> Synthetic dataset; real-world factors (competition, policy changes) not included. Results may differ in actual business scenarios.</p>
                    </div>
                    
                    <!-- View Presentation Button (No Download) -->
                    <div class="flex flex-wrap justify-between items-center gap-3">
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Power BI</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Python</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">DAX</span>
                            <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Star Schema</span>
                        </div>
                        <button onclick="viewPresentation()" class="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                            <i class="fas fa-eye mr-1"></i> View Full Presentation (No Download)
                        </button>
                    </div>
                </div>
            ` 
        },
      2: {
    title: "Supply Chain Analytics Dashboard (Live from Google Sheets)",
    content: `
        <div>
            <!-- Embedded Dashboard (same as Project 1 style) -->
            <div class="iframe-container mb-6">
                <iframe src="supply-chain-dashboard.html" title="Supply Chain Dashboard" frameborder="0" allowFullScreen="true" style="width:100%; height:100%;"></iframe>
            </div>
            
            <!-- Project Details Grid -->
            <div class="grid md:grid-cols-2 gap-5 mb-6">
                <div class="bg-gray-50 p-4 rounded-xl">
                    <h4 class="font-bold text-indigo-700">📊 Business Challenge</h4>
                    <p class="text-sm mt-1">Supply chain team lacked a unified real‑time view of orders, on‑time delivery, returns, and supplier performance across 10+ warehouses and 5 shipping methods.</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl">
                    <h4 class="font-bold text-indigo-700">💡 Solution</h4>
                    <p class="text-sm mt-1">Built a fully responsive HTML/JS dashboard that fetches live data from Google Sheets. Includes 5 analytical pages (Overview, Supplier, Warehouse, Category, Service Quality) with 6 global filters, date range picker, and CSV upload fallback.</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl">
                    <h4 class="font-bold text-indigo-700">⚙️ Tech Stack</h4>
                    <p class="text-sm mt-1">HTML5, CSS3 (Grid/Flex), JavaScript, Chart.js, Flatpickr, Google Sheets API (GViz), CSV upload, dark/light theme, downloadable HTML report.</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl">
                    <h4 class="font-bold text-indigo-700">📈 Key Features</h4>
                    <ul class="text-sm mt-1 list-disc pl-4 space-y-1">
                        <li>5 interactive pages with 20+ charts</li>
                        <li>Global filters: Year, Month, Supplier, Warehouse, Shipping, Category</li>
                        <li>Calendar date range filter (Flatpickr)</li>
                        <li>Real‑time KPI cards (Total Orders, On‑Time %, Fulfillment %, Return %)</li>
                        <li>Supplier & Warehouse performance matrices (color‑coded)</li>
                        <li>One‑click HTML report generation (print‑ready)</li>
                        <li>Dark/Light theme toggle</li>
                    </ul>
                </div>
            </div>
            
            <!-- Data Source & Documents -->
            <div class="bg-indigo-50 p-4 rounded-xl mb-5">
                <h4 class="font-bold">📌 Live Data Source & Professional Documents</h4>
                <p class="text-sm mb-2">Dashboard fetches real‑time data from the Google Sheet below (500+ supply chain records). You can also upload your own CSV file inside the dashboard.</p>
                <div class="flex flex-wrap gap-3 mt-3">
                    <a href="https://docs.google.com/spreadsheets/d/1t8surCotYHPBL9o9sDB8Qn9zGiwsooyTXRh-CD3o0nk/edit?usp=sharing" target="_blank" class="inline-block bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                        <i class="fas fa-table mr-1"></i> View Google Sheets (Raw Data)
                    </a>
                    <a href="assets/SupplyChain_Presentation.pdf" target="_blank" class="inline-block bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                        <i class="fas fa-file-pdf mr-1"></i> View Full Presentation (No Download)
                    </a>
                </div>
            </div>
            
            <!-- Open Live Dashboard Button (same as Project 1 style) -->
            <div class="flex flex-wrap justify-between items-center gap-3">
                <div class="flex flex-wrap gap-2">
                    <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">HTML/CSS/JS</span>
                    <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Chart.js</span>
                    <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Google Sheets API</span>
                    <span class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">Flatpickr</span>
                </div>
                <a href="supply-chain-dashboard.html" target="_blank" class="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                    <i class="fas fa-external-link-alt mr-1"></i> Open Live Dashboard (New Tab)
                </a>
            </div>
            
            <!-- Note about file placement -->
            <div class="mt-4 text-xs text-gray-400 border-t pt-3">
                <i class="fas fa-info-circle"></i> Dashboard file: <code class="bg-gray-100 px-1 rounded">supply-chain-dashboard.html</code> must be in the same folder as your portfolio.
            </div>
        </div>
    `
},
        // 3: { 
        //     title: "Inventory Movement & Supply Chain Analytics Dashboard", 
        //     content: `<div><img src="assets/project3.jpg" class="w-full rounded-2xl mb-5" onerror="this.src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop'"><div class="grid md:grid-cols-2 gap-5"><div class="bg-gray-50 p-4 rounded-xl"><h4 class="font-bold">📊 Problem</h4><p>Excess inventory & slow-moving SKUs causing high holding costs.</p></div><div class="bg-gray-50 p-4 rounded-xl"><h4 class="font-bold">💡 Approach</h4><p>Developed interactive dashboard with KPIs: Stock Turnover, Aging Analysis, Fast/Slow movers.</p></div><div class="bg-gray-50 p-4 rounded-xl"><h4 class="font-bold">🔍 Insights</h4><p>Identified 20% SKUs as slow-moving; recommended stock optimization.</p></div><div class="bg-gray-50 p-4 rounded-xl"><h4 class="font-bold">🎯 Outcomes</h4><p>Improved inventory planning and reduced holding inefficiencies significantly.</p></div></div><div class="mt-5 bg-indigo-50 p-4 rounded-xl"><h4 class="font-bold">📄 Tools</h4><p>Power BI, SQL, Power Query, DAX</p></div></div>` 
        // }
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

// ========== CLOSE MODALS ON OUTSIDE CLICK ==========
window.onclick = function(e) {
    if (e.target === document.getElementById('projectModal')) closeProjectModal();
    if (e.target === document.getElementById('freelanceModal')) closeFreelanceModal();
};

// ===== REVEAL PROJECT CARDS ON SCROLL =====
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

projectCards.forEach((card, idx) => {
    card.style.setProperty('--order', idx);
    cardObserver.observe(card);
});

// ========== VIEW PRESENTATION WITHOUT DOWNLOAD ==========
function viewPresentation() {
    // PDF file path (change if needed)
    const pdfUrl = 'assets/Ather_EV_Presentation.pdf';
    // Use Google Docs viewer to open in new tab (no download prompt)
    const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    const fullPdfUrl = baseUrl + pdfUrl;
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;
    window.open(viewerUrl, '_blank');
}
