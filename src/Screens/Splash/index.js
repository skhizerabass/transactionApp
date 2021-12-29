import React, { useEffect } from 'react';
import {
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import styles from './styles';

const Splash = ({
    updateToken
}) => {
    const success = () => {

    }

    const failure = () => {

    }

    useEffect(() => {
        setTimeout(() => {
            // props.updateToken({
            //     success: success(),
            //     failure: failure()
            // })
            updateToken({
                success: success(),
                failure: failure()
            })
        }
            , 2000)
    }, []);
    return (
        <View style={styles.mainContainer}>
            <Image
                source={require('../../../assets/Images/splash.png')}
                style={styles.screenOneImage}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    updateToken: (payload) => dispatch(actionCreators.updateToken(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Splash);
