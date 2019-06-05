/**
 * Mocking client-server processing
 */
const _columns = [
  {
    id: 1559737641692,
    name: 'Social',
    links: [
      {
        id: 1559737642318,
        name: 'Facebook',
        url: 'https://facebook.com'
      },
      {
        id: 1559737642903,
        name: 'Twitter',
        url: 'https://twitter.com'
      }
    ]
  },
  {
    id: 1559737643650,
    name: 'Development',
    links: [
      {
        id: 1559737644750,
        name: 'Dev.to',
        url: 'https://dev.to'
      },
      {
        id: 1559737705702,
        name: 'Hashnode',
        url: 'https://hashnode.com/'
      },
      {
        id: 1559737706272,
        name: 'CSSTricks',
        url: 'https://css-tricks.com/'
      },
      {
        id: 1559737720470,
        name: 'Alligator.io',
        url: 'https://alligator.io'
      }
    ]
  }
]

export default {
  getColumn (cb) {
    setTimeout(() => cb(_columns), 100)
  }
}
