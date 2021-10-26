import { createTheme } from "@material-ui/core/styles";

// colors variables

const primaryblue = "#3A47D0";
const primarybluelight = "#4A56D3";
const secondaryblue = "#D0DFFA";
const secondarybluelight = "#EDF2FD";


const theme = createTheme({
    palette: {
        primary: {
            main: primaryblue,
            light: primarybluelight,
        },
        secondary: {
            main: secondaryblue,
            light: secondarybluelight,
        },
    },
});

export default theme;
