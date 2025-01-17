const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the index.html located outside the public folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Adjust path if needed
});

// Endpoint to download the resume
app.get("/download-resume", (req, res) => {
  const file = path.join(__dirname, "public", "resume.pdf"); // Path to your resume file
  res.download(file, "resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
