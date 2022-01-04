import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#303060',
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
        padding : 30,
        marginTop: 10
    },

    brand:{
        fontWeight: 'bold',
        fontSize :'1.5rem',
        fontFamily: "serif"
        
    },
    grow:{
        flexGrow: 1,
    },
    split:{
        paddingRight:'15px',
        fontFamily: "serif"
    },
    cardHeight:{
        mainHeight: '20px'
    },

    section: {
        marginTop: 10,
        marginBottom: 10
    },
    size:{
        height: 500
    },
    head: {
        fontFamily: "serif",
    },
    line:{
        marginTop: "15px",
        marginRight: "10px"
    }
})


export default useStyles;