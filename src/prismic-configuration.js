
// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const repoName = 'armfieldbuilders'
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/graphql`

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') return `/page/${doc.uid}`
  return '/'
}
 