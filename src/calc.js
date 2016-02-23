export default function (state) {
    let rows = [];
    let colsList = [1,2,3,4,5,6,7,8,9,10];

    let row = {
        isHead: true,
        cols: colsList.map((val, index) => {
            return {text: index + 1};
        })
    };

    row.cols.unshift({
        isLeft: true,
        text: state.timer || '00:00'
    });

    rows.push(row);

    rows.push.apply(rows, state.players.map((player) => {
        var cols = [{
            isLeft: true,
            text: player.name
        }];

        cols = cols.concat(colsList.map((val, index) => {
            return {
                strike: false,
                first: 7,
                second: 2,
                total: 9
            };
        }))

        return {
            isHead: false,
            cols
        };
    }));

    return {
        rows
    };
}
