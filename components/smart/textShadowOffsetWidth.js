import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet,Text, Slider} from 'react-native';
import { connect } from 'react-redux';
import dimensionsObj from '../../dimensions';

//icon
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
//@actions
import {renderTextShadowWidth} from '../../src/actions/renderOrNotActions';
import {changeTextShadowOffsetWidth} from '../../src/actions/changeTextShadowActions';
class TextShadowOffsetWidth extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
          }}
        > 
            <View style={{flex:1}}>
             {/*EMPTY COMPONENT FOR DESIGN PURPOSES*/} 
            </View>
            <View style={{flex:4,textAlign:'center',justifyContent:'center',alignItems:'center'}}>
              <Text style={{marginTop:10,color:'white'}}>Text Shadow Width</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginTop:5,marginLeft:5}}>
              <TouchableOpacity onPress={() => {
                this.props.renderTextShadowWidth();
                console.log(this.props.designBoxReducer)
              }}>
              <IconSimple
                style={{marginLeft:0,marginRight:0}}
                name="close"
                size={dimensionsObj.designBoxHeight * 1 / 5}
                color="white"
              />
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <Slider
            onValueChange={(value) => this.props.changeTextShadowOffsetWidth(value)}
            minimumTrackTintColor="gray"
            maximumTrackTintColor="white"
            minimumValue={0}
            maximumValue={10}
            value= {this.props.changeTextShadowReducer.textShadowOffset.width}
            style={{height: 50,width: dimensionsObj.designBoxWidth-20}}
          />
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: dimensionsObj.designBoxHeight,
    width: dimensionsObj.designBoxWidth,
    backgroundColor: 'rgba(0,0,0,.8)',
    borderRadius: 10,
    zIndex:1,
    position:'absolute',
    marginBottom:10
  },
});

mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps,{
    changeTextShadowOffsetWidth,
    renderTextShadowWidth
})(TextShadowOffsetWidth);
