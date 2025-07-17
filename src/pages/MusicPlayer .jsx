import React, { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";
import { FaRegPlayCircle, FaPauseCircle } from "react-icons/fa";
import { BiSolidSkipNextCircle, BiSolidSkipPreviousCircle } from "react-icons/bi";

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function MusicPlayer() {
  const audioRef = useRef(null);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetchTracks();
  }, []);

  async function fetchTracks() {
    try {
      const response = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
      const data = await response.json();

      const formattedData = data.map((item, index) => ({
        name: item.title || `Track ${index + 1}`,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",  
        image: `https://picsum.photos/id/${237 + index}/300/300`,
      }));

      setTracks(formattedData);
      setCurrentTrack(0);
    } catch (error) {
      console.error("Error fetching tracks", error);
    }
  }

  useEffect(() => {
    if (audioRef.current && tracks.length > 0) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, tracks]);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const bar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / bar.clientWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  if (tracks.length === 0) {
    return <div className="music-player">Loading tracks...</div>;
  }

  return (
    <div className="music-player">
      <h1>Music Player App</h1>
      <img src={tracks[currentTrack].image} alt="Track" className="track-image" />
      <h2>{tracks[currentTrack].name}</h2>

      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      />
            <div className="time-bar-container">
        <span>{formatTime(currentTime)}</span>
        <div className="time-bar" onClick={handleSeek}>
          <div
            className="time-bar-progress"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="controls">
        <button onClick={prevTrack}><BiSolidSkipPreviousCircle size={40} /></button>
        <button onClick={playPauseHandler}>
          {isPlaying ? <FaPauseCircle size={40} /> : <FaRegPlayCircle size={40} />}
        </button>
        <button onClick={nextTrack}><BiSolidSkipNextCircle size={40} /></button>
      </div>
    </div>
  );
}

export default MusicPlayer;
