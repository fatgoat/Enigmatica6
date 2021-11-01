onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            result: { item: 'rftoolsstorage:storage_module1' },
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:copper_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module0' }
            },
            id: 'rftoolsstorage:storage_module1'
        },
        {
            result: { item: 'rftoolsstorage:storage_module2' },
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:silver_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module1' }
            },
            id: 'rftoolsstorage:storage_module2'
        },
        {
            result: { item: 'rftoolsstorage:storage_module3' },
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:diamond_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module2' }
            },
            id: 'rftoolsstorage:storage_module3'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mcjtylib:copy_nbt';
        event.custom(recipe).id(recipe.id);
    });
});