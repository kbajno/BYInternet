/**
 * Mocking client-server processing
 */
const _columns = [
  {
    name: 'Social',
    links: [
      {
        name: 'Facebook',
        url: 'https://facebook.com'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com'
      }
    ]
  },
  {
    name: 'Development',
    links: [
      {
        name: 'Dev.to',
        url: 'https://dev.to'
      },
      {
        name: 'Hashnode',
        url: 'https://hashnode.com/'
      },
      {
        name: 'CSSTricks',
        url: 'https://css-tricks.com/'
      },
      {
        name: 'Alligator.io',
        url: 'https://alligator.io'
      }
    ]
  }
]

export default {
  getColumns (cb) {
    setTimeout(() => cb(_columns), 100)
  }

  // buyProducts (products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
  //       ? cb()
  //       : errorCb()
  //   }, 100)
  // }
}
