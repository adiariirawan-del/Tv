// Fullscreen functionality for TV Online App
class FullscreenManager {
    constructor() {
        this.isFullscreen = false;
    }

    enterFullscreen() {
        const element = document.documentElement;
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

        this.isFullscreen = true;
        document.body.classList.add('fullscreen');
        this.updateFullscreenButton();
    }

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        this.isFullscreen = false;
        document.body.classList.remove('fullscreen');
        this.updateFullscreenButton();
    }

    toggleFullscreen() {
        if (this.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }

    updateFullscreenButton() {
        const btn = document.getElementById('fullscreenBtn');
        if (this.isFullscreen) {
            btn.textContent = '⛶ Exit Fullscreen';
        } else {
            btn.textContent = '⛶ Fullscreen';
        }
    }
}

// Add to TVOnlineApp class
TVOnlineApp.prototype.enterFullscreen = function() {
    this.fullscreenManager = this.fullscreenManager || new FullscreenManager();
    this.fullscreenManager.enterFullscreen();
    this.isFullscreen = true;
};

TVOnlineApp.prototype.exitFullscreen = function() {
    if (this.fullscreenManager) {
        this.fullscreenManager.exitFullscreen();
        this.isFullscreen = false;
    }
};

TVOnlineApp.prototype.toggleFullscreen = function() {
    this.fullscreenManager = this.fullscreenManager || new FullscreenManager();
    this.fullscreenManager.toggleFullscreen();
    this.isFullscreen = !this.isFullscreen;
};
