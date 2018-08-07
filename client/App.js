import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {indigo, pink} from 'material-ui/colors'


const theme = createMuiTheme({
    palette: {
        primary: {
        light: '#66ffff',
        main: '#00d2d6',
        dark: '#00a0a5',
        contrastText: '#000000',
    },
    secondary: {
        light: '#efffff',
        main: '#bbf7ff',
        dark: '#89c4cc',
        contrastText: '#000000',
    },
        openTitle: teal['400'],
        protectedTitle: teal['400'],
        type: 'light'
    }
})