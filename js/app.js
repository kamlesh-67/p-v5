// PartnerHub SLDS — Core Application JavaScript
// Salesforce Lightning Design System inspired UI logic
// ================================================================

// ----------------------------------------------------------------
//  PRODUCT DATA
// ----------------------------------------------------------------
const PH_PRODUCTS = [
    { id: 1, name: 'ProBook Laptop 15"', sku: 'LP-PRO-001', category: 'Laptops', stock: 45, unit: 'piece', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=480&q=80' },
    { id: 2, name: 'AudioMax Pro Headphones', sku: 'HP-AUD-002', category: 'Audio', stock: 120, unit: 'piece', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&q=80' },
    { id: 3, name: 'Precision Watch Executive', sku: 'WT-PRE-003', category: 'Accessories', stock: 8, unit: 'piece', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=480&q=80' },
    { id: 4, name: 'CapturePlus DSLR Camera', sku: 'CM-CAP-004', category: 'Cameras', stock: 23, unit: 'piece', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=480&q=80' },
    { id: 5, name: 'ErgoKeys Mechanical 75%', sku: 'KB-ERG-005', category: 'Peripherals', stock: 67, unit: 'piece', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=480&q=80' },
    { id: 6, name: 'SwiftRun Pro Sneakers', sku: 'SN-SWT-006', category: 'Footwear', stock: 3, unit: 'pair', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=480&q=80' },
    { id: 7, name: 'NoiseFree TWS Earbuds', sku: 'EB-NF-007', category: 'Audio', stock: 89, unit: 'piece', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165cd8b?w=480&q=80' },
    { id: 8, name: 'UltraSlim Laptop 13"', sku: 'LP-ULT-008', category: 'Laptops', stock: 31, unit: 'piece', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=480&q=80' },
    { id: 9, name: 'ChargePlus Wireless Pad', sku: 'WC-CHG-009', category: 'Accessories', stock: 0, unit: 'piece', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=480&q=80' },
    { id: 10, name: 'ViewMax Monitor 27"', sku: 'MN-VW-010', category: 'Monitors', stock: 14, unit: 'piece', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=480&q=80' },
    { id: 11, name: 'SteadyClick Pro Mouse', sku: 'MS-STD-011', category: 'Peripherals', stock: 55, unit: 'piece', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=480&q=80' },
    { id: 12, name: 'TravelPro Backpack 30L', sku: 'BG-TRV-012', category: 'Bags', stock: 42, unit: 'piece', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=480&q=80' },
];

// ----------------------------------------------------------------
//  FORWARD ORDERS DATA
// ----------------------------------------------------------------
const PH_FWD_ORDERS = [
    { id: 'ORD-FWD-6672', date: '2024-03-10', customer: 'Nexus Corp', contact: 'Vikram Malhotra', items: 4, total: 4999.96, status: 'Processing', priority: 'High', channel: 'Online', warehouse: 'WH-MUM-01' },
    { id: 'ORD-FWD-6671', date: '2024-03-09', customer: 'Vertex Solutions', contact: 'Priya Sharma', items: 2, total: 1399.98, status: 'Shipped', priority: 'Normal', channel: 'Direct', warehouse: 'WH-DEL-02' },
    { id: 'ORD-FWD-6670', date: '2024-03-08', customer: 'Apex Industries', contact: 'Rohit Gupta', items: 7, total: 5249.93, status: 'Delivered', priority: 'Normal', channel: 'Online', warehouse: 'WH-BLR-01' },
    { id: 'ORD-FWD-6669', date: '2024-03-07', customer: 'Delta Systems', contact: 'Anita Joshi', items: 1, total: 599.99, status: 'Pending', priority: 'Low', channel: 'Direct', warehouse: 'WH-MUM-01' },
    { id: 'ORD-FWD-6668', date: '2024-03-06', customer: 'Orion Tech', contact: 'Suresh Kumar', items: 3, total: 2149.97, status: 'Delivered', priority: 'High', channel: 'Online', warehouse: 'WH-HYD-01' },
    { id: 'ORD-FWD-6667', date: '2024-03-05', customer: 'Summit Partners', contact: 'Kavya Reddy', items: 5, total: 4299.95, status: 'Cancelled', priority: 'Normal', channel: 'Direct', warehouse: 'WH-DEL-02' },
    { id: 'ORD-FWD-6666', date: '2024-03-04', customer: 'Cascade Retail', contact: 'Arjun Nair', items: 2, total: 799.98, status: 'Delivered', priority: 'Low', channel: 'Online', warehouse: 'WH-BLR-01' },
    { id: 'ORD-FWD-6665', date: '2024-03-03', customer: 'Prism Distributors', contact: 'Meena Singh', items: 6, total: 7199.94, status: 'Shipped', priority: 'High', channel: 'B2B', warehouse: 'WH-MUM-01' },
];

// ----------------------------------------------------------------
//  ASN DATA
// ----------------------------------------------------------------
const PH_ASNS = [
    { id: 'ASN-2024-0041', date: '2024-03-10', supplier: 'Alpha Logistics', items: 12, units: 480, status: 'Received', warehouse: 'WH-MUM-01', po: 'PO-2024-0091' },
    { id: 'ASN-2024-0040', date: '2024-03-09', supplier: 'Beta Supply Co.', items: 8, units: 320, status: 'In-Transit', warehouse: 'WH-DEL-02', po: 'PO-2024-0090' },
    { id: 'ASN-2024-0039', date: '2024-03-08', supplier: 'Gamma Wholesale', items: 15, units: 600, status: 'Pending', warehouse: 'WH-BLR-01', po: 'PO-2024-0089' },
    { id: 'ASN-2024-0038', date: '2024-03-07', supplier: 'Delta Imports', items: 6, units: 240, status: 'Received', warehouse: 'WH-HYD-01', po: 'PO-2024-0088' },
    { id: 'ASN-2024-0037', date: '2024-03-06', supplier: 'Alpha Logistics', items: 20, units: 800, status: 'Discrepancy', warehouse: 'WH-MUM-01', po: 'PO-2024-0087' },
    { id: 'ASN-2024-0036', date: '2024-03-05', supplier: 'Epsilon Goods', items: 9, units: 360, status: 'Received', warehouse: 'WH-DEL-02', po: 'PO-2024-0086' },
];

// ----------------------------------------------------------------
//  RETURN ORDERS DATA
// ----------------------------------------------------------------
const PH_RETURNS = [
    { id: 'RET-2024-0021', date: '2024-03-10', customer: 'Nexus Corp', items: 2, amount: 599.98, status: 'Received', reason: 'Damaged', order: 'ORD-FWD-6660', refund: 'Approved' },
    { id: 'RET-2024-0020', date: '2024-03-09', customer: 'Vertex Solutions', items: 1, amount: 199.99, status: 'Processing', reason: 'Wrong Item', order: 'ORD-FWD-6655', refund: 'Pending' },
    { id: 'RET-2024-0019', date: '2024-03-08', customer: 'Apex Industries', items: 3, amount: 1499.97, status: 'Completed', reason: 'Not Needed', order: 'ORD-FWD-6648', refund: 'Approved' },
    { id: 'RET-2024-0018', date: '2024-03-07', customer: 'Delta Systems', items: 1, amount: 449.99, status: 'Pending', reason: 'Defective', order: 'ORD-FWD-6640', refund: 'Pending' },
    { id: 'RET-2024-0017', date: '2024-03-05', customer: 'Orion Tech', items: 2, amount: 299.98, status: 'Completed', reason: 'Damaged', order: 'ORD-FWD-6632', refund: 'Approved' },
];

// ----------------------------------------------------------------
//  NAV ITEMS
// ----------------------------------------------------------------
const PH_NAV = [
    { id: 'dashboard', label: 'Home', href: 'dashboard.html', icon: 'home' },
    { id: 'forward-order', label: 'Orders', href: 'forward-order-list.html', icon: 'order' },
    { id: 'asn', label: 'ASN', href: 'asn-list.html', icon: 'asn' },
    { id: 'return-order', label: 'Returns', href: 'return-order-list.html', icon: 'return' },
    { id: 'item-master', label: 'Products', href: 'item-master-list.html', icon: 'product' },
    { id: 'stock', label: 'Stock', href: 'available-stock.html', icon: 'stock' },
    { id: 'analytics', label: 'Analytics', href: 'analytics.html', icon: 'report' },
    { id: 'user-master', label: 'Users', href: 'user-master-list.html', icon: 'user' },
    { id: 'settings', label: 'Settings', href: 'settings.html', icon: 'setting' },
];

// ----------------------------------------------------------------
//  SVG ICON PATHS
// ----------------------------------------------------------------
const ICON_PATHS = {
    home: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
    order: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
    asn: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
    return: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>',
    product: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>',
    stock: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    report: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    user: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
    setting: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
    billing: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
    address: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
    logout: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>',
    notif: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>',
    search: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
    close: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>',
    plus: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>',
    download: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>',
    filter: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>',
    check: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>',
    dots: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>',
    star: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>',
    edit: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>',
    truck: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m11 0h3"/>',
    warn: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>',
    info: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    apps: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>',
    chevron: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>',
    refresh: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
};

function icon(name, cls = '') {
    return `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${ICON_PATHS[name] || ''}</svg>`;
}

// ----------------------------------------------------------------
//  STATUS HELPERS
// ----------------------------------------------------------------
function statusBadge(status) {
    const map = {
        'Processing': 'slds-badge-info',
        'Pending': 'slds-badge-warning',
        'Shipped': 'slds-badge-purple',
        'Delivered': 'slds-badge-success',
        'Cancelled': 'slds-badge-error',
        'Received': 'slds-badge-success',
        'In-Transit': 'slds-badge-info',
        'Discrepancy': 'slds-badge-error',
        'Completed': 'slds-badge-success',
        'Approved': 'slds-badge-success',
        'Ready for Pickup': 'slds-badge-warning',
        'Active': 'slds-badge-success',
        'Inactive': 'slds-badge-neutral',
    };
    const cls = map[status] || 'slds-badge-neutral';
    return `<span class="slds-badge ${cls}">${status}</span>`;
}

function priorityBadge(priority) {
    const map = { 'High': 'slds-badge-error', 'Normal': 'slds-badge-info', 'Low': 'slds-badge-neutral' };
    return `<span class="slds-badge ${map[priority] || 'slds-badge-neutral'}">${priority}</span>`;
}

function formatDate(d) {
    if (!d) return '—';
    const p = new Date(d);
    return p.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatCurrency(n) {
    return '₹' + Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

// ----------------------------------------------------------------
//  HEADER DROPDOWNS
// ----------------------------------------------------------------
function closeAllHeaderDropdowns() {
    document.querySelectorAll('.slds-hdr-dropdown').forEach(d => d.style.display = 'none');
}

function toggleHeaderDropdown(id, e) {
    if (e) e.stopPropagation();
    const dd = document.getElementById(id);
    if (!dd) return;
    const isOpen = dd.style.display !== 'none';
    closeAllHeaderDropdowns();
    if (!isOpen) dd.style.display = 'block';
}

document.addEventListener('click', function () {
    closeAllHeaderDropdowns();
});

// ----------------------------------------------------------------
//  MOBILE NAV
// ----------------------------------------------------------------
function getMobileNavDrawerHTML(activePage) {
    const items = PH_NAV.map(n => `
    <a href="${n.href}" class="slds-mobile-nav-item${activePage === n.id ? ' active' : ''}" onclick="closeMobileNav()">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS[n.icon] || ''}</svg>
      ${n.label}
    </a>`).join('');
    return `
    <div id="slds-mobile-nav-overlay" class="slds-mobile-nav-overlay" onclick="closeMobileNav()"></div>
    <div id="slds-mobile-nav-drawer" class="slds-mobile-nav-drawer">
      <div class="slds-mobile-nav-header">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="slds-brand-logo" style="width:28px;height:28px;font-size:10px;">PH</div>
          <span class="slds-mobile-nav-title">PartnerHub WMS</span>
        </div>
        <button class="slds-mobile-nav-close" onclick="closeMobileNav()">&#215;</button>
      </div>
      <div class="slds-mobile-nav-items">${items}</div>
      <div class="slds-mobile-nav-footer">WMS Platform &middot; v1.0.1</div>
    </div>`;
}

function toggleMobileNav() {
    const overlay = document.getElementById('slds-mobile-nav-overlay');
    const drawer = document.getElementById('slds-mobile-nav-drawer');
    if (!overlay || !drawer) return;
    const isOpen = drawer.classList.contains('open');
    overlay.classList.toggle('open', !isOpen);
    drawer.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
    const overlay = document.getElementById('slds-mobile-nav-overlay');
    const drawer = document.getElementById('slds-mobile-nav-drawer');
    if (overlay) overlay.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
    document.body.style.overflow = '';
}

// ----------------------------------------------------------------
//  GLOBAL HEADER HTML
// ----------------------------------------------------------------
function getGlobalHeaderHTML() {
    const user = JSON.parse(localStorage.getItem('ph_slds_user') || '{"name":"Demo User","company":"Partner Co.","initials":"DU"}');
    return `
    <header class="slds-global-header">
      <!-- Hamburger (mobile only) -->
      <button class="slds-mobile-menu-btn" title="Menu" onclick="toggleMobileNav()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:22px;height:22px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>

      <!-- App Launcher -->
      <button class="slds-app-launcher-btn" title="App Launcher" onclick="toggleAppLauncher()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:20px;height:20px;">${ICON_PATHS.apps}</svg>
      </button>

      <!-- Brand -->
      <a href="dashboard.html" class="slds-global-header__brand">
        <div class="slds-brand-logo">PH</div>
        <span class="slds-brand-name">PartnerHub</span>
      </a>

      <!-- Divider -->
      <div class="slds-header-divider"></div>

      <!-- WMS Platform Dropdown -->
      <div class="slds-hdr-btn-wrap slds-util-hide-mobile">
        <button class="slds-header-app-name" onclick="toggleHeaderDropdown('platform-dd',event)">
          WMS Platform
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:12px;height:12px;">${ICON_PATHS.chevron}</svg>
        </button>
        <div id="platform-dd" class="slds-hdr-dropdown" style="display:none;min-width:190px;">
          <div class="slds-hdr-dropdown__header">WMS Modules</div>
          ${PH_NAV.map(n => `
          <a href="${n.href}" class="slds-hdr-dropdown__item" onclick="closeAllHeaderDropdowns()">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS[n.icon] || ''}</svg>
            ${n.label}
          </a>`).join('')}
        </div>
      </div>

      <!-- Search -->
      <div class="slds-header-search">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.search}</svg>
        <input type="text" placeholder="Search PartnerHub...">
      </div>

      <!-- Utilities -->
      <div class="slds-header-utilities">
        <button class="slds-header-util-btn slds-util-hide-mobile" title="Favorites">${icon('star')}</button>
        <button class="slds-header-util-btn slds-util-hide-mobile" title="New Record">${icon('plus')}</button>

        <!-- Help -->
        <div class="slds-hdr-btn-wrap slds-util-hide-mobile">
          <button class="slds-header-util-btn" title="Help" onclick="toggleHeaderDropdown('help-dd',event)">${icon('info')}</button>
          <div id="help-dd" class="slds-hdr-dropdown" style="display:none;">
            <div class="slds-hdr-dropdown__header">Help &amp; Resources</div>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Opening Help Center…','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.info}</svg>Help Center
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Opening Documentation…','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.order}</svg>Documentation
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Opening Video Tutorials…','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.report}</svg>Video Tutorials
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Keyboard shortcuts coming soon','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.star}</svg>Keyboard Shortcuts
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Opening support portal…','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.user}</svg>Contact Support
            </a>
            <div class="slds-hdr-dropdown__footer">PartnerHub v1.0.1</div>
          </div>
        </div>

        <!-- Setup -->
        <div class="slds-hdr-btn-wrap slds-util-hide-mobile">
          <button class="slds-header-util-btn" title="Setup" onclick="toggleHeaderDropdown('setup-dd',event)">${icon('setting')}</button>
          <div id="setup-dd" class="slds-hdr-dropdown" style="display:none;">
            <div class="slds-hdr-dropdown__header">Setup</div>
            <a href="settings.html" class="slds-hdr-dropdown__item" onclick="closeAllHeaderDropdowns()">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.setting}</svg>General Settings
            </a>
            <a href="user-master-list.html" class="slds-hdr-dropdown__item" onclick="closeAllHeaderDropdowns()">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.user}</svg>User Management
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Warehouse Configuration coming soon','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.asn}</svg>Warehouse Config
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Integration Settings coming soon','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.refresh}</svg>Integrations
            </a>
            <a href="#" class="slds-hdr-dropdown__item" onclick="showToast('Security settings coming soon','info');closeAllHeaderDropdowns();return false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.check}</svg>Security &amp; Permissions
            </a>
          </div>
        </div>

        <!-- Notifications -->
        <div class="slds-hdr-btn-wrap">
          <button class="slds-header-util-btn" title="Notifications" onclick="toggleHeaderDropdown('notif-dd',event)">
            ${icon('notif')}
            <span class="slds-notif-dot"></span>
          </button>
          <div id="notif-dd" class="slds-hdr-dropdown" style="display:none;width:320px;min-width:320px;">
            <div class="slds-hdr-dropdown__header">
              <span>Notifications</span>
              <span onclick="closeAllHeaderDropdowns();showToast('All notifications marked as read','success')" style="font-size:11px;font-weight:500;color:var(--slds-brand);cursor:pointer;text-transform:none;letter-spacing:0;">Mark All Read</span>
            </div>
            <div class="slds-notif-item slds-notif-unread">
              <div class="slds-notif-item__title">New ASN Received — ASN-2024-0041</div>
              <div class="slds-notif-item__meta">Alpha Logistics &middot; 480 units &middot; WH-MUM-01 &middot; 2 hrs ago</div>
            </div>
            <div class="slds-notif-item slds-notif-unread">
              <div class="slds-notif-item__title">Order Processing — ORD-FWD-6672</div>
              <div class="slds-notif-item__meta">Nexus Corp &middot; 4 items &middot; High Priority &middot; 3 hrs ago</div>
            </div>
            <div class="slds-notif-item slds-notif-unread">
              <div class="slds-notif-item__title">Low Stock Alert — SwiftRun Pro Sneakers</div>
              <div class="slds-notif-item__meta">SKU: SN-SWT-006 &middot; Only 3 units remaining &middot; 5 hrs ago</div>
            </div>
            <div class="slds-notif-item">
              <div class="slds-notif-item__title">Return Completed — RET-2024-0019</div>
              <div class="slds-notif-item__meta">Apex Industries &middot; 3 items &middot; Yesterday</div>
            </div>
            <div class="slds-notif-item">
              <div class="slds-notif-item__title">ASN Discrepancy — ASN-2024-0037</div>
              <div class="slds-notif-item__meta">Alpha Logistics &middot; WH-MUM-01 &middot; Review required &middot; Yesterday</div>
            </div>
            <div class="slds-hdr-dropdown__footer" onclick="closeAllHeaderDropdowns()">View All Notifications →</div>
          </div>
        </div>

        <div class="slds-header-avatar" title="${user.name}">${user.initials}</div>
      </div>
    </header>`;
}

// ----------------------------------------------------------------
//  APP NAVIGATION HTML
// ----------------------------------------------------------------
function getAppNavHTML(activePage) {
    const items = PH_NAV.map(n => `
    <a href="${n.href}"
       class="slds-nav-item${activePage === n.id ? ' active' : ''}">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS[n.icon] || ''}</svg>
      ${n.label}
    </a>`).join('');

    return `
    <nav class="slds-app-nav">
      <div class="slds-app-nav__items">${items}</div>
    </nav>`;
}

// ----------------------------------------------------------------
//  WORKSPACE TABS HTML
// ----------------------------------------------------------------
function getWorkspaceTabsHTML(activeTab) {
    const tabs = getStoredTabs();
    const tabsHTML = tabs.map(t => `
    <a href="${t.href}" class="slds-wtab${activeTab === t.id ? ' active' : ''}">
      <div class="slds-wtab__icon ic-${t.icon}">${icon(t.icon, '')}</div>
      <span class="slds-truncate" style="max-width:120px;">${t.label}</span>
      ${t.closeable ? `<button class="slds-wtab__close" onclick="closeTab(event,'${t.id}')">${icon('close', '')}</button>` : ''}
    </a>`).join('');

    return `
    <div class="slds-workspace-tabs">
      ${tabsHTML}
      <button class="slds-wtab-add" title="New Tab">+</button>
    </div>`;
}

function getStoredTabs() {
    // Always include the home tab plus any open record tabs
    const saved = JSON.parse(sessionStorage.getItem('ph_slds_tabs') || '[]');
    const home = { id: 'dashboard', label: 'Home', href: 'dashboard.html', icon: 'home', closeable: false };
    // Deduplicate
    const others = saved.filter(t => t.id !== 'dashboard');
    return [home, ...others];
}

function openTab(id, label, href, icon) {
    const tabs = JSON.parse(sessionStorage.getItem('ph_slds_tabs') || '[]');
    if (!tabs.find(t => t.id === id)) {
        tabs.push({ id, label, href, icon, closeable: true });
        if (tabs.length > 8) tabs.shift(); // keep max 8 tabs
        sessionStorage.setItem('ph_slds_tabs', JSON.stringify(tabs));
    }
}

function closeTab(e, id) {
    e.preventDefault(); e.stopPropagation();
    const tabs = JSON.parse(sessionStorage.getItem('ph_slds_tabs') || '[]');
    const filtered = tabs.filter(t => t.id !== id);
    sessionStorage.setItem('ph_slds_tabs', JSON.stringify(filtered));
    window.location.href = 'dashboard.html';
}

// ----------------------------------------------------------------
//  AUTH
// ----------------------------------------------------------------
function checkAuth() {
    const publicPages = ['index.html'];
    const path = window.location.pathname;
    const isPublic = publicPages.some(p => path.endsWith(p)) || path.endsWith('/partnerhub-salesforce/');
    if (!localStorage.getItem('ph_slds_auth') && !isPublic) {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('ph_slds_auth');
    localStorage.removeItem('ph_slds_user');
    sessionStorage.removeItem('ph_slds_tabs');
    window.location.href = 'index.html';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;
    if (!email || !pass) { showToast('Please fill in all fields', 'error'); return; }
    // Simulate auth
    const user = { name: email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, c => c.toUpperCase()), company: 'PartnerHub Enterprise', initials: email.substring(0, 2).toUpperCase() };
    localStorage.setItem('ph_slds_auth', '1');
    localStorage.setItem('ph_slds_user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
}

// ----------------------------------------------------------------
//  TOAST
// ----------------------------------------------------------------
function showToast(message, type = 'success', title = '') {
    let zone = document.getElementById('slds-toast-zone');
    if (!zone) {
        zone = document.createElement('div');
        zone.id = 'slds-toast-zone';
        zone.className = 'slds-toast-zone';
        document.body.appendChild(zone);
    }

    const iconMap = {
        success: { path: ICON_PATHS.check, color: '#2E844A' },
        error: { path: ICON_PATHS.close, color: '#BA0517' },
        warning: { path: ICON_PATHS.warn, color: '#FE9339' },
        info: { path: ICON_PATHS.info, color: '#0176D3' },
    };
    const ic = iconMap[type] || iconMap.info;
    const id = 'toast-' + Date.now();

    zone.insertAdjacentHTML('beforeend', `
    <div id="${id}" class="slds-toast slds-toast-${type}">
      <svg class="slds-toast__icon" fill="none" stroke="${ic.color}" viewBox="0 0 24 24">${ic.path}</svg>
      <div class="slds-toast__body">
        ${title ? `<div class="slds-toast__title">${title}</div>` : ''}
        <div>${message}</div>
      </div>
      <button class="slds-toast__close" onclick="this.closest('.slds-toast').remove()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICON_PATHS.close}</svg>
      </button>
    </div>`);

    setTimeout(() => { document.getElementById(id)?.remove(); }, 4000);
}

function exportData() {
    showToast('Preparing report for download...', 'info', 'Export');
    setTimeout(() => showToast('Data exported successfully (CSV)', 'success', 'Done'), 1500);
}

// ----------------------------------------------------------------
//  APP LAUNCHER MODAL
// ----------------------------------------------------------------
function toggleAppLauncher() {
    let modal = document.getElementById('slds-app-launcher');
    if (modal) { modal.remove(); return; }

    document.body.insertAdjacentHTML('beforeend', `
    <div id="slds-app-launcher" class="slds-backdrop" onclick="if(event.target===this)this.remove()">
      <div class="slds-modal" style="max-width:720px;">
        <div class="slds-modal__header" style="background:#0176D3;">
          <div style="display:flex;align-items:center;gap:10px;">
            <svg fill="none" stroke="white" viewBox="0 0 24 24" style="width:20px;height:20px;">${ICON_PATHS.apps}</svg>
            <span class="slds-modal__title">App Launcher</span>
          </div>
          <button class="slds-modal__close" onclick="document.getElementById('slds-app-launcher').remove()">×</button>
        </div>
        <div class="slds-modal__body">
          <input class="slds-input" style="margin-bottom:16px;" placeholder="Search apps and items..." oninput="filterApps(this.value)">
          <div id="app-launcher-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
            ${PH_NAV.map(n => `
              <a href="${n.href}" onclick="document.getElementById('slds-app-launcher').remove()"
                 style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px;border:1px solid var(--slds-n7);border-radius:4px;text-decoration:none;transition:background .1s;"
                 onmouseover="this.style.background='#EEF4FF'" onmouseout="this.style.background=''">
                <div class="slds-icon-std ic-${n.icon}" style="width:48px;height:48px;border-radius:12px;">
                  <svg fill="none" stroke="white" viewBox="0 0 24 24" style="width:24px;height:24px;">${ICON_PATHS[n.icon] || ''}</svg>
                </div>
                <span style="font-size:13px;font-weight:600;color:var(--slds-n1);text-align:center;">${n.label}</span>
              </a>`).join('')}
          </div>
        </div>
      </div>
    </div>`);
}

// ----------------------------------------------------------------
//  PAGE INIT
// ----------------------------------------------------------------
function initPage(activePage, pageTitle, tabLabel, tabIcon) {
    checkAuth();

    // If this a record page, open a workspace tab for it
    if (tabLabel && tabLabel !== 'Home' && tabLabel !== 'Dashboard') {
        openTab(activePage + '-' + Date.now(), tabLabel, window.location.href.split('/').pop(), tabIcon || activePage.split('-')[0]);
    }

    // Inject global header
    const ghContainer = document.getElementById('slds-global-header-container');
    if (ghContainer) ghContainer.innerHTML = getGlobalHeaderHTML();

    // Inject app nav
    const navContainer = document.getElementById('slds-app-nav-container');
    if (navContainer) navContainer.innerHTML = getAppNavHTML(activePage);

    // Inject workspace tabs
    const wtContainer = document.getElementById('slds-workspace-tabs-container');
    if (wtContainer) wtContainer.innerHTML = getWorkspaceTabsHTML(activePage);

    // Inject mobile nav drawer (once per page load)
    if (!document.getElementById('slds-mobile-nav-overlay')) {
        document.body.insertAdjacentHTML('beforeend', getMobileNavDrawerHTML(activePage));
    }
}

// ----------------------------------------------------------------
//  MODAL HELPERS
// ----------------------------------------------------------------
function openModal(id) {
    const m = document.getElementById(id);
    if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}

// ----------------------------------------------------------------
//  TABLE SORT
// ----------------------------------------------------------------
function sortTable(tbodyId, colIndex, type = 'string') {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const asc = tbody.dataset.sortAsc !== 'true';
    tbody.dataset.sortAsc = asc;
    rows.sort((a, b) => {
        const av = a.cells[colIndex]?.textContent.trim() || '';
        const bv = b.cells[colIndex]?.textContent.trim() || '';
        if (type === 'number') return asc ? parseFloat(av) - parseFloat(bv) : parseFloat(bv) - parseFloat(av);
        return asc ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    rows.forEach(r => tbody.appendChild(r));
}

// ----------------------------------------------------------------
//  TABS INTERACTION
// ----------------------------------------------------------------
function switchTab(tabId, paneId) {
    // Deactivate all tabs and panes in the same container
    const container = document.querySelector(`[data-tab="${tabId}"]`)?.closest('[data-tab-group]');
    if (!container) return;
    container.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
    container.querySelectorAll('[data-pane]').forEach(p => p.classList.remove('active'));
    // Activate clicked
    document.querySelector(`[data-tab="${tabId}"]`)?.classList.add('active');
    document.querySelector(`[data-pane="${paneId}"]`)?.classList.add('active');
}

// initTabs — auto-wire [data-tab] buttons to [data-pane] panels, within
// an optional [data-tab-group] boundary.  Called by all detail pages.
function initTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
        const tabs = group.querySelectorAll('[data-tab]');
        const panes = group.querySelectorAll('[data-pane]');

        // Ensure at least first tab/pane is active if none is
        if (tabs.length && ![...tabs].some(t => t.classList.contains('active'))) {
            tabs[0].classList.add('active');
            if (panes[0]) panes[0].classList.add('active');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetPaneId = tab.dataset.tab;
                tabs.forEach(t => t.classList.remove('active'));
                panes.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const pane = group.querySelector(`[data-pane="${targetPaneId}"]`);
                if (pane) pane.classList.add('active');
            });
        });
    });

    // Also handle loose [data-tab]/[data-pane] pairs (no group wrapper)
    document.querySelectorAll('[data-tab]:not([data-tab-group] [data-tab])').forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            // find sibling tabs: share the same parent
            const parent = tab.parentElement;
            parent.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('[data-pane]').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const pane = document.querySelector(`[data-pane="${targetId}"]`);
            if (pane) pane.classList.add('active');
        });
    });
}
