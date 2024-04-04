import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ModalComponent from '../ModalComponent';
import { ModalInterface } from '../../../../infrastructure/interfaces/Modal';
import Video from 'react-native-video';
import { Icon } from '@ui-kitten/components';
import { KanjiDetail } from '../../../../domain/entities/kanjiDetail';

interface Props extends ModalInterface {
  data: KanjiDetail
}

const ModalViewVideo = ({modalVisible, setModalVisible, data}: Props) => {
  
  const [videoPaused, setVideoPaused] = useState(true);
  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const vidRef = useRef<any>(null);

  const onVideoEnd = () => {
    setVideoPaused(true);
    setVideoHasEnded(true);
  }

  const onReplay = () => {
    vidRef.current.seek(0);
    setVideoHasEnded(false);
    setVideoPaused(false);
  }

  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text style={styles.modalText}>strokes: {data.strokes.count}</Text>
      <View style={styles.buttonReplayContainer}>
          <Video source={{uri: data.video.mp4}}   // Can be a URL or a local file.
              ref={vidRef}                                      // Store reference
              // onBuffer={() => onBuffer()}                // Callback when remote video is buffering
              // onError={() => onError()}               // Callback when video cannot be loaded
              style={styles.video} 
              repeat={false}
              resizeMode='contain'
              paused={videoPaused}
              onLoad={() => setVideoPaused(true)}
              onEnd={onVideoEnd}
          />
      </View>
      { videoPaused && !videoHasEnded &&
        <Pressable 
          style={styles.buttonReplayAbsolute}
          onPress={() => setVideoPaused(false)}
        >
          <Icon name='play-circle-outline' style={styles.buttonReplay} fill='white'/> 
        </Pressable>
      }

      { videoPaused && videoHasEnded &&
        <Pressable 
          style={styles.buttonReplayAbsolute}
          onPress={onReplay}
        >
          <Icon name='refresh' style={styles.buttonReplay} fill='white'/>
        </Pressable>
      }

      { !videoPaused && !videoHasEnded &&
        <Pressable 
          style={styles.buttonReplayAbsolute}
          onPress={() => setVideoPaused(true)}
        >
          <Icon name='pause-circle-outline' style={styles.buttonReplay} fill='white'/> 
        </Pressable>
      }
    </ModalComponent>
  )
}

const styles = StyleSheet.create({
  video: {
    height: '100%',
    width: '100%',
  },
  buttonReplayContainer: {
    height: 200,
    width: 200,
    borderWidth: 4,
    marginVertical: 10,
  },
  buttonReplayAbsolute: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgb(51, 102, 255)',
    borderRadius: 8,
    paddingBottom: 8,
    paddingHorizontal: 24,
    marginVertical: 8
  },
  buttonReplay: {
    marginTop: 10,
    height: 60,
    width: 60,
    color: 'white',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginHorizontal: 50,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default ModalViewVideo;