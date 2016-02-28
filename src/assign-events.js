function snakeToCamel (string) {
    return string.replace(/(\-\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}

function createEventListener (context, eventsHash) {
    return function (e) {
        for (var attrName in eventsHash) {
            let hash = eventsHash[attrName];
            let attr = e.target.attributes[attrName];

            if (attr) {
                let action = attr.value;
                let listenerName = hash.listenerNames[action];

                if (!listenerName) {
                    listenerName = hash.listenerNames[action] = snakeToCamel(`on-${hash.component}-${action}-${hash.eventName}`);
                }

                if (context[listenerName]) {
                    context[listenerName].call(context, e);
                }
                break;
            }
        }
    }
}

export default function assignEvents (context, events) {
    Object.keys(events).forEach((eventName) => {
        let eventsHash = events[eventName].reduce((acc, component) => {
            acc[`data-${component}`] = { component, eventName, listenerNames: {} };

            return acc;
        }, {});

        document.addEventListener(eventName, createEventListener(context, eventsHash));
    });
}
