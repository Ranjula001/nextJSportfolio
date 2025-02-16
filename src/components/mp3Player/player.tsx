"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import {
  HeartIcon,
  RepeatOneIcon,
  PreviousIcon,
  PauseCircleIcon,
  NextIcon,
} from "./icons";

export default function FloatingAudioPlayer() {
  const [liked, setLiked] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const songAudio = "/මා සිතින්Ranjulaillukpitiya.mp3"; // Ensure file is in public folder

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadedmetadata', updateData);
    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('loadedmetadata', updateData);
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={songAudio} preload="metadata" />
      
      <Card
        isBlurred
        className={`bg-background/60 dark:bg-default-100/50 shadow-lg ${
          isMinimized 
            ? "w-[200px] max-w-[90vw] h-[70px]" 
            : "w-full max-w-[610px] h-auto"
        } transition-all duration-300`}
      >
        <CardBody className={isMinimized ? "p-2" : "p-4"}>
          {isMinimized ? (
            <div className="flex items-center justify-between gap-2">
              <Image
                alt="Album cover"
                src="/me.jpg"
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Ma Sithin</p>
                <p className="text-xs text-foreground/80 truncate">Ranjula Ilukpitiya</p>
              </div>
              <div className="flex gap-2">
                <Button
                  isIconOnly
                  onPress={togglePlayPause}
                  className="text-foreground"
                  radius="full"
                  size="sm"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <PauseCircleIcon size={24} />
                  ) : (
                    <PauseCircleIcon size={24} />
                  )}
                </Button>
                <Button
                  isIconOnly
                  onPress={() => setIsMinimized(false)}
                  variant="flat"
                  size="sm"
                  aria-label="Maximize"
                >
                  ❤️
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="relative col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover rounded-md"
                  height={200}
                  src="/me.jpg"
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-8 gap-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-medium">Ma Sithin (මා සිතින්)</h1>
                    <p className="text-sm text-foreground/80">Ranjula Ilukpitiya</p>
                  </div>
                  <Button
                    isIconOnly
                    onPress={() => setLiked(!liked)}
                    className="text-default-900/60"
                    radius="full"
                    variant="light"
                    aria-label="Like"
                  >
                    <HeartIcon
                      className={liked ? "text-red-500" : "text-foreground/50"}
                      fill={liked ? "currentColor" : "none"}
                      size={24}
                    />
                  </Button>
                </div>

                <Slider
                  aria-label="Music progress"
                  value={currentTime}
                  max={duration}
                  onChange={handleSliderChange}
                  size="sm"
                  classNames={{
                    track: "bg-default-500/30",
                    thumb: "w-3 h-3 after:w-3 after:h-3 after:bg-foreground",
                  }}
                />

                <div className="flex justify-between text-sm">
                  <span>{formatTime(currentTime)}</span>
                  <span className="text-foreground/50">{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button isIconOnly variant="light" aria-label="Repeat">
                    <RepeatOneIcon size={20} />
                  </Button>
                  <Button isIconOnly variant="light" aria-label="Previous">
                    <PreviousIcon size={20} />
                  </Button>
                  <Button
                    isIconOnly
                    onPress={togglePlayPause}
                    className="w-12 h-12"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <PauseCircleIcon size={40} />
                    ) : (
                      <PauseCircleIcon size={40} />
                    )}
                  </Button>
                  <Button isIconOnly variant="light" aria-label="Next">
                    <NextIcon size={20} />
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button
                    onPress={() => setIsMinimized(true)}
                    size="sm"
                    variant="flat"
                    // endContent={<PauseCircleIcon size={14} />}
                    aria-label="Minimize"
                  >
                    Minimize
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}