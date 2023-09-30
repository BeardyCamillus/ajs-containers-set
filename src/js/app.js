import Team from './team';
import Character from './character';

export const team = new Team();
export const character = new Character('Agent', 'Smith');
export const teamSmith = [{
  name: 'Agent',
  type: 'Smith',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
}];

export const character2 = new Character('Jason', 'Voorhees');
export const coolTeam = [
  {
    name: 'Agent',
    type: 'Smith',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
  {
    name: 'Jason',
    type: 'Voorhees',
    health: 100,
    level: 1,
    attack: 50,
    defence: 50,
  },
];