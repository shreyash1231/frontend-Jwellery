import React, { useState, useEffect, useRef } from "react";
import { PlayCircleFilled, SoundOutlined } from "@ant-design/icons";
import { getAllReelsApi } from "../apis/service";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Reels = () => {
  const [allReels, setAllReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    getAllReelsApi().then((res) => {
      setAllReels(res?.data || []);
    });
  }, []);

   useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (

<>


    </>
  );
};

export default Reels;
