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
  const songAudio = "./මා සිතින්Ranjulaillukpitiya.mp3"; // Ensure the path is correct

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set duration when metadata is loaded
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      // Update current time while playing
      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });

      // Clean up event listeners
      return () => {
        audio.removeEventListener("loadedmetadata", () => {});
        audio.removeEventListener("timeupdate", () => {});
      };
    }
  }, []);

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src={songAudio} preload="metadata" />

        <Card
          isBlurred
          className={`bg-background/60 dark:bg-default-100/50 shadow-lg ${
            isMinimized ? "w-[200px] h-[70px]" : "w-[610px] h-auto"
          }`}
        >
          <CardBody className={`transition-all duration-300 ${isMinimized ? "p-2" : "p-4"}`}>
            {isMinimized ? (
              // Minimized View
              <div className="flex items-center justify-between">
                <Image
                  alt="Album cover"
                  src="https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/461327504_3787497404879906_7116841053049631049_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtYnPqAE0Om_0t71AXycuAL87LuqeiAMAvzsu6p6IAwEV3df3-HONlKr1n6ok6kPyhoauw67ZatgU1MlKSM8Sn&_nc_ohc=yZqA2oT8q04Q7kNvgH77mb0&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&_nc_gid=Aj0xT0luY3CuRVPlIO2qmbB&oh=00_AYBx3l-LtzHbPPDrsyUDoWtXpzFQlNxJLSQyZzuYh5qL2w&oe=67843009"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    onPress={togglePlayPause}
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="solid"
                  >
                    <PauseCircleIcon size={24} width={24} height={24} />
                  </Button>
                  <Button
                    isIconOnly
                    onPress={toggleMinimize}
                    className="data-[hover]:bg-foreground/10"
                    variant="solid"
                  >
                    ♪
                  </Button>
                </div>
              </div>
            ) : (
              // Expanded View
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover rounded-md"
                    height={200}
                    shadow="md"
                    src="https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/461327504_3787497404879906_7116841053049631049_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtYnPqAE0Om_0t71AXycuAL87LuqeiAMAvzsu6p6IAwEV3df3-HONlKr1n6ok6kPyhoauw67ZatgU1MlKSM8Sn&_nc_ohc=yZqA2oT8q04Q7kNvgH77mb0&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&_nc_gid=Aj0xT0luY3CuRVPlIO2qmbB&oh=00_AYBx3l-LtzHbPPDrsyUDoWtXpzFQlNxJLSQyZzuYh5qL2w&oe=67843009"
                    width="100%"
                  />
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">New</h3>
                      <p className="text-small text-foreground/80">1 Track</p>
                      <h1 className="text-large font-medium mt-2">Ma Sithin (මා සිතින්) - Ranjula Ilukpitiya</h1>
                    </div>
                    <Button
                      isIconOnly
                      onPress={() => setLiked((v) => !v)}
                      className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                      radius="full"
                      variant="solid"
                    >
                      <HeartIcon
                        className={liked ? "[&>path]:stroke-white" : "[&>path]:stroke-red-600"}
                        fill={liked ? "currentColor" : "red"}
                        width={24}
                        height={24}
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col mt-3 gap-1">
                    <Slider
                      aria-label="Music progress"
                      classNames={{
                        track: "bg-default-500/30",
                        thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                      }}
                      color="foreground"
                      defaultValue={0}
                      value={currentTime}
                      max={duration}
                      onValueChange={handleSliderChange}
                      size="sm"
                    />
                    <div className="flex justify-between">
                      <p className="text-small">{`${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}`}</p>
                      <p className="text-small text-foreground/50">{`${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center space-x-4">
                    <Button isIconOnly radius="full" variant="solid">
                      <RepeatOneIcon width={24} height={24} />
                    </Button>
                    <Button isIconOnly radius="full" variant="solid">
                      <PreviousIcon width={24} height={24} />
                    </Button>
                    <Button
                      isIconOnly
                      onPress={togglePlayPause}
                      radius="full"
                      variant="solid"
                      className="w-auto h-auto"
                    >
                      <PauseCircleIcon size={54} width={54} height={54} />
                    </Button>
                    <Button isIconOnly radius="full" variant="solid">
                      <NextIcon width={24} height={24} />
                    </Button>
                  </div>
                  <div className="flex justify-end mt-4">
                    {/* <Button
                      onPress={toggleMinimize}
                      size="sm"
                      variant="solid"
                      className="text-small"
                    >
                      Minimize
                    </Button> */}
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
    
    </>
  );
}