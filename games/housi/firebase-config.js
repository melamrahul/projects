// Firebase configuration - shared across all pages
const firebaseConfig = {
    apiKey: '0AzyPiDT3wSi6WAuNX7YzbyJcvUgV0nyoxMwahn0',
    authDomain: 'uesi-ap-default-rtdb.firebaseio.com',
    databaseURL: 'https://uesi-ap-default-rtdb.firebaseio.com',
    projectId: 'uesi-ap'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// Shared utility functions
const HousieUtils = {
    // Generate a standard 3x9 ticket with 15 numbers
    generateTicket() {
        const colRanges = [[1,9],[10,19],[20,29],[30,39],[40,49],[50,59],[60,69],[70,79],[80,90]];
        let grid = null, attempts = 0;
        while (attempts < 500 && !grid) {
            attempts++;
            const g = Array(3).fill().map(() => Array(9).fill(null));
            for (let r = 0; r < 3; r++) {
                const cols = [0,1,2,3,4,5,6,7,8].sort(() => Math.random() - 0.5).slice(0, 5);
                cols.forEach(c => g[r][c] = 'fill');
            }
            let ok = true;
            for (let c = 0; c < 9; c++) {
                if (!g[0][c] && !g[1][c] && !g[2][c]) { ok = false; break; }
            }
            if (ok) grid = g;
        }
        if (!grid) return HousieUtils.generateTicket();
        for (let c = 0; c < 9; c++) {
            const [min, max] = colRanges[c];
            const avail = [];
            for (let n = min; n <= max; n++) avail.push(n);
            avail.sort(() => Math.random() - 0.5);
            const rows = [0,1,2].filter(r => grid[r][c] === 'fill');
            rows.forEach((r, i) => grid[r][c] = avail[i]);
        }
        return grid;
    },
    formatTime(ts) {
        if (!ts) return '—';
        return new Date(ts).toLocaleTimeString();
    },
    escapeHtml(s) {
        return String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
    }
};
