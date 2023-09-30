import {
  team, character, teamSmith, character2, coolTeam,
} from '../app';

test('Добавление персонажа', () => {
  team.add(character);
  expect(team.toArray()).toEqual(teamSmith);
});

test('Дубликат персонажа', () => {
  expect(() => {
    team.add(character);
    team.add(character);
  }).toThrow(new Error('Этот персонаж уже добавлен!'));
});

test('Добавление двух и более персонажей', () => {
  team.addAll(character, character2);
  expect(team.toArray()).toEqual(coolTeam);
});
