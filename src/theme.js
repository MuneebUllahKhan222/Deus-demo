import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
    palette:{
        primary:{
            main:'#2d95e3',
        }
    },
    typography:{
        button:{
            textTransform:'none'
        },
        fontFamily: ['Roboto'].join(','),
        // fontFamily:[  'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',  'Roboto', "Helvetica Neue", 'Arial', 'sans-serif',].join(','),
    },
     breakpoints:{
        keys: ["xs", "xssm" ,"sm", "smmd" ,"md", "mdlg","lg", "lgxl","xl", "xxl"],
        values: { xs: 0, xssm:440,sm: 600, smmd:750,md: 900, mdlg:1000,lg: 1200, lgxl:1400,xl: 1600, xxl: 1800 }
     }
})

theme = responsiveFontSizes(theme);
export default theme;