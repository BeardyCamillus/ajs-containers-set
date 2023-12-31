export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже добавлен!');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((item) => this.members.add(item));
    }

    toArray() {
        return Array.from(this.members);
    }
}