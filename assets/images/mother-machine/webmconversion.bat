ffmpeg -i  .\mm-trailer-hd.mp4 `
-c:v libvpx-vp9 -b:v 0 -crf 30 -pass 1 -an `
-deadline best -row-mt 1 `
-f null /dev/null && `
ffmpeg -i .\mm-trailer-hd.mp4 `
-c:v libvpx-vp9 -b:v 0 -crf 30 -pass 2 `
-deadline best -row-mt 1 `
-c:a libopus -b:a 96k -ac 2 `
output.webm