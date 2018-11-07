// communication module
module Communication {
    export class PageSocket {
        private _context: any;
        private _target: string;

        /**
         * socket communication between pages
         * @param context otherwindow
         * @param target otherwindow origin
         */
        public constructor(context: any, target: string) {
            this._context = context;
            this._target = target;
            window.addEventListener("message", this.receiveMessage, false);
        }

        private receiveMessage(event: any) {
            let origin: any = event.origin || event.originalEvent.origin;
            if (origin !== this._target)
                return;


        }

        /**
         * send data to the destination page
         * @param data string or arraybuffer
         */
        public send(data: any): void {
            this._context.postMessage(data, this._target);
        }
    }
}