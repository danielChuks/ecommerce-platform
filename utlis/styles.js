import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203045',
        // to add an anchor to the nav bar and to access a child use (&)
        '& a': {
            color: '#ffffff',
            marginLeft:10,
        },

    },

    main:{
        mainHeight: "80vh"
    },

    footer:{
        textAlign : 'center',
        padding : '30px',
        backgroundColor: '#203045',
        color: '#ffffff'
    }
})


export default useStyles;