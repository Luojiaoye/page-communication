"use strict";
// communication module
var Communication;
(function (Communication) {
    var PageSocket = /** @class */ (function () {
        /**
         * socket communication between pages
         * @param context otherwindow
         * @param target otherwindow origin
         */
        function PageSocket(context, target) {
            this._context = context;
            this._target = target;
            window.addEventListener("message", this.receiveMessage, false);
        }
        PageSocket.prototype.receiveMessage = function (event) {
            var origin = event.origin || event.originalEvent.origin;
            if (origin !== this._target)
                return;
        };
        /**
         * send data to the destination page
         * @param data string or arraybuffer
         */
        PageSocket.prototype.send = function (data) {
            this._context.postMessage(data, this._target);
        };
        return PageSocket;
    }());
    Communication.PageSocket = PageSocket;
})(Communication || (Communication = {}));
