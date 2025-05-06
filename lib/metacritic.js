import gamesData from './data.json'

export async function getLatestGames() {
  // const LATEST_GAMES =
  //   'https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u'

  // const rawData = await fetch(LATEST_GAMES)
  // const json = await rawData.json()

  const {
    data: { items },
  } = gamesData

  return items.map((item) => {
    const {
      description,
      slug,
      releaseDate,
      image,
      criticScoreSummary,
      title,
      rating,
    } = item
    const { score } = criticScoreSummary

    // crea la imagen
    const { bucketType, bucketPath } = image
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
      rating,
    }
  })
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`

  const rawData = await fetch(GAME_DETAILS)
  const json = await rawData.json()

  const { components } = json
  const {
    title,
    description,
    criticScoreSummary,
    images,
    platforms,
    releaseDate,
    rating,
    production: { companies },
  } = components[0].data.item
  const { score, max } = criticScoreSummary

  // get the card image
  const cardImage = images.find((image) => image.typeName === 'cardImage')
  const { bucketType, bucketPath } = cardImage
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`

  const company = companies[1].name

  const rawReviews = components[4].data.items

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review
    return { quote, score, date, publicationName, author }
  })

  return {
    img,
    title,
    slug,
    description,
    releaseDate,
    score,
    maxScore: max,
    reviews,
    platforms,
    rating,
    company,
  }
}
