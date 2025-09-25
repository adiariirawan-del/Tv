// TV Channel Data - 20 Channel TV Indonesia
class TVOnlineApp {
    constructor() {
        this.channels = this.getChannelData();
        this.currentChannel = null;
        this.isFullscreen = false;
        this.init();
    }

    init() {
        this.loadChannels();
        this.setupEventListeners();
        this.updateTime();
        this.setupServiceWorker();
    }

    getChannelData() {
        return [
            {
                id: 'tvri',
                name: 'TVRI',
                logo: '📺',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC1Se5S0-3A29AXM21Aef9iQ',
                description: 'Televisi Republik Indonesia'
            },
            {
                id: 'rcti',
                name: 'RCTI',
                logo: '🎬',
                category: 'entertainment', 
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC6Lhe5iYgKll1-3yUfhXpOA',
                description: 'Rajawali Citra Televisi Indonesia'
            },
            {
                id: 'sctv',
                name: 'SCTV',
                logo: '🌟',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC9v2S0awR2Ld6jN1n-hMTcg',
                description: 'Surya Citra Televisi'
            },
            {
                id: 'indosiar',
                name: 'Indosiar',
                logo: '📡',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWdQqgPk7CkQkO1nTqLQd1Q',
                description: 'Indosiar Visual Mandiri'
            },
            {
                id: 'trans7',
                name: 'Trans7',
                logo: '7️⃣',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC3LdM8KsuU1JlVCJ0CJvY-g',
                description: 'Trans7 Entertainment'
            },
            {
                id: 'transtv',
                name: 'Trans TV',
                logo: '📺',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCp_XpVwO6dR6gQ-4qgqQ1-w',
                description: 'Trans TV Nasional'
            },
            {
                id: 'antv',
                name: 'ANTV',
                logo: '🔴',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Andalas Televisi'
            },
            {
                id: 'gtv',
                name: 'GTV',
                logo: '🎯',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Global TV'
            },
            {
                id: 'metrotv',
                name: 'Metro TV',
                logo: '🏢',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCp_XpVwO6dR6gQ-4qgqQ1-w',
                description: 'Metro TV News'
            },
            {
                id: 'kompastv',
                name: 'Kompas TV',
                logo: '📰',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Kompas Televisi'
            },
            {
                id: 'tvone',
                name: 'TV One',
                logo: '1️⃣',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'TV One News'
            },
            {
                id: 'inewstv',
                name: 'iNews TV',
                logo: '📡',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'iNews Television'
            },
            {
                id: 'beritasatu',
                name: 'Berita Satu',
                logo: '🗞️',
                category: 'news',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Berita Satu TV'
            },
            {
                id: 'mnctv',
                name: 'MNCTV',
                logo: '🌙',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Media Nusantara Citra'
            },
            {
                id: 'rtv',
                name: 'RTV',
                logo: '📻',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Rajawali Televisi'
            },
            {
                id: 'netTV',
                name: 'NET TV',
                logo: '🕸️',
                category: 'entertainment',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'NET Television'
            },
            {
                id: 'jatengtv',
                name: 'Jateng TV',
                logo: '🏔️',
                category: 'regional',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'TV Regional Jawa Tengah'
            },
            {
                id: 'baliTV',
                name: 'Bali TV',
                logo: '🏝️',
                category: 'regional',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Televisi Bali'
            },
            {
                id: 'daaitv',
                name: 'Daai TV',
                logo: '☸️',
                category: 'religion',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Da Ai Television'
            },
            {
                id: 'tvMu',
                name: 'TV Mu',
                logo: '🕌',
                category: 'religion',
                streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCWq4eTvq4eTvq4eTvq4eTvq',
                description: 'Televisi Muslim'
            }
        ];
    }

    loadChannels() {
        const channelGrid = document.getElementById('channelGrid');
        channelGrid.innerHTML = '';

        this.channels.forEach(channel => {
            const channelCard = document.createElement('div');
            channelCard.className = 'channel-card';
            channelCard.innerHTML = `
                <div class="channel-logo">${channel.logo}</div>
                <div class="channel-name">${channel.name}</div>
                <div class="channel-category">${this.getCategoryLabel(channel.category)}</div>
            `;
            channelCard.addEventListener('click', () => this.changeChannel(channel));
            channelGrid.appendChild(channelCard);
        });

        // Load TV Guide
        this.loadTVGuide();
    }

    getCategoryLabel(category) {
        const labels = {
            'news': 'Berita',
            'entertainment': 'Hiburan',
            'sports': 'Olahraga',
            'education': 'Edukasi',
            'regional': 'Regional',
            'religion': 'Religi'
        };
        return labels[category] || 'Umum';
    }

    async changeChannel(channel) {
        this.showLoading();
        
        try {
            // Update UI
            document.querySelectorAll('.channel-card').forEach(card => {
                card.classList.remove('active');
            });
            event.target.classList.add('active');

            document.getElementById('currentChannelName').textContent = channel.name;
            document.getElementById('currentProgram').textContent = channel.description;

            // Load stream
            const tvStream = document.getElementById('tvStream');
            const playerPlaceholder = document.querySelector('.player-placeholder');
            
            playerPlaceholder.classList.add('hidden');
            tvStream.classList.remove('hidden');
            tvStream.src = channel.streamUrl;

            this.currentChannel = channel;

            // Hide loading after stream loads
            setTimeout(() => {
                this.hideLoading();
            }, 3000);

        } catch (error) {
            this.showError('Gagal memuat siaran channel: ' + channel.name);
            this.hideLoading();
        }
    }

    loadTVGuide() {
        const guideContainer = document.getElementById('tvGuide');
        const programs = this.generateTVGuide();
        
        guideContainer.innerHTML = programs.map(program => `
            <div class="guide-item">
                <span><strong>${program.channel}</strong> - ${program.title}</span>
                <span>${program.time}</span>
            </div>
        `).join('');
    }

    generateTVGuide() {
        // Simulated TV guide data
        return [
            { channel: 'RCTI', title: 'Sinetron Terbaru', time: '19:00-20:00' },
            { channel: 'SCTV', title: 'Film Nasional', time: '20:00-22:00' },
            { channel: 'TVRI', title: 'Berita Nasional', time: '19:00-20:00' },
            { channel: 'Trans TV', title: 'Acara Varietas', time: '18:00-19:00' },
            { channel: 'Metro TV', title: 'Breaking News', time: '19:30-20:30' }
        ];
    }

    setupEventListeners() {
        // Category filter
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterChannels(e.target.dataset.category);
                
                // Update active tab
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'f' || e.key === 'F') {
                this.toggleFullscreen();
            } else if (e.key === 'Escape' && this.isFullscreen) {
                this.exitFullscreen();
            }
        });

        // Online/offline detection
        window.addEventListener('online', () => this.showMessage('Koneksi internet tersedia'));
        window.addEventListener('offline', () => this.showError('Koneksi internet terputus'));
    }

    filterChannels(category) {
        const channels = document.querySelectorAll('.channel-card');
        
        channels.forEach((card, index) => {
            if (category === 'all' || this.channels[index].category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    showLoading() {
        document.getElementById('loadingOverlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }

    showError(message) {
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('errorModal').classList.remove('hidden');
    }

    showMessage(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 3000;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }

    updateTime() {
        const timeElement = document.getElementById('currentTime');
        setInterval(() => {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('id-ID');
        }, 1000);
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered for TV Online');
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        }
    }
}

// Global functions for HTML onclick
function toggleFullscreen() {
    const tvApp = window.tvApp;
    if (!tvApp.isFullscreen) {
        tvApp.enterFullscreen();
    } else {
        tvApp.exitFullscreen();
    }
}

function muteToggle() {
    const iframe = document.getElementById('tvStream');
    const muteBtn = document.getElementById('muteBtn');
    
    // This is a simplified mute toggle
    // In real implementation, you'd need to communicate with the iframe
    muteBtn.textContent = muteBtn.textContent === '🔊' ? '🔇' : '🔊';
}

function refreshStream() {
    const iframe = document.getElementById('tvStream');
    const currentSrc = iframe.src;
    iframe.src = '';
    setTimeout(() => {
        iframe.src = currentSrc;
    }, 100);
}

function shareChannel() {
    const app = window.tvApp;
    if (app.currentChannel && navigator.share) {
        navigator.share({
            title: `Nonton ${app.currentChannel.name} Live`,
            text: `Sedang menonton ${app.currentChannel.name} di TV Online Indonesia`,
            url: window.location.href
        });
    } else {
        alert(`Bagikan tautan ini untuk menonton ${app.currentChannel.name}: ${window.location.href}`);
    }
}

function closeErrorModal() {
    document.getElementById('errorModal').classList.add('hidden');
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tvApp = new TVOnlineApp();
});
