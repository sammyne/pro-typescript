// Listing 1-75. Class heritage

interface Audio {
  play(): any
}

class Song implements Audio {
  constructor(private artist: string, private title: string) {}

  play(): void {
    console.log("Playing " + this.title + " by " + this.artist)
  }

  static Comparer(a: Song, b: Song): number {
    if (a.title === b.title) {
      return 0
    }
    return a.title > b.title ? 1 : -1
  }
}

class Playlist {
  constructor(public songs: Song[]) {}

  play(): void {
    const song = this.songs.pop()
    song && song.play()
  }

  sort() {
    this.songs.sort(Song.Comparer)
  }
}

class RepeatingPlaylist extends Playlist {
  private songIndex = 0

  constructor(songs: Song[]) {
    super(songs)
  }

  play() {
    this.songs[this.songIndex].play()

    this.songIndex++

    if (this.songIndex >= this.songs.length) {
      this.songIndex = 0
    }
  }
}
