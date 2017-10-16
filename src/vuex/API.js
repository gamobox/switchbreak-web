const GITHUB = {
  GISTS: 'https://api.github.com/users/switchbreakinfo/gists',
  ACCESS_TOKEN: '55f331843255bdc34eab6a1e5a5f719a28dec5c9'
}

export default {
  GISTS: `${GITHUB.GISTS}?access_token=${GITHUB.ACCESS_TOKEN}`
}
