🎵 HOW TO ADD YOUR MUSIC 🎵
===========================

1. Put your music file (MP3, WAV, OGG, M4A) in this folder

2. For the BACKGROUND MUSIC:
   - Name it "song.mp3" (or change the filename in config.js)
   - Open config.js and make sure:
   
     music: {
       enabled: true,
       useLocalFile: true,
       localFileName: "song.mp3",  // Your music file name
       ...
     }

3. For the SLAP SOUND (when she clicks No):
   - Name it "slap.mp3"
   - It will play automatically when she presses No!

That's it! Your music will play when someone visits the page.

💡 TIPS:
- MP3 files work best for web browsers
- Keep file sizes reasonable (under 10MB recommended)
- The background music will loop automatically
