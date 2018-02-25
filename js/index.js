var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.startTimer();
    },

    startTimer: function() {
        // note, we use a closure
        setInterval ((function () {
            var d = null;
            var h = null;
            var m = null;
            // this is the function that gets called
            return function () {
                var checkAndUpdateTime = function () {
                    d_ = new Date();
                    h_ = d_.getHours();
                    m_ = d_.getMinutes();
                    if (m != m_) {
                        d = d_;
                        h = h_;
                        m = m_;
                        app.updateDisplay (h, m);
                    }
                };
                /* var updateCircle = function () {
                    circleElem = document.getElementById ('progress-circle')
                        .querySelector ('circle');
                    radius = circleElem.getAttribute ('r');
                    circumference = 2 * Math.PI * radius;
                    circleElem.style['strokeDasharray'] = circumference;
                    percent = circumference *
                        (1 - (new Date().getSeconds() / 60.0));
                    circleElem.style['strokeDashoffset'] = percent;
                }; */
                checkAndUpdateTime();
                // updateCircle();
            };
        })(), 500);
    },

    updateDisplay: function (h, m) {
        var updateMainTime = function () {
            timeStr = ("0" + h).slice (-2) +
                ":" +
                ("0" + m).slice(-2);
            timeElem = document.getElementById ('clock')
                .querySelector ('.time');
            timeElem.innerHTML = timeStr;
        };
        var updateDivisions = function () {
            n = h * 100 + m;
            for (i = 0; i < 4; i++) {
                divisionElem = document.getElementById ('division-' + (i + 1));
                divisionElem.innerHTML = n;
                n /= 2;
            }
        };
        var updateMessage = function () {
            messageElem = document.getElementById ('message');
            if (h == 11 && m == 11) {
                messageElem.innerHTML = 'make a wish';
            } else {
                messageElem.innerHTML = '';
            }
        };
        updateMainTime();
        updateDivisions();
        updateMessage();
    }
};
