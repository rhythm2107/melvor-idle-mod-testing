export function setup(ctx) {
    ctx.settings.section('General').add(
    {
        type: 'number',
        name: 'xp-multiplier',
        label: 'XP Multiplier',
        hint: 'Multiply all XP gains by this amount',
        default: 1
    },
    {
        type: 'text',
        name: 'Babuś',
        label: 'Babuś babus babus',
        hint: 'Babuuuuś babus buus bus bus to jest zwierze',
        default: 'Babuś'
    }
  );
  
    ctx.patch(Skill, 'addXP').before(function(amount, masteryAction) {
      const xpMultiplier = ctx.settings.section('General').get('xp-multiplier');
      return [amount * xpMultiplier, masteryAction];
    });
  }