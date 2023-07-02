'use strict';
(function () {
    const player1 = { id: 1, name: 'Иван', level: 10 };
    const newWeakSet = new WeakSet();

    const addPlayerToLevelSet = player => {
        if (player.level >= 10) {
            newWeakSet.add(player);
        }
    };

    addPlayerToLevelSet(player1);
})()
