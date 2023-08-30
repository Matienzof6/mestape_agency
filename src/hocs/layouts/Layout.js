import { connect } from 'react-redux'
import { motion } from 'framer-motion'

function Layout({children}){
    return(
        <motion.div
        initial={{opacity: 0, }}
        animate={{opacity: 2, }}
        exit={{opacity:0, }}
        transition= {{ duration: 1.5 }}
        >
            {children}
        </motion.div>
    )
}


const mapStateToProps = state =>({

})


export default connect(mapStateToProps,{

}) (Layout)