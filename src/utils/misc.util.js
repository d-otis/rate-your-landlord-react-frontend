export function formatRating(rating) {
  return rating ? Number(rating).toPrecision(3) : "no reviews yet"
}