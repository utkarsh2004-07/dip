const express = require("express");
const app = express();
const port = 3000;

// MATLAB Code Snippets Response
const matlabSnippets = {
  "2a": `img = rgb2gray(imread('E:\\dip image.jpg')); 
subplot(1,2,1), imshow(img), title('Original Image');
L = 225;
a = uint8((L/log10(1+L)) * log10(1 + double(img)));
subplot(1,2,2), imshow(a), title('Practical_2a');`,

  "2b": `img1 = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
img = rgb2gray(img1); 
subplot(1,2,1), imshow(img), title('Original Image');
img_neg = 255 - img;
subplot(1,2,2), imshow(img_neg), title('Negative Image');`,

  "2c": `img = rgb2gray(imread('https://media.istockphoto.com/id/1388648617/photo.jpg'));
subplot(1,2,1), imshow(img), title('Original Image');
gamma = 10;
j = (double(img) .^ gamma);
subplot(1,2,2), imshow(j, []), title('Power Law Transformation');`,

  "3a": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,3,1), imshow(img), title('Original Image');
subplot(1,3,2), imshow(uint8(double(img) - 140)), title('Brightness Decreased');
subplot(1,3,3), imshow(uint8(double(img) + 140)), title('Brightness Increased');`,

  "3b": `img = rgb2gray(imread('https://media.istockphoto.com/id/1388648617/photo.jpg'));
subplot(1,3,1), imshow(img), title('Original Image');
subplot(1,3,2), imshow(uint8(double(img) * 0.5)), title('Low Contrast');
subplot(1,3,3), imshow(uint8(double(img) * 2)), title('High Contrast');`,

  "3c": `p = rgb2gray(imread('https://media.istockphoto.com/id/1388648617/photo.jpg'));
subplot(1,2,1), imshow(p), title('Original Image');
T = 190;
p1 = uint8(p >= T) * 255;
subplot(1,2,2), imshow(p1), title('Threshold Image');`,

  "4a": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,4,1), imshow(img), title('Original Image');
subplot(1,4,2), imshow(img(:,:,2)), title('Green Plane');
subplot(1,4,3), imshow(img(:,:,1)), title('Red Plane');
subplot(1,4,4), imshow(img(:,:,3)), title('Blue Plane');`,

  "4b": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,2,1), imshow(img), title('Original Image');
OP = img(:,:,[2,3,1]); 
subplot(1,2,2), imshow(OP), title('Pseudocoloring');`,

  "5a": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,3,1), imshow(img), title('Original Image');
subplot(1,3,2), imshow(uint8(double(img) - 140)), title('Brightness Decreased');
subplot(1,3,3), imshow(uint8(double(img) + 140)), title('Brightness Increased');`,

  "5b": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,2,1), imshow(img), title('Original Image');
subplot(1,2,2), imshow(uint8(double(img) * 3)), title('Contrast Adjusted');`,

  "5c": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
subplot(1,2,1), imshow(img), title('Original Image');
T = 155;
img = uint8(img >= T) * 255;
subplot(1,2,2), imshow(img), title('Thresholded Image');`,

  "6": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
gray_img = rgb2gray(img);
subplot(1,2,1), imshow(gray_img), title('Original Image');
subplot(1,2,2), imhist(gray_img), title('Histogram');`,

  "7": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
gray_img = rgb2gray(img);
equalized_img = histeq(gray_img);
subplot(2,2,1), imshow(gray_img), title('Original Image');
subplot(2,2,2), imhist(gray_img), title('Histogram of Original Image');
subplot(2,2,3), imshow(equalized_img), title('Histogram Equalized Image');
subplot(2,2,4), imhist(equalized_img), title('Equalized Histogram');`,

  "9": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
gray_img = rgb2gray(img);
noisy_img = imnoise(gray_img, 'gaussian');
output1 = imfilter(noisy_img, ones(3)/9, 'same');
output2 = imfilter(noisy_img, ones(5)/25, 'same');
subplot(2,2,1), imshow(gray_img), title('Original Image');
subplot(2,2,2), imshow(noisy_img), title('Noisy Image');
subplot(2,2,3), imshow(output1), title('Smoothed with 3×3 Mask');
subplot(2,2,4), imshow(output2), title('Smoothed with 5×5 Mask');`,

  "10": `img = imread('https://media.istockphoto.com/id/1388648617/photo.jpg');
gray_img = rgb2gray(img);
filtered_img = imfilter(gray_img, fspecial('unsharp'));
subplot(1,2,1), imshow(gray_img), title('Original Image');
subplot(1,2,2), imshow(filtered_img), title('High Pass Filtered Image');`
};

// API Endpoint to get MATLAB code by ID
app.get("/matlab/:id", (req, res) => {
  const id = req.params.id.toLowerCase();
  if (matlabSnippets[id]) {
    res.json({ id, code: matlabSnippets[id] });
  } else {
    res.status(404).json({ error: "MATLAB code not found for the given ID" });
  }
});

app.get('/', (req, res) => {
  res.send(matlabSnippets)
})
// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});







