import React from 'react';
import { Dimensions, Text } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';


function ItemDetail(item, visible, hideModal) {
    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={hideModal}
            >
                <Text>{item.title}</Text>
            </Modal>
        </Portal>

    );
};
export default ItemDetail;