# Porch Couch

[Site tour](#site-tour)

[Posting instructions](#quick-guide-to-making-a-post)

Porch Couch Podcast TV homepage: [live site here](https://porchcouch.tv)

Welcome to your site, Jacob! Here's a rundown on how to add or edit stuff. The site is built from files in this project, so you can change a lot by adding, deleting, and changing these files. Let's go through the important files.

## Site Tour

First, find `_config.yml`; it's not in a folder. This file has some basic information about your site that applies to every page. Try adding or updating contact information here, and then save the file.

Next, take a look at our **Pages**. The pages are not in a folder, they are every file that ends in `.md` besides `README.md`. At the start, we only have `index.md`, `blog.md`, and `other_pods.md`; those are your 3 pages right now. If you look at those files, you'll see a top section, and a bottom section.

- The top part, in between the `---` lines, is where you put data like the title, layout, and etc. For now, it's best that you copy that part from an existing page if you make a new page, because it's easy to make typos.
- The bottom part, below the second `---` line, is the content of the page. You can write whatever you want here, and it's harder to make typos. [Here](https://www.markdownguide.org/basic-syntax/) is a guide if you want to do things like bold, italic, lists, and etc. But plain text works fine, too.

Next, take a look at our **Posts**. These are all the files inside the`_posts/` folder. NOTE that every file in `_posts/` needs to be named with the right format. Like `yyyy-mm-dd-title.md`. It needs to have that date as the file name, and if it's not a real date (or the date is in the future), your new post won't publish. Currently there's two test posts that aren't published to show you the format.

Take a look at one of these files; it's also divided into a top and bottom part. For new posts, it's best for you to copy the top part from a test post, follow the directions for pasting media links that I included, and just change the parts you need to.

## Quick guide to making a post

1. Go to one of the example posts by clicking on the `_posts` folder. There's one for your main PCPTV podcast, and one for guest podcasts.

2. Copy the file into a new post. (Go to the example post. Select the text and copy it. Go back to the `_posts` folder. Click the "Add file" button, and then "Create new file". Name your file `yyyy-mm-dd-title.md` with the post date and title. Example: `2020-10-15-my-post.md`. Paste the text from the example post into the new file).

3. Change the info in the example post to whatever you want. Make sure to replace the media links, and delete the line near the top of the file that says "published: false"

4. Save the file when you're ready to post it
