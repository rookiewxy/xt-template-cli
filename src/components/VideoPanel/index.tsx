/*
 * @Description: 时间面板
 * @Autor: wxy
 * @Date: 2021-04-24 15:17:46
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-19 15:32:49
 */
import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { Switch } from 'antd';
import cb from 'classnames';
import ue4c from '../../utils/ue4c';
import "./index.less";
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import videoZHCN from 'video.js/dist/lang/zh-CN.json';
import { Button } from "antd";
import videoList from './video-list';
require('videojs-flash');

const VideoPanel = () => {
  const videoRef = useRef()
  const [visible, setVisible] = useState(false);
  const [videoId, setVideoId] = useState<string>();
  const [videoInstance, setVideoInstance] = useState<videojs.Player>();

  const openPlayVideo = (id: string) => {
    setVisible(!visible);
    setVideoId(id);
    if (videoInstance) {
      videoInstance.dispose();
    }
  }

  const onClose = () => {
    setVisible(false);
    if (videoInstance) {
      videoInstance.dispose();
      setVideoInstance(undefined);
    }
  }

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    let newVideoInstance: any
    if (visible && videoId) {
      newVideoInstance = videojs('videoObj', {
        techOrder: ['html5', 'flash'],
      }, () => {
        const url = videoList.find(video => video.id === videoId)?.url || '';
        newVideoInstance.src({
          src: url,
          type: 'application/x-mpegURL'
          // src: 'rtmp://rtmp01open.ys7.com:1935/v3/openlive/C34788492_7_2?expire=1653733984&id=320268598389407744&t=39c0edd6594fe2a8514745bd05db43f80192a19fc800ffa4304698d916d65ebc&ev=100',
          // type: 'rtmp/flv'
        });
        newVideoInstance.play();

        setVideoInstance(newVideoInstance);
      });
    }
    const dispose = (instance: any) => {
      return () => {
        if (instance) {
          instance.dispose();
        }
      }
    }
    return dispose(newVideoInstance)

  }, [visible, videoId, videoRef.current]);



  useEffect(() => {
    ue4c.openVideoById = (data: any) => {
      openPlayVideo(data.id)
    };
  }, []);

  return (
    <>
      {/* <Button
        type="primary"
        onClick={() => { openPlayVideo('318329226263040000') }}
        style={{ position: "absolute", right: 550, top: 120 }}
      >
        播放视频
      </Button> */}
      {(visible && <div className="video-container">
        <div onClick={onClose} className="close">
          <div className="close-img"></div>
        </div>
        <video id="videoObj"
          // ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
          controls>
        </video>
      </div>
      )}
    </>
  );
};
export default VideoPanel;
