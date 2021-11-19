export default class Song {
  construction({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}
