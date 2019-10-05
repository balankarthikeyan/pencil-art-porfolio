export const fromVariantToGrid = variant => {
  console.log('-- variant: ', variant)
  // const maxWidth = 100 / (variant + 1) + '%'
  switch (variant) {
    /* Extra Large */
    case 0:
      return {
        column: 12,
        row: 13,
        count: 1,
        height: 0,
        imageHeight: 0,
        productDetailHeight: 154,
      }

    /* Huge */
    case 1:
      return {
        column: 8,
        row: 6,
        count: 2,
        height: 400,
        imageHeight: 0,
        productDetailHeight: 154,
      }

    /* Large */
    case 2:
      return {
        column: 6,
        row: 9,
        count: 1,
        height: 400,
        imageHeight: 0,
        productDetailHeight: 230,
      }

    /* Medium -2 */
    case 4:
      return {
        column: 4,
        row: 3,
        count: 2,
        height: 200,
        imageHeight: 0,
        productDetailHeight: 90,
      }

    /* Small */
    case 5:
      return {
        column: 2,
        row: 3,
        count: 1,
        height: 200,
        imageHeight: 0,
        productDetailHeight: 90,
      }

    /* Medium */
    case 3:
    default:
      return {
        column: 4,
        row: 6,
        count: 1,
        height: 200,
        imageHeight: 0,
        productDetailHeight: 154,
      }
  }
}
