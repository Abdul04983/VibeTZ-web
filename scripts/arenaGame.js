class ArenaGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.score = { [player1]: 0, [player2]: 0 };
  }

  goal(player) {
    if (this.score[player] !== undefined) {
      this.score[player]++;
    }
  }

  getWinner() {
    const [p1, p2] = Object.keys(this.score);
    if (this.score[p1] > this.score[p2]) return p1;
    if (this.score[p2] > this.score[p1]) return p2;
    return 'draw';
  }

  getStatus() {
    return this.score;
  }
}

module.exports = ArenaGame;
