// Video.js
import { AElement } from '../AElement.js';

class Video extends AElement {
    constructor(src) {
        super('video');
        this.element.src = src || '';
    }

    setSrc(src) {
        this.element.src = src || '';
        return this;
    }

    play() {
        this.element.play();
        return this;
    }

    pause() {
        this.element.pause();
        return this;
    }

    setAutoplay(autoplay) {
        this.element.autoplay = autoplay;
        return this;
    }

    setControls(controls) {
        this.element.controls = controls;
        return this;
    }

    setLoop(loop) {
        this.element.loop = loop;
        return this;
    }

    setMuted(muted) {
        this.element.muted = muted;
        return this;
    }

    setCurrentTime(time) {
        this.element.currentTime = time;
        return this;
    }

    setPlaybackRate(rate) {
        this.element.playbackRate = rate;
        return this;
    }

    setPoster(poster) {
        this.element.poster = poster;
        return this;
    }

    setPreload(preload) {
        this.element.preload = preload;
        return this;
    }

    setVolume(volume) {
        this.element.volume = volume;
        return this;
    }
}

export { Video };