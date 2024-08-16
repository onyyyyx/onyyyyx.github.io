import os
from bs4 import BeautifulSoup

# Define the HTML files and corresponding image directories
html_files = [
    {"file": "stars.html", "dir": "images/stars/"},
    {"file": "deepsky.html", "dir": "images/deepsky/"},
    {"file": "moon.html", "dir": "images/moon/"},
    {"file": "openfield.html", "dir": "images/openfield/"},
]

# Iterate over the HTML files and directories
for html_file in html_files:
    with open(html_file["file"], "r+") as f:
        html_content = f.read()

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, "html.parser")

    # Find the .gallery div
    gallery_div = soup.find("div", {"class": "gallery"})

    # Remove all the content of the .gallery div
    gallery_div.clear()

    # Iterate over the files in the image directory
    for filename in os.listdir(html_file["dir"]):
        # Create a new <img> tag
        img_tag = soup.new_tag("img", src=f"{html_file['dir']}{filename}", alt=filename)

        # Add the <img> tag to the .gallery div
        gallery_div.append(img_tag)

    # Write the modified HTML content back to the file
    with open(html_file["file"], "w") as f:
        f.write(str(soup))