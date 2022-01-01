import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#303560',
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
    },

    brand:{
        fontWeight: 'bold',
        fontSize :'1.5rem'
    },
    grow:{
        flexGrow: 1,
    },
    split:{
        paddingRight:'15px'
    },
    cardHeight:{
        mainHeight: '20px'
    }
})


export default useStyles;