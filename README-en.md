# sd-webui-infinite-image-browsing


A high-performance image (file) browser 😋 with built-in BaiduNetdisk file transfer.

It is suitable for use in all places, and has been optimized for cloud computing, You can use thumbnails to quickly preview, so fast that you almost don't feel the loading time.

There is also a standalone version [baiduyun-web-transfer](https://github.com/zanllp/baiduyun-web-transfer) that does not depend on sd-webui.

If you have any questions or suggestions about this project, please submit an issue on GitHub (Both Chinese and English are acceptable).

## Key Features

> The function of searching images using prompt, Lora, and model will be available soon.

- Multi-tab and multi-pane like Chrome and VS Code. Create tabs and preview multiple folders, move files between panes.
- Supports using 'walk' mode to browse images, automatically loading the next folder `(similar to os.walk)`, allowing you to browse all images without paging. Tested to work properly with over 27,000 files.
- View image generation information, send images to other tabs, optional thumbnail preview, full-screen preview, and move.
- Preview based on the file tree structure, supports basic file operations as well as multi-select deletion/moving.

[Video demos can be viewed on Bilibili(chinese only)](https://space.bilibili.com/27227392/channel/series)

Documentation will be updated later.

It is strongly recommended to use "Open in new tab" (in the upper right corner of the plugin startup page), which is much more comfortable than being embedded in Gradio. However, the "send image to other tab" function cannot be used in this mode.

## Preview

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/25872019/232167682-67f83b00-4391-4394-a7f6-6e4c9d11f252.png">

<img width="1906" alt="image" src="https://user-images.githubusercontent.com/25872019/232167416-32a8b19d-b766-4f98-88f6-a1d48eaebec0.png">

### Right-click menu
<img width="536" alt="image" src="https://user-images.githubusercontent.com/25872019/232162244-e728d510-b6c6-45e6-afb3-872bd67db05b.png">

### Walk mode


https://user-images.githubusercontent.com/25872019/230768207-daab786b-d4ab-489f-ba6a-e9656bd530b8.mp4




### Dark mode

<img width="1916" alt="image" src="https://user-images.githubusercontent.com/25872019/230064879-c95866ac-999d-4d4b-87ea-3e38c8479415.png">

## FAQ

### How to open the right-click menu on mobile devices?

You need to enable "Support long press to open right-click menu" in the global settings first, and then use long press to perform the operation instead of right-clicking to open the right-click menu.

![Screenshot_20230416_141759_com android chrome](https://user-images.githubusercontent.com/25872019/232276303-c175e78a-d127-4afd-9281-85080bf75c5a.jpg)
