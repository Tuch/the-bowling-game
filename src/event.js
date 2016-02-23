class EventEmitter {
    constructor () {
        this._events = [];
    }

    on (name, listener) {
        this._events.push({name: name, listener: listener});

        return this;
    }

    off (name) {
        this._events = this._events.filter(event => event.name !== name);

        return this;
    }

    trigger (name, payload) {
        this._events.forEach((e) => {
            if (e.name === name) {
                e.listener(payload);
            }
        });

        return this;
    }
}

export default new EventEmitter();
