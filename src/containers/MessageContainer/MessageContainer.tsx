import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {HeaderApp} from '../../components';
import {colors, images} from '../../res';
import FooterButton from '../../components/footer-button/footer-button';
import MessageScreen from '../../screens/Message/MessageScreen';
import {getAllRoomChatByUIDAction} from '../../redux/actions';
import {connect, ConnectedProps} from 'react-redux';
import {deleteRoomAction} from '../../redux/actions/delete-room';

function MessageContainer(props: PropsFromRedux) {
  const [refScrollView, setRefScrollView] = React.useState(null);
  const [isScrollDown, setIsScrollDown] = React.useState(false);
  const iconRight: any = {name: images.ic_menu, size: 30, color: colors.white};
  const container: ViewStyle = {flex: 1};
  return (
    <SafeAreaView style={container}>
      <HeaderApp
        title="Message"
        iconRight={iconRight}
        onPressIconRight={() => {}}
      />
      <MessageScreen
        getRefScrollView={(value: any) => setRefScrollView(value)}
        getIsScrollDown={(value: boolean) => setIsScrollDown(value)}
        {...props}
      />
      <FooterButton refScrollView={refScrollView} isScrollDown={isScrollDown} />
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllRoomChatByUIDAction: () => {
      dispatch(getAllRoomChatByUIDAction());
    },
    deleteRoomAction: (roomId: number) => {
      dispatch(deleteRoomAction(roomId));
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    fetchingGetAllRoomChat: state.getAllRoomChatByUIDReducer.fetching,
    dataGetAllRoomChat: state.getAllRoomChatByUIDReducer.data,
    messageGetAllRoomChat: state.getAllRoomChatByUIDReducer.message,
    dataDeleteRoom: state.deleteRoomReducer.data,
    messageDeleteRoom: state.deleteRoomReducer.message,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MessageContainer);
