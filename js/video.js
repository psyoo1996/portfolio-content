var vid = document.getElementById("videoplayer");

function disableLoop() {
    vid.loop = false;
    vid.load();
}

document.getElementById("play").onclick = function() {
    play()
};

function play() {
  vid.play();
  vid.playbackRate = 1.0;
}

document.getElementById("pause").onclick = function() {
    pause()
};

function pause() {
    vid.pause();
}

document.getElementById("slower").onclick = function() {
    slower()
};

function slower() {
    if (vid.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
    }
    else if (vid.playbackRate == 1.0) {
        vid.playbackRate = 0.5;
    }
    else if (vid.playbackRate == 2.0) {
        vid.playbackRate = 1.0;
    }
}

document.getElementById("faster").onclick = function() {
    faster()
};

function faster() {
    if (vid.playbackRate == 0.5) {
        vid.playbackRate = 1.0;
    }
    else if (vid.playbackRate == 1.0) {
        vid.playbackRate = 2.0;
    }
    else if (vid.playbackRate == 2.0) {
        alert("Video is at fastest speed!");
    }
}

document.getElementById("skip").onclick = function() {
    skip()
};

function skip() {
    if (vid.currentTime < 804) {
        vid.currentTime += 15;
    }
    else if (vid.currentTime >= 804) {
        vid.currentTime = 0;
    }
}

document.getElementById("back").onclick = function() {
    back()
};

function back() {
    if (vid.currentTime < 804) {
        vid.currentTime -= 15;
    }
}

document.getElementById("mute").onclick = function() {
    mute()
};

function mute() {
    if (vid.muted == true) {
        vid.muted = false;
        document.getElementById("mute").innerHTML = "Mute";
    }
    else {
        vid.muted = true;
        document.getElementById("mute").innerHTML = "Unmute";
    };
}

document.getElementById("slider").onchange = function() {
    slider()
};

function slider () {
    vid.volume = document.getElementById("slider").value / 100;
    document.getElementById("volume").innerHTML = document.getElementById("slider").value;
}




