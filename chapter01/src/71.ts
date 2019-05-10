// Listing 1-71. Constructors

class Song {
  constructor(private artist: string, private title: string) {}

  play(): void {
    console.log("Playing " + this.title + " by " + this.artist)
  }
}

class Jukebox {
  constructor(private songs: Song[]) {}

  play(): void {
    const song = this.getRandomSong()
    song.play()
  }

  private getRandomSong(): Song {
    const songCount = this.songs.length
    const songIndex = Math.floor(Math.random() * songCount)

    return this.songs[songIndex]
  }
}

const songs = [
  new Song("Bushbaby", "Megaphone"),
  new Song("Delays", "One More Lie In"),
  new Song("Goober Gun", "Stereo"),
  new Song("Sohnee", "Shatter"),
  new Song("Get Amped", "Celebrity"),
]

const jukebox = new Jukebox(songs)

jukebox.play()

// export Song for external reference
export { Song }
