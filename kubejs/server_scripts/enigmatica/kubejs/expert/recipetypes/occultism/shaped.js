onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'occultism:divination_rod',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: 'betterendforge:leather_wrapped_stick',
                B: 'eidolon:tattered_cloth',
                C: '#forge:rods/copper',
                D: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/divination_rod'
        },
        {
            output: 'occultism:lenses',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'atum:purple_stained_crystal_glass_pane',
                B: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/lenses'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
