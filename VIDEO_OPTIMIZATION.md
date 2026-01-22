# 🎥 Video Optimization Guide

## Current Issue
The `tandoor.mp4` video (9.3MB) might be too large and causing the page to freeze/go black during loading.

## ✅ Immediate Fix Applied
I've added:
- **Poster image**: Shows tandoori.jpg while video loads
- **Error handling**: Auto-skips to next slide if video fails
- **Preload**: Starts loading video earlier

## 📉 Recommended: Optimize Your Video

### Option 1: Use Online Video Compressor (Easiest)
1. **Visit**: https://www.freeconvert.com/video-compressor
2. **Upload**: your `tandoor.mp4`
3. **Settings**:
   - Target size: **3-5 MB**
   - Format: MP4 (H.264)
   - Resolution: Keep as 1920x1080 or reduce to 1280x720
4. **Download** the compressed version
5. **Replace**: `/public/videos/tandoor.mp4` with the new file

### Option 2: Use FFmpeg (Best Quality)
If you have FFmpeg installed:

```bash
cd "/Users/praveendubbaka/Documents/Bawarchi Toronto/Bawarchi website/public/videos"

# Compress to ~3MB with good quality
ffmpeg -i tandoor.mp4 -vcodec h264 -crf 28 -preset slow -vf "scale=1280:720" tandoor-optimized.mp4

# Then replace
mv tandoor-optimized.mp4 tandoor.mp4
```

### Option 3: Trim the Video
If the video is too long:

```bash
# Keep only first 10 seconds
ffmpeg -i tandoor.mp4 -t 10 -c copy tandoor-trimmed.mp4
```

## 🎯 Target Specifications
For optimal web performance:
- **File size**: 2-5 MB (max)
- **Duration**: 5-10 seconds
- **Resolution**: 1280x720 or 1920x1080
- **Format**: MP4 (H.264 codec)
- **Frame rate**: 24-30 fps

## 🔄 Alternative Solution: Use Image Instead
If video continues to cause issues, we can:
1. Remove the video slide
2. Replace with a high-quality image
3. Keep the smooth image-only slider

Let me know if you want me to:
- Remove the video and use images only
- Wait for you to optimize the video
- Or if the current fix works!

## 📱 Test After Deploy
After the fix deploys (2-3 minutes), test:
1. Hard refresh: `Cmd + Shift + R`
2. Watch slide #3
3. If it still freezes, we should remove the video or use a smaller file
