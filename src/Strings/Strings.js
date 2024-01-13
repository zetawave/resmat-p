/* eslint-disable no-multi-spaces */

import LocalizedStrings from 'react-localization'

const string  = require('./translations.json')
const strings = new LocalizedStrings(string)
strings.setLanguage('it')

export default strings
