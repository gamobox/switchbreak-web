const GITHUB = {
  GISTS: 'https://api.github.com/users/switchbreakinfo/gists',
  ACCESS_TOKEN: '2a1450f24e0a149592c8cb15de2d8fa222d26fd3'
}

export default {
  GISTS: `${GITHUB.GISTS}?access_token=${GITHUB.ACCESS_TOKEN}`
}
